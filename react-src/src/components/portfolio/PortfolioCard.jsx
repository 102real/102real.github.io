import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { VideoEmbed } from './VideoEmbed';

export const PortfolioCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image or Video Preview */}
        <div className="relative h-64 bg-charcoal-200 overflow-hidden">
          {item.images && item.images.length > 0 ? (
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-sage-100">
              <span className="text-sage-600 text-sm font-medium">VIDEO</span>
            </div>
          )}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            {item.type && item.type.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-charcoal-900 text-cream-50 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-heading text-xl font-bold text-charcoal-900 pr-2">
              {item.title}
            </h3>
            {item.period && (
              <span className="text-sm text-charcoal-900 font-medium whitespace-nowrap">
                {item.period}
              </span>
            )}
          </div>
          
          {item.organization && (
            <p className="text-sm text-charcoal-600 mb-3">
              {item.organization}
            </p>
          )}
          
          {item.role && (
            <p className="text-sm text-charcoal-700 mb-3">
              <strong>Role:</strong> {item.role}
            </p>
          )}
          
          {(item.descriptionKo || item.descriptionEn) && (
            <p className="text-sm text-charcoal-700 line-clamp-3 flex-1 font-light">
              {item.descriptionKo || item.descriptionEn}
            </p>
          )}
        </div>
      </Card>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-cream-50 border-2 border-charcoal-300 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 right-0 flex justify-end p-4 bg-cream-50 border-b border-charcoal-200 z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-cream-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8">
                {/* Video */}
                {item.videoUrl && (
                  <VideoEmbed url={item.videoUrl} className="mb-6" />
                )}
                {item.videoUrls && item.videoUrls.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {item.videoUrls.map((url, idx) => (
                      <VideoEmbed key={idx} url={url} />
                    ))}
                  </div>
                )}

                {/* Title and Details */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="font-heading text-3xl font-bold text-charcoal-900">
                      {item.title}
                    </h2>
                    {item.period && (
                      <span className="px-4 py-2 bg-sage-100 text-sage-700 text-sm font-medium whitespace-nowrap ml-4 border border-sage-200">
                        {item.period}
                      </span>
                    )}
                  </div>

                  {item.organization && (
                    <p className="text-lg text-charcoal-700 mb-2">
                      <strong>Organization:</strong> {item.organization}
                    </p>
                  )}

                  {item.role && (
                    <p className="text-lg text-charcoal-700 mb-4">
                      <strong>Role:</strong> {item.role}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.type && item.type.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-charcoal-900 text-cream-50 text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                    {item.status && (
                      <span className="px-3 py-1 bg-terracotta-500 text-cream-50 text-sm font-medium">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.descriptionKo && (
                  <div className="mb-6">
                    <p className="text-charcoal-700 leading-relaxed whitespace-pre-line font-light">
                      {item.descriptionKo}
                    </p>
                  </div>
                )}
                {item.descriptionEn && (
                  <div className="mb-6">
                    <p className="text-charcoal-700 leading-relaxed whitespace-pre-line font-light">
                      {item.descriptionEn}
                    </p>
                  </div>
                )}

                {/* Images */}
                {item.images && item.images.length > 0 && (
                  <div className="mb-6 space-y-4">
                    {item.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${item.title} ${idx + 1}`}
                        className="w-full"
                      />
                    ))}
                  </div>
                )}

                {/* Links */}
                {item.links && item.links.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                      Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:bg-terracotta-600 text-cream-50 transition-colors duration-300"
                        >
                          {link.type}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credits */}
                {item.credits && (
                  <div className="mb-6">
                    <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                      Credits
                    </h3>
                    <div className="space-y-2">
                      {typeof item.credits === 'object' && !Array.isArray(item.credits) ? (
                        Object.entries(item.credits).map(([role, name], idx) => (
                          <div key={idx} className="text-charcoal-700">
                            <strong>{role}:</strong> {Array.isArray(name) ? name.join(', ') : name}
                          </div>
                        ))
                      ) : (
                        <p className="text-charcoal-700">
                          {JSON.stringify(item.credits)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Exhibition/Event Info */}
                {item.exhibition && (
                  <div className="mb-6">
                    <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                      Exhibition
                    </h3>
                    <div className="space-y-2 text-charcoal-700">
                      <p><strong>Name:</strong> {item.exhibition.name}</p>
                      {item.exhibition.sponsor && <p><strong>Sponsor:</strong> {item.exhibition.sponsor}</p>}
                      {item.exhibition.organizer && <p><strong>Organizer:</strong> {item.exhibition.organizer}</p>}
                      <p><strong>Venue:</strong> {item.exhibition.venue}</p>
                      <p><strong>Period:</strong> {item.exhibition.period}</p>
                    </div>
                  </div>
                )}

                {item.exhibitions && item.exhibitions.length > 0 && (
                  <div>
                    <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                      Exhibitions
                    </h3>
                    {item.exhibitions.map((exh, idx) => (
                      <div key={idx} className="mb-4 pb-4 border-b border-charcoal-200 last:border-0">
                        <div className="space-y-2 text-charcoal-700">
                          <p className="font-semibold">{exh.name}</p>
                          {exh.organizer && <p><strong>Organizer:</strong> {exh.organizer}</p>}
                          <p><strong>Venue:</strong> {exh.venue}</p>
                          <p><strong>Period:</strong> {exh.period}</p>
                          {exh.articles && exh.articles.length > 0 && (
                            <div>
                              <p className="font-semibold mt-2">Articles:</p>
                              {exh.articles.map((article, i) => (
                                <a
                                  key={i}
                                  href={article}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-accent hover:text-terracotta-600 hover:underline text-sm break-all"
                                >
                                  {article}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

