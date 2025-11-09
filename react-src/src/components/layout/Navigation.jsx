import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-charcoal-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl font-bold text-charcoal-900 tracking-tight hover:text-accent transition-colors duration-300"
          >
            Bhae JhooHyung
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path + item.hash}
                onClick={() => handleNavClick(item.path, item.hash)}
                className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal-900 hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
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
            className="md:hidden bg-cream-50 border-t border-charcoal-200"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path + item.hash}
                  onClick={() => handleNavClick(item.path, item.hash)}
                  className={`block px-6 py-4 text-base font-medium transition-all duration-300 border-l-4 ${
                    location.pathname === item.path
                      ? 'text-accent border-accent bg-cream-100'
                      : 'text-charcoal-600 border-transparent hover:border-charcoal-300 hover:bg-cream-100'
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

