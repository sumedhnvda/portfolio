import { Project } from '../types';
import project2 from "../public/project2.png"
import project1 from "../public/project1.png"
export const projects: Project[] = [{
    id: '2',
    title: 'Cloud Code Editor',
    description: 'Project built as a part of college mini project',
    image: project2,
    technologies: ['React', 'JavaScript', 'Node.JS', 'OpenAI'],
    category: 'GenAI/LLMs',
    githubUrl: 'https://github.com/sumedhnvda/cloudcodeeditor.git',
    details: `A Virtual code editor with support to:
    • Analyze code and answer user questions in real time with AI
    • proper fully functional terminal to run user commands
    • Rich Code editor with syntax highlighting,suggestions and code snippets`
  },
  {
    "id": "1",
    "title": "Face Detection Software",
    "description": "AI face recognition system using OpenCV",
    "image": project1,
    "technologies": ["Python", "OpenCV"],
    "category": "CV",
    "githubUrl": "https://github.com/sumedhnvda/miniproject",
    "details": "we use OpenCV and the LBPH algorithm, creating unique 'face fingerprints' for recognition (initially 500 black and white images of a person is clicked and trained)"
  },
];