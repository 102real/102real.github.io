import { motion } from 'framer-motion';

export const SectionTitle = ({ children, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-light">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-black dark:bg-white mt-6"></div>
    </motion.div>
  );
};

