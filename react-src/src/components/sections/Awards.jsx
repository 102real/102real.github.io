import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { awardsData } from '../../data/awards';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

export const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Awards & Certifications</SectionTitle>
        
        {/* Awards */}
        <div className="mb-12">
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaTrophy className="w-7 h-7 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Awards
              </h3>
            </div>
            <ul className="space-y-3">
              {awardsData.awards.map((award) => (
                <li
                  key={award.id}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <FaTrophy className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{award.title}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <ul className="space-y-3">
              {awardsData.certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <FaCertificate className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
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

