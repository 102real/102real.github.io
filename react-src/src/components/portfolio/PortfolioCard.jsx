import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { VideoEmbed } from './VideoEmbed';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export const PortfolioCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image or Video Preview */}
        <div className="relative h-64 bg-gray-200 dark:bg-dark-700 overflow-hidden">
          {item.images && item.images.length > 0 ? (
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl">🎬</span>
            </div>
          )}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            {item.type && item.type.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-2">
              {item.title}
            </h3>
            {item.period && (
              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium whitespace-nowrap">
                {item.period}
              </span>
            )}
          </div>
          
          {item.organization && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {item.organization}
            </p>
          )}
          
          {item.role && (
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Role:</strong> {item.role}
            </p>
          )}
          
          {(item.descriptionKo || item.descriptionEn) && (
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-1">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 right-0 flex justify-end p-4 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                >
                  <FaTimes className="w-6 h-6 text-gray-600 dark:text-gray-400" />
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
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h2>
                    {item.period && (
                      <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                        {item.period}
                      </span>
                    )}
                  </div>

                  {item.organization && (
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Organization:</strong> {item.organization}
                    </p>
                  )}

                  {item.role && (
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Role:</strong> {item.role}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.type && item.type.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                    {item.status && (
                      <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.descriptionKo && (
                  <div className="mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {item.descriptionKo}
                    </p>
                  </div>
                )}
                {item.descriptionEn && (
                  <div className="mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
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
                        className="w-full rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {/* Links */}
                {item.links && item.links.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                        >
                          {link.type}
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credits */}
                {item.credits && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Credits
                    </h3>
                    <div className="space-y-2">
                      {typeof item.credits === 'object' && !Array.isArray(item.credits) ? (
                        Object.entries(item.credits).map(([role, name], idx) => (
                          <div key={idx} className="text-gray-700 dark:text-gray-300">
                            <strong>{role}:</strong> {Array.isArray(name) ? name.join(', ') : name}
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">
                          {JSON.stringify(item.credits)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Exhibition/Event Info */}
                {item.exhibition && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Exhibition
                    </h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
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
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Exhibitions
                    </h3>
                    {item.exhibitions.map((exh, idx) => (
                      <div key={idx} className="mb-4 pb-4 border-b border-gray-200 dark:border-dark-700 last:border-0">
                        <div className="space-y-2 text-gray-700 dark:text-gray-300">
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
                                  className="block text-primary-600 dark:text-primary-400 hover:underline text-sm break-all"
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

