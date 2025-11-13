import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { awardsData } from '../../data/awards';

export const Awards = () => {
  return (
    <section id="awards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>Awards & Certifications</SectionTitle>
        
        {/* Awards */}
        <div className="mb-10">
          <Card className="p-8 md:p-10">
            <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
              Awards
            </h3>
            <ul className="space-y-4">
              {awardsData.awards.map((award) => (
                <li
                  key={award.id}
                  className="flex items-start gap-4 text-charcoal-700 leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-terracotta-500 before:rounded-full"
                >
                  <span>{award.title}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <Card className="p-8 md:p-10">
            <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
              Certifications
            </h3>
            <ul className="space-y-4">
              {awardsData.certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="flex items-start gap-4 text-charcoal-700 leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-sage-500 before:rounded-full"
                >
                  <span>{cert.title}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

