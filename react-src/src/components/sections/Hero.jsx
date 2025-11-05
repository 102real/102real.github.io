import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-20 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
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
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="text-black dark:text-white">BHAE</span>
              <br />
              <span className="relative inline-block">
                <span className="text-black dark:text-white">JHOOHYUNG</span>
                <span className="absolute bottom-2 left-0 w-full h-1 bg-black dark:bg-white transform origin-left transition-transform duration-300"></span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl md:text-2xl text-black dark:text-white font-light tracking-wide border-l-2 border-black dark:border-white pl-4">
                Game Designer & VR/AR Researcher
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl font-light">
                Standing at the intersection of humanities, design, and programming.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl font-light">
                인문학, 디자인, 프로그래밍의 교차점에 서 있는 게임디자이너.
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
                className="group px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium transition-all duration-300 hover:tracking-wider relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="/pdf/JH_CV_Eng.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-medium transition-all duration-300"
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
              <div className="absolute inset-0 bg-black dark:bg-white rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 border-2 border-black dark:border-white rounded-full opacity-20"></div>
              <img
                src="/assets/img/profile.png"
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-black dark:border-white grayscale hover:grayscale-0 transition-all duration-500"
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
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-black dark:text-white hover:opacity-50 transition-opacity"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

