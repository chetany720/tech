
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CategoryCard, Button } from '../components/PageElements';
import { SAMPLE_TUTORIALS, SAMPLE_BLOG_POSTS, CATEGORIES } from '../constants';
import { CodePlayground } from '../components/CodeTools';

const HomePage: React.FC = () => {
  const featuredTutorials = SAMPLE_TUTORIALS.slice(0, 3);
  const recentBlogPosts = SAMPLE_BLOG_POSTS.slice(0, 2);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark rounded-lg shadow-xl p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Welcome to Tech Teach</h1>
        <p className="text-lg sm:text-xl text-neutral-100 dark:text-neutral-200 mb-8 max-w-2xl mx-auto">
          Your ultimate destination for learning technology, programming, and exploring powerful developer tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
            <Link to="/tutorials" className="w-full block">Explore Tutorials</Link>
          </Button>
          <Button size="lg" className="bg-white text-primary hover:bg-neutral-100 dark:bg-neutral-100 dark:text-primary-dark dark:hover:bg-neutral-200 w-full sm:w-auto">
             <Link to="/tools" className="w-full block">Try Tech Tools</Link>
          </Button>
        </div>
      </section>

      {/* Featured Tutorials Section */}
      <section>
        <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Featured Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTutorials.map(tutorial => (
            <Card
              key={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              imageUrl={tutorial.imageUrl}
              linkTo={`/tutorials/${tutorial.slug}`}
              category={tutorial.category}
              tags={tutorial.tags}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">
            <Link to="/tutorials">View All Tutorials</Link>
          </Button>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section>
        <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Code Playground Teaser */}
      <section>
        <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Test Your Skills: Code Playground</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Try our interactive HTML, CSS, and JavaScript playground. Experiment with code snippets and see results instantly!
        </p>
        <CodePlayground />
      </section>

      {/* Recent Blog Posts Section */}
      <section>
        <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Recent Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentBlogPosts.map(post => (
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
        <div className="text-center mt-8">
          <Button variant="outline">
            <Link to="/blog">Read More on Our Blog</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
