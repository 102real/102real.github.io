import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { experienceData } from '../../data/experience';
import { FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <Card key={exp.id} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FaBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {exp.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
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

