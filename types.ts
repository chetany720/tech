
export interface NavLinkItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

export enum ContentCategory {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  Python = "Python",
  Frontend = "Frontend",
  Backend = "Backend",
  AIML = "AI/ML",
  DevTools = "Dev Tools",
  Career = "Career Tips",
  Reviews = "Tool Reviews",
  News = "Tech News"
}

export interface TutorialStep {
  title: string;
  explanation: string | React.ReactNode;
  code?: string;
  language?: 'html' | 'css' | 'javascript' | 'python' | 'bash';
}

export interface Tutorial {
  id: string;
  slug: string;
  title:string;
  description: string;
  category: ContentCategory;
  imageUrl?: string;
  author?: string;
  date?: string;
  estimatedTime?: string; // e.g., "45 min read" or "2 hours"
  steps: TutorialStep[];
  videoUrl?: string; // YouTube embed URL
  downloadLink?: string; // URL to a PDF/ZIP file
  tags?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string | React.ReactNode; // Can be markdown string or React nodes
  category: ContentCategory;
  author: string;
  date: string; // ISO format e.g. "2024-07-28"
  imageUrl?: string;
  tags?: string[];
}

export interface TechTool {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: React.ReactNode;
  component: React.ComponentType;
}

export interface Category {
  id: string;
  name: ContentCategory;
  slug: string;
  description: string;
  icon?: React.ReactNode;
}

export interface StaticPage {
  slug: 'about' | 'contact' | 'privacy-policy' | 'disclaimer';
  title: string;
  content: React.ReactNode;
}