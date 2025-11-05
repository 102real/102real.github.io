import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { researchData } from '../../data/research';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';

export const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Research</SectionTitle>
        
        {/* Master's Thesis */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Master's Thesis
          </h3>
          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <FaBook className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {researchData.thesis.institution}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 mb-2 font-medium">
                      {researchData.thesis.titleKo}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 italic">
                      {researchData.thesis.titleEn}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>{researchData.thesis.author}</strong>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {researchData.thesis.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors"
                        >
                          {link.type}
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {researchData.thesis.date}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Journal Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Journal Publications
          </h3>
          <div className="space-y-6">
            {researchData.journals.map((journal) => (
              <Card key={journal.id} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {journal.journal}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      {journal.titleKo}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 italic">
                      {journal.titleEn}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {journal.authors}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {journal.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors"
                        >
                          {link.type}
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {journal.date}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Conference Publications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conference Publications
          </h3>
          <div className="space-y-6">
            {researchData.conferences.map((conf) => (
              <Card key={conf.id} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {conf.conference}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      {conf.titleKo}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {conf.authors}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {conf.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors"
                        >
                          {link.type}
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {conf.date}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

