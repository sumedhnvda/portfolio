import { useState } from 'react';
import { Container } from '../ui/Container';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectFilters } from './projects/ProjectFilters';
import { ProjectModal } from './projects/ProjectModal';
import { projects } from '../../data/projects';
import type { Category } from '../../types';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <Container className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Projects</h2>

      <ProjectFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProjectId(project.id)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </Container>
  );
};
