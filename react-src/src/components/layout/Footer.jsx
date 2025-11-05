import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              BHAE JHOOHYUNG
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              게임 디자이너, VR/AR 연구원
              <br />
              Game Designer, VR/AR Researcher
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:reggae1@naver.com"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <FaEnvelope className="mr-2" />
                reggae1@naver.com
              </a>
              <a
                href="https://github.com/102real"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>

          {/* CV Downloads */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Download CV
            </h3>
            <div className="space-y-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/pdf/JH_CV_Eng.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors text-center"
              >
                CV (English)
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/pdf/JH_CV_Kor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors text-center"
              >
                이력서 (한글)
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Bhae JhooHyung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

