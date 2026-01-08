import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terracotta-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none"
            >
              <span className="text-charcoal-900">Bhae</span>
              <br />
              <span className="text-charcoal-900">JhooHyung</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 mb-10"
            >
              <p className="text-xl md:text-2xl text-charcoal-900 font-light tracking-wide border-l-4 border-accent pl-6">
                Game Designer & VR/AR Researcher
              </p>
              <p className="text-lg text-charcoal-600 max-w-2xl font-light leading-relaxed">
                Standing at the intersection of humanities, design, and programming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="mailto:reggae1@naver.com"
                className="group px-10 py-4 bg-black text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:tracking-wider relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
              </a>
              <a
                href="/pdf/JH_CV_Eng.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-black text-black hover:bg-black hover:text-white font-medium transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-3 border border-charcoal-300 rounded-full opacity-30"></div>
              <img
                src="/assets/img/profile.png"
                alt="Profile"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-charcoal-900 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-charcoal-600 hover:text-charcoal-900 transition-colors duration-300"
          >
            <span className="text-sm font-light tracking-widest mb-3">SCROLL</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

