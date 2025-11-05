import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { projectsData } from '../../data/projects';
import { FaProjectDiagram } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="space-y-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FaProjectDiagram className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {project.period}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

