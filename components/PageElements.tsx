
import React, { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { NAV_LINKS, FOOTER_LINKS, SunIcon, MoonIcon, ChevronRightIcon } from '../constants';
import { Category } from '../types';

// Header Component
export const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-neutral-100 dark:bg-neutral-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-light">
              Tech Teach
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none"
                aria-label="Open mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Tech Teach</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Your go-to resource for learning technology and programming. Empowering curious minds.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {NAV_LINKS.map(link => (
                <li key={`footer-nav-${link.name}`}>
                  <Link to={link.path} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Legal</h3>
            <ul className="space-y-1">
              {FOOTER_LINKS.map(link => (
                <li key={`footer-legal-${link.name}`}>
                  <Link to={link.path} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 dark:border-neutral-700 pt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Tech Teach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Layout Component
interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
            {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyle = "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-colors duration-150 inline-flex items-center justify-center";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-primary text-white hover:bg-primary-dark focus:ring-primary-light';
      break;
    case 'secondary':
      variantStyle = 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-light';
      break;
    case 'outline':
      variantStyle = 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary-light dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light/10';
      break;
    case 'ghost':
      variantStyle = 'text-primary hover:bg-primary/10 focus:ring-primary-light dark:text-primary-light dark:hover:bg-primary-light/10';
      break;
  }

  let sizeStyle = '';
  switch (size) {
    case 'sm':
      sizeStyle = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeStyle = 'px-4 py-2 text-sm';
      break;
    case 'lg':
      sizeStyle = 'px-6 py-3 text-base';
      break;
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Card Component
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  linkTo: string;
  category?: string;
  date?: string;
  tags?: string[];
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, linkTo, category, date, tags }) => {
  return (
    <Link to={linkTo} className="block group bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-6">
        {category && <p className="text-xs font-semibold text-primary dark:text-primary-light uppercase mb-1">{category}</p>}
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-primary dark:group-hover:text-primary-light">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-3">{description}</p>
        {date && <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-3">{date}</p>}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        )}
        <span className="text-sm font-medium text-primary dark:text-primary-light group-hover:underline">Read More &rarr;</span>
      </div>
    </Link>
  );
};

// CategoryCard Component
interface CategoryCardProps {
  category: Category;
}
export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/tutorials?category=${category.slug}`} className="block group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="mb-4 text-primary dark:text-primary-light">
        {category.icon && React.isValidElement(category.icon) ? 
          React.cloneElement(category.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-10 h-10" }) : 
          <div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>}
      </div>
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-primary dark:group-hover:text-primary-light">{category.name}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{category.description}</p>
    </Link>
  );
};

// Breadcrumbs Component
interface BreadcrumbItem {
  name: string;
  path?: string;
}
interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="mb-6 text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex flex-wrap items-center space-x-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className="text-primary dark:text-primary-light hover:underline">
                {item.name}
              </Link>
            ) : (
              <span className="text-neutral-500 dark:text-neutral-400">{item.name}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRightIcon className="h-4 w-4 text-neutral-400 dark:text-neutral-500 mx-1" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
