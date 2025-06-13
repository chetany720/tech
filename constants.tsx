
import React from 'react';
import { NavLinkItem, Tutorial, BlogPost, Category, ContentCategory, StaticPage, TechTool } from './types';
import { JsonFormatter, RegexTester, CodeMinifier } from './components/SpecificTools';

// SVG Icons (Heroicons - outline style)
export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.527-1.04 1.527-1.674 2.653-1.898V12M11.42 15.17L5.877 21M6.465 6.465l-3.031 2.496a2.652 2.652 0 000 4.292l5.877 5.877M6.465 6.465l3.031-2.496a2.652 2.652 0 014.292 0l5.877 5.877m0 0a2.652 2.652 0 002.652-2.652l-5.877-5.877m0 0l-5.877-5.877A2.652 2.652 0 005.877 2.652l5.877 5.877" />
  </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25c0 1.242.892 2.25 2.25 2.25s2.25-1.008 2.25-2.25c0-1.242-.892-2.25-2.25-2.25z" />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

export const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

export const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25h-1.5m-15 3.75h-1.5m15 0h-1.5M12 12l-3.5-3.5M12 12l3.5 3.5M12 12l-3.5 3.5M12 12l3.5-3.5M5.25 6.096c.606-.884 1.344-1.613 2.148-2.148A8.98 8.98 0 0112 3c1.789 0 3.468.513 4.904 1.348.804.535 1.542 1.264 2.148 2.148A8.98 8.98 0 0121 12c0 1.789-.513 3.468-1.348 4.904-.535.804-1.264 1.542-2.148 2.148A8.98 8.98 0 0112 21c-1.789 0-3.468-.513-4.904-1.348-.804-.535-1.264-1.542-2.148-2.148A8.98 8.98 0 013 12c0-1.789.513 3.468 1.348-4.904.535-.804 1.264-1.542 2.148-2.148z" />
    </svg>
);

export const ServerStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3m0 0l3-3M9.75 10.5v4.5m1.751-2.226C13.239 12.06 14.96 12 18 12h.008M18 12h-1.046M18 12L17.25 7.5M18 12l-.75 4.5M18 12v-.008" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18zM12 12a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
);


export const DocumentArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const PlayCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


// Navigation Links
export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5" /> },
  { name: 'Tutorials', path: '/tutorials', icon: <BookOpenIcon className="w-5 h-5" /> },
  { name: 'Blog', path: '/blog', icon: <PencilSquareIcon className="w-5 h-5" /> },
  { name: 'Tech Tools', path: '/tools', icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
];

export const FOOTER_LINKS: NavLinkItem[] = [
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Disclaimer', path: '/disclaimer' },
];

// Categories
export const CATEGORIES: Category[] = [
  { id: 'frontend', name: ContentCategory.Frontend, slug: 'frontend', description: 'Master the art of user interfaces with HTML, CSS, JavaScript, and modern frameworks.', icon: <CodeBracketIcon className="w-10 h-10 text-primary" /> },
  { id: 'backend', name: ContentCategory.Backend, slug: 'backend', description: 'Build robust server-side applications, APIs, and databases.', icon: <ServerStackIcon className="w-10 h-10 text-primary" /> },
  { id: 'aiml', name: ContentCategory.AIML, slug: 'ai-ml', description: 'Dive into Artificial Intelligence and Machine Learning concepts and projects.', icon: <CpuChipIcon className="w-10 h-10 text-primary" /> },
  { id: 'devtools', name: ContentCategory.DevTools, slug: 'dev-tools', description: 'Explore tools and techniques to boost your development productivity.', icon: <WrenchScrewdriverIcon className="w-10 h-10 text-primary" /> },
];

