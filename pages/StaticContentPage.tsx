
import React from 'react';
import { STATIC_PAGES_CONTENT } from '../constants';
import { StaticPage } from '../types';
import { Breadcrumbs } from '../components/PageElements';
import NotFoundPage from './NotFoundPage';

interface StaticContentPageProps {
  pageSlug: StaticPage['slug'];
}

const StaticContentPage: React.FC<StaticContentPageProps> = ({ pageSlug }) => {
  const page = STATIC_PAGES_CONTENT[pageSlug];

  if (!page) {
    return <NotFoundPage message={`Content for "${pageSlug}" not found.`} />;
  }

  return (
    <div className="bg-white dark:bg-neutral-800/50 shadow-xl rounded-lg p-6 sm:p-8">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: page.title }]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-8">{page.title}</h1>
      
      <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {page.content}
      </div>
      
    </div>
  );
};

export default StaticContentPage;
