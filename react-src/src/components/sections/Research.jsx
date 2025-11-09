import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { researchData } from '../../data/research';

export const Research = () => {
  return (
    <section id="research" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>Research</SectionTitle>
        
        {/* Master's Thesis */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
            Master's Thesis
          </h3>
          <Card className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-charcoal-900 mb-3">
                  {researchData.thesis.institution}
                </h4>
                <p className="text-charcoal-800 mb-2 font-medium leading-relaxed">
                  {researchData.thesis.titleKo}
                </p>
                <p className="text-charcoal-600 mb-4 italic font-light">
                  {researchData.thesis.titleEn}
                </p>
                <p className="text-charcoal-700 mb-4">
                  <strong>{researchData.thesis.author}</strong>
                </p>
                <div className="flex flex-wrap gap-3">
                  {researchData.thesis.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:bg-terracotta-600 text-cream-50 text-sm font-medium transition-colors duration-300"
                    >
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-5 py-2 bg-sage-100 text-sage-700 text-sm font-medium tracking-wide">
                  {researchData.thesis.date}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Journal Publications */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
            Journal Publications
          </h3>
          <div className="space-y-8">
            {researchData.journals.map((journal) => (
              <Card key={journal.id} className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-charcoal-900 mb-3">
                      {journal.journal}
                    </h4>
                    <p className="text-charcoal-800 mb-2 leading-relaxed">
                      {journal.titleKo}
                    </p>
                    <p className="text-charcoal-600 mb-4 italic font-light">
                      {journal.titleEn}
                    </p>
                    <p className="text-charcoal-700 mb-4">
                      {journal.authors}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {journal.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:bg-terracotta-600 text-cream-50 text-sm font-medium transition-colors duration-300"
                        >
                          {link.type}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-5 py-2 bg-sage-100 text-sage-700 text-sm font-medium tracking-wide">
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
          <h3 className="font-heading text-3xl font-bold text-charcoal-900 mb-8">
            Conference Publications
          </h3>
          <div className="space-y-8">
            {researchData.conferences.map((conf) => (
              <Card key={conf.id} className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-charcoal-900 mb-3">
                      {conf.conference}
                    </h4>
                    <p className="text-charcoal-800 mb-2 leading-relaxed">
                      {conf.titleKo}
                    </p>
                    <p className="text-charcoal-700 mb-4">
                      {conf.authors}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {conf.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:bg-terracotta-600 text-cream-50 text-sm font-medium transition-colors duration-300"
                        >
                          {link.type}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-5 py-2 bg-sage-100 text-sage-700 text-sm font-medium tracking-wide">
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

