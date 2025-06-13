
import React, { useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { SAMPLE_TUTORIALS, DocumentArrowDownIcon, PlayCircleIcon } from '../constants';
import { Card, Breadcrumbs, Button } from '../components/PageElements';
import { CodeBlock } from '../components/CodeTools';
import NotFoundPage from './NotFoundPage';
import { Tutorial, TutorialStep, ContentCategory } from '../types';

const TutorialStepView: React.FC<{ step: TutorialStep; index: number }> = ({ step, index }) => {
  return (
    <div className="mb-8 p-4 border-l-4 border-primary dark:border-primary-light bg-neutral-50 dark:bg-neutral-800/30 rounded-r-lg shadow">
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Step {index + 1}: {step.title}</h3>
      {typeof step.explanation === 'string' ? (
        <p className="text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">{step.explanation}</p>
      ) : (
        <div className="text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed prose dark:prose-invert max-w-none">{step.explanation}</div>
      )}
      {step.code && <CodeBlock code={step.code} language={step.language} />}
    </div>
  );
};

const TutorialDetailView: React.FC<{ tutorial: Tutorial }> = ({ tutorial }) => {
  const contentWithAds: React.ReactNode[] = [];
  tutorial.steps.forEach((step, index) => {
    contentWithAds.push(<TutorialStepView key={`step-${index}`} step={step} index={index} />);
  });

  return (
    <article className="bg-white dark:bg-neutral-800/50 shadow-xl rounded-lg p-6 sm:p-8">
      <header className="mb-8">
        <Breadcrumbs items={[
          { name: 'Home', path: '/' },
          { name: 'Tutorials', path: '/tutorials' },
          { name: tutorial.title }
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">{tutorial.title}</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-2">{tutorial.description}</p>
        <div className="text-sm text-neutral-500 dark:text-neutral-400 flex flex-wrap gap-x-4 gap-y-1">
          <span>By: {tutorial.author || 'Tech Teach Team'}</span>
          <span>Date: {tutorial.date ? new Date(tutorial.date).toLocaleDateString() : 'N/A'}</span>
          <span>Category: <Link to={`/tutorials?category=${tutorial.category.toLowerCase().replace(/[\s/]+/g, '-')}`} className="text-primary dark:text-primary-light hover:underline">{tutorial.category}</Link></span>
          {tutorial.estimatedTime && <span>Est. Time: {tutorial.estimatedTime}</span>}
        </div>
        {tutorial.tags && tutorial.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
                {tutorial.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 dark:bg-primary-light/20 text-primary dark:text-primary-light px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        )}
      </header>

      {tutorial.imageUrl && (
         <img src={tutorial.imageUrl} alt={tutorial.title} className="w-full h-auto max-h-[400px] object-cover rounded-lg my-6 shadow-md" />
      )}
      
      {tutorial.videoUrl && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
            <PlayCircleIcon className="w-6 h-6 mr-2 text-primary dark:text-primary-light" /> Video Tutorial
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md bg-black"> {/* Added bg-black for iframe parent */}
            <iframe
              src={tutorial.videoUrl.replace("watch?v=", "embed/")} // Ensure embed URL
              title={`${tutorial.title} Video Tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      )}

      <section className="prose dark:prose-invert max-w-none">
        {contentWithAds}
      </section>

      {tutorial.downloadLink && tutorial.downloadLink !== '#' && (
        <section className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
            <DocumentArrowDownIcon className="w-6 h-6 mr-2 text-primary dark:text-primary-light" /> Downloadable Files
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            Download supplementary materials for this tutorial (e.g., code samples, PDF guide).
          </p>
          <Button variant="secondary" onClick={() => window.open(tutorial.downloadLink, '_blank')}>
            Download Files
          </Button>
        </section>
      )}

      <section className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Related Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_TUTORIALS.filter(t => t.id !== tutorial.id && t.category === tutorial.category).slice(0, 2).map(related => (
            <Card
              key={related.id}
              title={related.title}
              description={related.description}
              imageUrl={related.imageUrl}
              linkTo={`/tutorials/${related.slug}`}
              category={related.category}
              date={related.date ? new Date(related.date).toLocaleDateString() : undefined}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

const TutorialsListPage: React.FC<{ tutorials: Tutorial[]; currentCategory?: string }> = ({ tutorials, currentCategory }) => {
  const allCategories = Object.values(ContentCategory);

  return (
    <div>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Tutorials' }]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
        {currentCategory ? `${currentCategory} Tutorials` : 'All Tutorials'}
      </h1>
      <div className="mb-8 flex flex-wrap gap-2">
        <Link 
            to="/tutorials" 
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${!currentCategory ? 'bg-primary text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'}`}
        >
            All
        </Link>
        {allCategories.map(cat => {
            const catSlug = cat.toLowerCase().replace(/[\s/]+/g, '-');
            const isActive = currentCategory?.toLowerCase().replace(/[\s/]+/g, '-') === catSlug;
            return (
                <Link 
                    key={catSlug} 
                    to={`/tutorials?category=${catSlug}`}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? 'bg-primary text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'}`}
                >
                    {cat}
                </Link>
            );
        })}
      </div>

      {tutorials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map(tutorial => (
            <Card
              key={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              imageUrl={tutorial.imageUrl}
              linkTo={`/tutorials/${tutorial.slug}`}
              category={tutorial.category}
              date={tutorial.date ? new Date(tutorial.date).toLocaleDateString() : undefined}
              tags={tutorial.tags}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-600 dark:text-neutral-400 py-10">
          No tutorials found for this category.
        </p>
      )}
    </div>
  );
};

const TutorialsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const categoryFilterSlug = queryParams.get('category');

  const tutorialsToDisplay = useMemo(() => {
    if (categoryFilterSlug) {
      // Find the ContentCategory enum value or a display name from categoryFilterSlug
      const foundCategory = Object.values(ContentCategory).find(
        cat => cat.toLowerCase().replace(/[\s/]+/g, '-') === categoryFilterSlug
      );
      if (foundCategory) {
        return SAMPLE_TUTORIALS.filter(t => t.category === foundCategory);
      }
      // Fallback for slugs that might not directly map to ContentCategory display names but are in tutorial slugs or actual category value
      return SAMPLE_TUTORIALS.filter(t => t.category.toLowerCase().replace(/[\s/]+/g, '-') === categoryFilterSlug || t.slug.includes(categoryFilterSlug));
    }
    return SAMPLE_TUTORIALS;
  }, [categoryFilterSlug]);

  const currentCategoryName = useMemo(() => {
    if (categoryFilterSlug) {
      const foundCategory = Object.values(ContentCategory).find(
        cat => cat.toLowerCase().replace(/[\s/]+/g, '-') === categoryFilterSlug
      );
      return foundCategory || categoryFilterSlug; // Return enum value or slug if not found
    }
    return undefined;
  }, [categoryFilterSlug]);

  if (slug) {
    const tutorial = SAMPLE_TUTORIALS.find(t => t.slug === slug);
    if (!tutorial) {
      return <NotFoundPage />;
    }
    return <TutorialDetailView tutorial={tutorial} />;
  }

  return <TutorialsListPage tutorials={tutorialsToDisplay} currentCategory={currentCategoryName} />;
};

export default TutorialsPage;
