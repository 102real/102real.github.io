import { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  // Filter portfolio items
  const filteredItems = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle subtitle="Explore my creative works and projects">
          Portfolio
        </SectionTitle>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 border border-transparent hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

