import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { skillsData } from '../../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>Skills</SectionTitle>
        
        {/* Programming Languages */}
        <div className="mb-10">
          <Card className="p-8 md:p-10">
            <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.programmingLanguages.map((lang, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-terracotta-100 text-terracotta-800 text-sm font-medium tracking-wide hover:bg-terracotta-200 transition-colors duration-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Tools */}
        <div>
          <Card className="p-8 md:p-10">
            <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
              Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skillsData.tools).map(([category, tools]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-charcoal-900 mb-4 tracking-wide">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-cream-100 text-charcoal-700 text-sm border border-charcoal-200 hover:border-accent transition-colors duration-300"
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

