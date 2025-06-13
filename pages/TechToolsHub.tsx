
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_TECH_TOOLS } from '../constants';
import { Breadcrumbs, Button } from '../components/PageElements';
import NotFoundPage from './NotFoundPage';

const TechToolsHub: React.FC = () => {
  const { toolSlug } = useParams<{ toolSlug?: string }>();
  const navigate = useNavigate();

  const selectedTool = toolSlug ? ALL_TECH_TOOLS.find(t => t.slug === toolSlug) : null;

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[
        { name: 'Home', path: '/' },
        { name: 'Tech Tools', path: '/tools' },
        ...(selectedTool ? [{ name: selectedTool.name }] : [])
      ]} />
      
      {!selectedTool && (
        <>
          <section className="bg-white dark:bg-neutral-800/50 shadow-lg rounded-lg p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Tech Tools</h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              Explore our collection of handy tools designed to assist developers and tech enthusiasts.
              Select a tool from the list below to get started.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_TECH_TOOLS.map(tool => (
                <Link
                  key={tool.id}
                  to={`/tools/${tool.slug}`}
                  className="block p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-primary dark:hover:border-primary-light"
                >
                  <div className="flex items-center mb-3">
                    {tool.icon && React.isValidElement(tool.icon) && (
                      <span className="mr-3 text-2xl text-primary dark:text-primary-light">
                        {React.cloneElement(tool.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-8 h-8" })}
                      </span>
                    )}
                    <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary dark:group-hover:text-primary-light">{tool.name}</h2>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">{tool.description.split('.')[0] + '.'}</p>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      {selectedTool && (
        <div className="p-4 sm:p-6 bg-white dark:bg-neutral-800/50 rounded-lg shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
                {selectedTool.icon && React.isValidElement(selectedTool.icon) && (
                  <span className="mr-3 text-3xl text-primary dark:text-primary-light">
                    {React.cloneElement(selectedTool.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-10 h-10" })}
                  </span>
                )}
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50">{selectedTool.name}</h1>
            </div>
            <Button
              onClick={() => navigate('/tools')}
              variant="outline"
              size="sm"
            >
              &larr; Back to all tools
            </Button>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">{selectedTool.description}</p>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 sm:p-6 rounded-md shadow-inner">
            <selectedTool.component />
          </div>
        </div>
      )}
      
      {toolSlug && !selectedTool && <NotFoundPage message="Tool not found." />}
    </div>
  );
};

export default TechToolsHub;
