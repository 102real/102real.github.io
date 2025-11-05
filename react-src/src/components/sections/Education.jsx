import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { educationData } from '../../data/education';
import { FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>
        
        <div className="space-y-6">
          {educationData.map((edu) => (
            <Card key={edu.id} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FaGraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.school}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {edu.major}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {edu.degree}
                      </p>
                      {edu.lab && (
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <a
                            href={edu.labUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                          >
                            {edu.lab}
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </a>
                          <span>({edu.advisor})</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
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

