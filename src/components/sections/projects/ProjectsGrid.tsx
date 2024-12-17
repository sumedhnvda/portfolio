import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../../types';

interface ProjectsGridProps {
  projects: Project[];
  onSelectProject: (id: string) => void;
}

export const ProjectsGrid = ({ projects, onSelectProject }: ProjectsGridProps) => (
  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <AnimatePresence mode="popLayout">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onSelectProject(project.id)}
        />
      ))}
    </AnimatePresence>
  </motion.div>
);