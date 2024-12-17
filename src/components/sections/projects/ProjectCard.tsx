import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Tag } from '../../ui/Tag';
import type { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, onClick }, ref) => (
    <motion.div
      ref={ref}
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900 rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.technologies.length > 3 && (
            <Tag>+{project.technologies.length - 3} more</Tag>
          )}
        </div>
      </div>
    </motion.div>
  )
);