// Sample Data
export const SAMPLE_TUTORIALS: Tutorial[] = [
  {
    id: 'html-basics',
    slug: 'html-basics',
    title: 'HTML Basics: A Beginner\'s Guide',
    description: 'Learn the fundamental concepts of HTML to start building your own web pages.',
    category: ContentCategory.HTML,
    imageUrl: 'https://picsum.photos/seed/html/400/200',
    author: 'Tech Teach Team',
    date: '2024-07-01',
    estimatedTime: '1 hour',
    tags: ['html', 'web development', 'beginner'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    downloadLink: '#', // Placeholder download
    steps: [
      { title: 'Introduction to HTML', explanation: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages.', code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>`, language: 'html' },
      { title: 'HTML Elements', explanation: 'HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.' },
      { title: 'HTML Attributes', explanation: 'Attributes provide additional information about HTML elements. They are always specified in the start tag.' },
    ]
  },
  {
    id: 'css-flexbox-guide',
    slug: 'css-flexbox-guide',
    title: 'Mastering CSS Flexbox Layouts',
    description: 'A comprehensive guide to understanding and using CSS Flexbox for responsive web design.',
    category: ContentCategory.CSS,
    imageUrl: 'https://picsum.photos/seed/css/400/200',
    author: 'Jane Developer',
    date: '2024-07-15',
    estimatedTime: '2 hours',
    tags: ['css', 'flexbox', 'layout', 'responsive design'],
    steps: [
      { title: 'What is Flexbox?', explanation: 'Flexbox is a one-dimensional layout model that offers space distribution between items in an interface and powerful alignment capabilities.'},
      { title: 'Flex Container Properties', explanation: 'Properties like `display: flex`, `flex-direction`, `justify-content`, `align-items`. Example:', code: `.container {\n  display: flex;\n  justify-content: space-around;\n}`, language: 'css'},
      { title: 'Flex Item Properties', explanation: 'Properties like `flex-grow`, `flex-shrink`, `flex-basis`, `order`.'},
    ]
  },
  {
    id: 'python-data-analysis',
    slug: 'python-data-analysis',
    title: 'Introduction to Data Analysis with Python',
    description: 'Get started with data analysis using Python libraries like Pandas and NumPy.',
    category: ContentCategory.Python,
    imageUrl: 'https://picsum.photos/seed/python/400/200',
    author: 'Dr. Data Sci',
    date: '2024-06-20',
    estimatedTime: '3 hours',
    tags: ['python', 'data analysis', 'pandas', 'numpy'],
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU', // Placeholder playlist
    downloadLink: '#',
    steps: [
      { title: 'Setting up your Python Environment', explanation: 'Instructions on installing Python, Pandas, NumPy, and Jupyter Notebooks.'},
      { title: 'Loading Data with Pandas', explanation: 'Learn how to read data from CSV files into Pandas DataFrames.', code: `import pandas as pd\n\ndf = pd.read_csv('your_data.csv')\nprint(df.head())`, language: 'python'},
      { title: 'Basic Data Manipulation', explanation: 'Filtering, sorting, and grouping data.'},
    ]
  }
];

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: 'full-stack-dev-path',
    slug: 'full-stack-dev-path',
    title: 'How to Become a Full-Stack Developer in 2024',
    excerpt: 'A roadmap for aspiring full-stack developers, covering essential skills, learning resources, and career advice.',
    category: ContentCategory.Career,
    author: 'Career Coach Alice',
    date: '2024-07-20',
    imageUrl: 'https://picsum.photos/seed/career/400/200',
    tags: ['career', 'full-stack', 'web development', 'guide'],
    content: `
      <p class="mb-4">Becoming a full-stack developer is a challenging yet rewarding journey. It requires a broad set of skills across both frontend and backend technologies. This guide will outline a path you can follow.</p>
      <h2 class="text-2xl font-semibold my-4">1. Master Frontend Fundamentals</h2>
      <p class="mb-4">Start with HTML, CSS, and JavaScript. These are the building blocks of the web. Understand responsive design and how to create user-friendly interfaces.</p>
      <p class="mb-4">Consider learning a frontend framework like React, Angular, or Vue.js once you have a solid grasp of JavaScript.</p>
      <h2 class="text-2xl font-semibold my-4">2. Dive into Backend Technologies</h2>
      <p class="mb-4">Choose a backend language (e.g., Python with Django/Flask, Node.js with Express, Java with Spring, Ruby on Rails). Learn about databases (SQL and NoSQL), APIs, and server management.</p>
      <p class="mb-4">Understanding RESTful APIs and how to build them is crucial. Also, familiarize yourself with authentication and authorization mechanisms.</p>
      <h2 class="text-2xl font-semibold my-4">3. Learn DevOps Basics</h2>
      <p class="mb-4">Version control with Git is non-negotiable. Basic knowledge of CI/CD pipelines, containerization (Docker), and cloud platforms (AWS, Azure, GCP) will be highly beneficial.</p>
      <h2 class="text-2xl font-semibold my-4">4. Build Projects and Portfolio</h2>
      <p class="mb-4">Theory is important, but practical experience is key. Build full-stack projects to apply your knowledge and create a portfolio to showcase your skills to potential employers.</p>
      <p class="mb-4">Contribute to open-source projects or collaborate with others to gain real-world experience.</p>
      <h2 class="text-2xl font-semibold my-4">5. Continuous Learning</h2>
      <p class="mb-4">The tech world is constantly evolving. Stay curious, keep learning new technologies, and adapt to changes in the industry.</p>
    `
  },
  {
    id: 'vs-code-review',
    slug: 'vs-code-review',
    title: 'VS Code: Still the King of Code Editors?',
    excerpt: 'A deep dive into Visual Studio Code, its features, extensions, and why it remains a favorite among developers.',
    category: ContentCategory.Reviews,
    author: 'Tool Master Tim',
    date: '2024-07-10',
    imageUrl: 'https://picsum.photos/seed/vscode/400/200',
    tags: ['vs code', 'editor', 'review', 'developer tools'],
    content: `
      <p class="mb-4">Visual Studio Code (VS Code) has dominated the code editor landscape for years. But is it still the best choice for developers in 2024? Let's explore.</p>
      <h3 class="text-xl font-semibold my-3">Core Features</h3>
      <p class="mb-4">VS Code offers a rich set of built-in features including IntelliSense (code completion), debugging, Git integration, and a terminal. Its performance is generally excellent, even with large projects.</p>
      <h3 class="text-xl font-semibold my-3">Extensibility</h3>
      <p class="mb-4">The true power of VS Code lies in its vast extension marketplace. Whatever language, framework, or tool you use, there's likely an extension to support it. This makes VS Code incredibly versatile.</p>
      <h3 class="text-xl font-semibold my-3">Community and Updates</h3>
      <p class="mb-4">Backed by Microsoft, VS Code receives frequent updates with new features and bug fixes. The large and active community contributes to its ecosystem and provides ample support.</p>
      <h3 class="text-xl font-semibold my-3">Alternatives</h3>
      <p class="mb-4">While VS Code is popular, editors like JetBrains IDEs (IntelliJ, PyCharm, WebStorm), Sublime Text, and Neovim offer strong competition, each with its own strengths.</p>
      <h3 class="text-xl font-semibold my-3">Conclusion</h3>
      <p class="mb-4">For most developers, VS Code strikes an excellent balance of features, performance, and extensibility, making it a top choice. While personal preference plays a role, it's hard to argue against its continued dominance.</p>
    `
  }
];

