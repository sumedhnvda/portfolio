export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'all' | 'ML&DL' | 'NLP' | 'GenAI/LLMs' | 'CV' | 'QuantumML' | 'others';
  demoUrl?: string;
  githubUrl?: string;
  details: string;
}

export type Category = 'all' | 'ML&DL' | 'NLP' | 'GenAI/LLMs' | 'CV' | 'QuantumML' | 'others';

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