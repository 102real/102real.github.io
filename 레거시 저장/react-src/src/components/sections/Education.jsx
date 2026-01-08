import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { educationData } from '../../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>Education</SectionTitle>
        
        <div className="space-y-8">
          {educationData.map((edu) => (
            <Card key={edu.id} className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-3">
                      {edu.school}
                    </h3>
                    <p className="text-xl text-accent font-medium mb-2">
                      {edu.major}
                    </p>
                    <p className="text-charcoal-600 mb-3">
                      {edu.degree}
                    </p>
                    {edu.lab && (
                      <div className="text-charcoal-700">
                        <a
                          href={edu.labUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors duration-300 underline decoration-accent"
                        >
                          {edu.lab}
                        </a>
                        <span className="ml-2">({edu.advisor})</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-5 py-2 bg-sage-100 text-sage-700 text-sm font-medium tracking-wide">
                    {edu.period}
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

