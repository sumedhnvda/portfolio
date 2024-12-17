  import { useState } from 'react';
  import { ProjectsGrid } from './ProjectsGrid';
  import { ProjectFilters } from './ProjectFilters';
  import { ProjectModal } from './ProjectModal';
  import { Container } from '../../layout/Container';
  import { projects } from '../../../data/projects';
  import type { Category } from '../../../types';

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
        <ProjectsGrid
          projects={filteredProjects}
          onSelectProject={setSelectedProjectId}
        />
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