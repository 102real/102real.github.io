import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

export const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

