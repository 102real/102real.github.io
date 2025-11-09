import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="font-heading text-xl font-bold text-cream-50 mb-6 tracking-tight">
              Bhae JhooHyung
            </h3>
            <p className="text-charcoal-400 text-sm font-light leading-relaxed">
              Game Designer
              <br />
              VR/AR Researcher
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-cream-50 mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:reggae1@naver.com"
                className="block text-charcoal-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                reggae1@naver.com
              </a>
              <a
                href="https://github.com/102real"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-charcoal-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* CV Downloads */}
          <div>
            <h3 className="text-lg font-bold text-cream-50 mb-6">
              Download CV
            </h3>
            <div className="space-y-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/pdf/JH_CV_Eng.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-cream-50 hover:bg-accent text-charcoal-900 hover:text-cream-50 text-sm font-medium transition-all duration-300 text-center"
              >
                CV (English)
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/pdf/JH_CV_Kor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-cream-50 hover:bg-accent text-charcoal-900 hover:text-cream-50 text-sm font-medium transition-all duration-300 text-center"
              >
                이력서 (한글)
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <p className="text-center text-sm text-charcoal-500 font-light">
            © {currentYear} Bhae JhooHyung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

