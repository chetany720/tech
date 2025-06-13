
import React, { useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { SAMPLE_BLOG_POSTS } from '../constants';
import { Card, Breadcrumbs } from '../components/PageElements';
import NotFoundPage from './NotFoundPage';
import { BlogPost, ContentCategory } from '../types';

const BlogPostDetailView: React.FC<{ post: BlogPost }> = ({ post }) => {
  const contentWithAds: React.ReactNode[] = [];

  if (typeof post.content === 'string') {
    const parts = post.content.split(/(<\/p>)/gi);
    let currentParagraph = "";
    let paragraphCount = 0;

    for (let i = 0; i < parts.length; i++) {
        currentParagraph += parts[i];
        if (parts[i].toLowerCase() === '</p>') {
            contentWithAds.push(<div key={`part-${paragraphCount}`} dangerouslySetInnerHTML={{ __html: currentParagraph }} />);
            currentParagraph = "";
            paragraphCount++;
        }
    }
    if(currentParagraph) { 
        contentWithAds.push(<div key={`part-final`} dangerouslySetInnerHTML={{ __html: currentParagraph }} />);
    }

  } else {
    contentWithAds.push(post.content); 
  }


  return (
    <article className="bg-white dark:bg-neutral-800/50 shadow-xl rounded-lg p-6 sm:p-8">
      <header className="mb-8">
        <Breadcrumbs items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title }
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">{post.title}</h1>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[400px] object-cover rounded-lg my-6 shadow-md" />
        )}
        <div className="text-sm text-neutral-500 dark:text-neutral-400 flex flex-wrap gap-x-4 gap-y-1">
          <span>By: {post.author}</span>
          <span>Date: {new Date(post.date).toLocaleDateString()}</span>
          <span>Category: <Link to={`/blog?category=${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary dark:text-primary-light hover:underline">{post.category}</Link></span>
        </div>
        {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 dark:bg-primary-light/20 text-primary dark:text-primary-light px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        )}
      </header>
      
      <div className="prose dark:prose-invert max-w-none leading-relaxed text-neutral-700 dark:text-neutral-300">
        { typeof post.content === 'string' ? contentWithAds : post.content }
      </div>
      
      <section className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_BLOG_POSTS.filter(b => b.id !== post.id && b.category === post.category).slice(0, 2).map(related => (
            <Card
              key={related.id}
              title={related.title}
              description={related.excerpt}
              imageUrl={related.imageUrl}
              linkTo={`/blog/${related.slug}`}
              category={related.category}
              date={new Date(related.date).toLocaleDateString()}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

const BlogListPage: React.FC<{ posts: BlogPost[]; currentCategory?: string }> = ({ posts, currentCategory }) => {
  const allCategories = Object.values(ContentCategory);
  
  return (
    <div>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Blog' }]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
        {currentCategory ? `${currentCategory} Posts` : 'Tech Teach Blog'}
      </h1>
       <div className="mb-8 flex flex-wrap gap-2">
        <Link 
            to="/blog" 
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${!currentCategory ? 'bg-primary text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'}`}
        >
            All
        </Link>
        {allCategories.map(cat => {
            const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
             const isActive = currentCategory?.toLowerCase().replace(/\s+/g, '-') === catSlug;
            return (
                <Link 
                    key={catSlug} 
                    to={`/blog?category=${catSlug}`}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? 'bg-primary text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'}`}
                >
                    {cat}
                </Link>
            );
        })}
      </div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <Card
              key={post.id}
              title={post.title}
              description={post.excerpt}
              imageUrl={post.imageUrl}
              linkTo={`/blog/${post.slug}`}
              category={post.category}
              date={new Date(post.date).toLocaleDateString()}
              tags={post.tags}
            />
          ))}
        </div>
      ) : (
         <p className="text-center text-neutral-600 dark:text-neutral-400 py-10">
          No blog posts found for this category.
        </p>
      )}
    </div>
  );
};

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const categoryFilterSlug = queryParams.get('category');

  const postsToDisplay = useMemo(() => {
    if (categoryFilterSlug) {
      const foundCategory = Object.values(ContentCategory).find(
        cat => cat.toLowerCase().replace(/\s+/g, '-') === categoryFilterSlug
      );
      if (foundCategory) {
        return SAMPLE_BLOG_POSTS.filter(p => p.category === foundCategory);
      }
      return SAMPLE_BLOG_POSTS.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === categoryFilterSlug);
    }
    return SAMPLE_BLOG_POSTS;
  }, [categoryFilterSlug]);

  const currentCategoryName = useMemo(() => {
    if (categoryFilterSlug) {
       const foundCategory = Object.values(ContentCategory).find(
        cat => cat.toLowerCase().replace(/\s+/g, '-') === categoryFilterSlug
      );
      return foundCategory || categoryFilterSlug;
    }
    return undefined;
  }, [categoryFilterSlug]);


  if (slug) {
    const post = SAMPLE_BLOG_POSTS.find(p => p.slug === slug);
    if (!post) {
      return <NotFoundPage />;
    }
    return <BlogPostDetailView post={post} />;
  }

  return <BlogListPage posts={postsToDisplay} currentCategory={currentCategoryName} />;
};

export default BlogPage;
