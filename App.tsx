

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/PageElements';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import BlogPage from './pages/BlogPage';
import TechToolsHub from './pages/TechToolsHub';
import StaticContentPage from './pages/StaticContentPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  // Set document title based on current page (basic SEO)
  useEffect(() => {
    // This is a simplified approach. For more complex title management,
    // consider a library like react-helmet or manage in individual page components.
    const path = location.pathname;
    let title = "Tech Teach - Learn Tech & Programming";
    if (path === '/') title = "Tech Teach - Home";
    else if (path.startsWith('/tutorials')) title = "Tutorials - Tech Teach";
    else if (path.startsWith('/blog')) title = "Blog - Tech Teach";
    else if (path.startsWith('/tools')) title = "Tech Tools - Tech Teach";
    else if (path.startsWith('/about')) title = "About Us - Tech Teach";
    else if (path.startsWith('/contact')) title = "Contact Us - Tech Teach";
    else if (path.startsWith('/privacy')) title = "Privacy Policy - Tech Teach";
    else if (path.startsWith('/disclaimer')) title = "Disclaimer - Tech Teach";
    
    document.title = title;
  }, [location.pathname]);

  return (
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        
        <Route path="/tutorials" element={<Layout><TutorialsPage /></Layout>} />
        <Route path="/tutorials/:slug" element={<Layout><TutorialsPage /></Layout>} />
        
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPage /></Layout>} />
        
        <Route path="/tools" element={<Layout><TechToolsHub /></Layout>} />
        <Route path="/tools/:toolSlug" element={<Layout><TechToolsHub /></Layout>} />

        <Route path="/about" element={<Layout><StaticContentPage pageSlug="about" /></Layout>} />
        <Route path="/contact" element={<Layout><StaticContentPage pageSlug="contact" /></Layout>} />
        <Route path="/privacy" element={<Layout><StaticContentPage pageSlug="privacy-policy" /></Layout>} />
        <Route path="/disclaimer" element={<Layout><StaticContentPage pageSlug="disclaimer" /></Layout>} />
        
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
  );
};

export default App;
