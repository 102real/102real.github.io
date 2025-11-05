import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DarkModeToggle } from './DarkModeToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Experience', path: '/', hash: '#experience' },
    { name: 'Education', path: '/', hash: '#education' },
    { name: 'Research', path: '/', hash: '#research' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Portfolio', path: '/portfolio', hash: '' },
  ];

  const handleNavClick = (path, hash) => {
    if (path === location.pathname && hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-black dark:text-white tracking-tight hover:opacity-70 transition-opacity"
          >
            B.J
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path + item.hash}
                onClick={() => handleNavClick(item.path, item.hash)}
                className={`px-4 py-2 text-sm font-medium transition-all relative ${
                  location.pathname === item.path
                    ? 'text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black dark:after:bg-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black dark:text-white hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path + item.hash}
                  onClick={() => handleNavClick(item.path, item.hash)}
                  className={`block px-4 py-3 text-base font-medium transition-colors border-l-2 ${
                    location.pathname === item.path
                      ? 'text-black dark:text-white border-black dark:border-white bg-gray-50 dark:bg-gray-900'
                      : 'text-gray-600 dark:text-gray-400 border-transparent hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

