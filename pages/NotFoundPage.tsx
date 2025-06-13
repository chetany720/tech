
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/PageElements';

interface NotFoundPageProps {
  message?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ message = "The page you're looking for doesn't exist." }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 min-h-[calc(100vh-10rem)]"> {/* Adjust min-height based on header/footer */}
      <svg className="w-24 h-24 text-primary dark:text-primary-light mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828L17.657 12l-2.829-2.828m-5.656 5.656L6.343 12l2.829-2.828" />
         <line x1="10" y1="14" x2="14" y2="10" strokeWidth={1.5} />
         <line x1="14" y1="14" x2="10" y2="10" strokeWidth={1.5} />
      </svg>
      <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-primary-light mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Oops! Page Not Found</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">{message}</p>
      <Button size="lg">
        <Link to="/">Go Back to Homepage</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;