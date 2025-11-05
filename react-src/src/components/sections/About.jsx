import { SectionTitle } from '../ui/SectionTitle';
import { FaEnvelope } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            안녕하세요! 인문학, 디자인, 프로그래밍의 교차점에 서 있는 게임디자이너 배주형입니다.
            서강대학교 일반대학원에서 아트&테크놀로지 석사 학위를 받았으며, 
            VR/AR 기술을 활용한 인터랙티브 콘텐츠 개발과 사용자 경험 디자인에 관심을 가지고 연구하고 있습니다.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Hello! I'm Bhae JhooHyung, a game designer standing at the intersection of humanities, design, and programming.
            I hold a Master of Arts and Science degree in Art & Technology from Sogang University Graduate School.
            I am interested in developing interactive content using VR/AR technology and researching user experience design.
          </p>

          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <a 
              href="mailto:reggae1@naver.com"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              reggae1@naver.com
            </a>
            <a
              href="/pdf/JH_CV_Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              CV (ENG)
            </a>
            <a
              href="/pdf/JH_CV_Kor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              CV (KOR)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

