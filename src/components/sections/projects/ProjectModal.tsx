import { motion } from 'framer-motion';
import { Modal } from '../../ui/Modal';
import { Tag } from '../../ui/Tag';
import type { Project } from '../../../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
    <div className="space-y-6">
      <motion.img
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <p className="text-zinc-300 whitespace-pre-line">{project.details}</p>
        
        <div>
          <h3 className="text-white font-semibold mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Tag>{tech}</Tag>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4"
        >
          {project.demoUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              Live Demo →
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              View Code →
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </div>
  </Modal>
);