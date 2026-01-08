import { motion } from 'framer-motion';

export const SectionTitle = ({ children, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${className}`}
    >
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal-600 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-accent mt-6"></div>
    </motion.div>
  );
};