// Tech Tools List
export const TECH_TOOLS_LIST: Omit<TechTool, 'component'>[] = [
  { id: 'json-formatter', name: 'JSON Formatter', slug: 'json-formatter', description: 'Format and validate your JSON data effortlessly.', icon: <CodeBracketIcon className="w-8 h-8" /> },
  { id: 'regex-tester', name: 'Regex Tester', slug: 'regex-tester', description: 'Test and debug your regular expressions in real-time.', icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
  { id: 'code-minifier', name: 'Code Minifier', slug: 'code-minifier', description: 'Minify HTML, CSS, and JavaScript code to reduce file size.', icon: <DocumentArrowDownIcon className="w-8 h-8" /> },
];


export const ALL_TECH_TOOLS: TechTool[] = [
    { 
        id: 'json-formatter', 
        name: 'JSON Formatter', 
        slug: 'json-formatter', 
        description: 'Format and validate your JSON data effortlessly. Paste your JSON code into the input area and click "Format" to see the beautified version. Errors will be highlighted if the JSON is invalid.', 
        icon: <CodeBracketIcon className="w-8 h-8" />, 
        component: JsonFormatter 
    },
    { 
        id: 'regex-tester', 
        name: 'Regex Tester', 
        slug: 'regex-tester', 
        description: 'Test and debug your regular expressions in real-time. Enter your regex pattern and the text string to test against. Matches will be highlighted.', 
        icon: <WrenchScrewdriverIcon className="w-8 h-8" />, 
        component: RegexTester 
    },
    { 
        id: 'code-minifier', 
        name: 'Code Minifier', 
        slug: 'code-minifier', 
        description: 'Minify HTML, CSS, and JavaScript code to reduce file size and improve loading times. Select the language, paste your code, and click "Minify".', 
        icon: <DocumentArrowDownIcon className="w-8 h-8" />, 
        component: CodeMinifier 
    },
];


// Static Pages Content
export const STATIC_PAGES_CONTENT: Record<StaticPage['slug'], StaticPage> = {
  'about': {
    slug: 'about',
    title: 'About Tech Teach',
    content: (
      <>
        <p className="mb-4">Tech Teach was founded with the mission to make technology education accessible and engaging for everyone. We believe that learning to code and understanding technology can open up incredible opportunities.</p>
        <p className="mb-4">Our platform offers a wide range of tutorials, practical guides, and useful tools designed for learners at all levels, from absolute beginners to seasoned professionals looking to pick up new skills.</p>
        <h2 className="text-2xl font-semibold my-4">Our Vision</h2>
        <p className="mb-4">To be a leading resource for tech education, fostering a community of curious learners and skilled developers who can shape the future of technology.</p>
        <h2 className="text-2xl font-semibold my-4">Our Team</h2>
        <p className="mb-4">We are a passionate group of educators, developers, and tech enthusiasts dedicated to creating high-quality content and a supportive learning environment.</p>
      </>
    )
  },
  'contact': {
    slug: 'contact',
    title: 'Contact Us',
    content: (
      <>
        <p className="mb-4">We'd love to hear from you! Whether you have a question, feedback, or a suggestion, feel free to reach out.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Full Name</label>
            <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
            <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-offset-neutral-900">
              Send Message
            </button>
          </div>
        </form>
        <p className="mt-6">Alternatively, you can email us at: <a href="mailto:support@techteach.example.com" className="text-primary hover:underline">support@techteach.example.com</a></p>
      </>
    )
  },
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    content: (
      <>
        <p className="mb-4">This Privacy Policy describes how Tech Teach ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website (the "Service").</p>
        <h2 className="text-2xl font-semibold my-4">Information We Collect</h2>
        <p className="mb-4">We may collect personal information that you voluntarily provide to us, such as your name and email address when you contact us or subscribe to our newsletter.</p>
        <p className="mb-4">We may also collect non-personal information automatically as you navigate through the site. This may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</p>
        <h2 className="text-2xl font-semibold my-4">How We Use Your Information</h2>
        <p className="mb-4">To provide and maintain our Service.</p>
        <p className="mb-4">To notify you about changes to our Service.</p>
        <p className="mb-4">To provide customer support.</p>
        <p className="mb-4">To gather analysis or valuable information so that we can improve our Service.</p>
        <p className="mb-4">To monitor the usage of our Service.</p>
        <h2 className="text-2xl font-semibold my-4">Third-Party Services</h2>
        <p className="mb-4">We may use third-party services like Google AdSense to display advertisements. These services may use cookies to serve ads based on a user's prior visits to our website or other websites. You can opt out of personalized advertising by visiting Ads Settings.</p>
        <h2 className="text-2xl font-semibold my-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </>
    )
  },
  'disclaimer': {
    slug: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <>
        <p className="mb-4">The information provided by Tech Teach ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
        <p className="mb-4">Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
        <h2 className="text-2xl font-semibold my-4">External Links Disclaimer</h2>
        <p className="mb-4">The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
        <h2 className="text-2xl font-semibold my-4">Professional Disclaimer</h2>
        <p className="mb-4">The site cannot and does not contain professional advice. The technical information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.</p>
        <h2 className="text-2xl font-semibold my-4">Affiliate Disclaimer</h2>
        <p className="mb-4">This site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include [example: Amazon Associates].</p>
      </>
    )
  }
};