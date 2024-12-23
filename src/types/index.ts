export interface Project {
  id: string;
  title: string;
  description: string;
  image: any;
  technologies: string[];
  category: 'all' | 'ML&DL' | 'NLP' | 'GenAI/LLMs' | 'CV' ;
  demoUrl?: string;
  githubUrl?: string;
  details: string;
}

export type Category = 'all' | 'ML&DL' | 'NLP' | 'GenAI/LLMs' | 'CV' ;

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  relevantCourses: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
  readTime: string;
  tags: string[];
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  date: string;
  description: string;
  url: string;
  coAuthors: string[];
}