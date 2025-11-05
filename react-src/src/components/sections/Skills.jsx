import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { skillsData } from '../../data/skills';
import { FaCode, FaTools } from 'react-icons/fa';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        
        {/* Programming Languages */}
        <div className="mb-12">
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Programming Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.programmingLanguages.map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Tools */}
        <div>
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaTools className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tools
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skillsData.tools).map(([category, tools]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

