import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { projectsData } from '../../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="space-y-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-charcoal-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-charcoal-700 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-5 py-2 bg-sage-100 text-sage-700 text-sm font-medium tracking-wide">
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

