import { SectionTitle } from '../ui/SectionTitle';
import { FaEnvelope } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            안녕하세요! 인문학, 디자인, 프로그래밍의 교차점에 서 있는 게임디자이너 배주형입니다.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Hello! I'm Bhae JhooHyung, a game designer standing at the intersection of humanities, design, and programming.
          </p>

          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="w-5 h-5 text-black dark:text-white" />
            <a 
              href="mailto:reggae1@naver.com"
              className="hover:text-black dark:hover:text-white transition-colors underline"
            >
              reggae1@naver.com
            </a>
            <a
              href="/pdf/JH_CV_Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black text-sm font-medium transition-colors"
            >
              CV (ENG)
            </a>
            <a
              href="/pdf/JH_CV_Kor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black text-sm font-medium transition-colors"
            >
              CV (KOR)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

