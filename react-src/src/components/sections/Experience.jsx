import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { experienceData } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <Card key={exp.id} className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-3">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-accent font-medium">
                      {exp.position}
                    </p>
                  </div>
                  <p className="text-charcoal-700 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-5 py-2 bg-sage-100 text-sage-700 text-sm font-medium tracking-wide">
                    {exp.period}
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

