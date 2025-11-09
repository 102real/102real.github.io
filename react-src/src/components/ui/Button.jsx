import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-charcoal-900 hover:bg-accent text-cream-50 focus:ring-accent',
    secondary: 'bg-cream-200 hover:bg-cream-300 text-charcoal-900 focus:ring-charcoal-500',
    outline: 'border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50',
    ghost: 'text-charcoal-900 hover:bg-cream-100',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

