import { SectionTitle } from '../ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl">
          <p className="text-xl text-charcoal-800 mb-8 leading-relaxed font-light">
            안녕하세요! 인문학, 디자인, 프로그래밍의 교차점에 서 있는 게임디자이너 배주형입니다.
          </p>
          
          <p className="text-xl text-charcoal-800 mb-10 leading-relaxed font-light">
            Hello! I'm Bhae JhooHyung, a game designer standing at the intersection of humanities, design, and programming.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-charcoal-700">
            <a 
              href="mailto:reggae1@naver.com"
              className="hover:text-accent transition-colors duration-300 underline decoration-accent"
            >
              reggae1@naver.com
            </a>
            <span className="text-charcoal-300">|</span>
            <a
              href="/pdf/JH_CV_Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black hover:bg-gray-800 text-white text-sm font-medium transition-all duration-300"
            >
              CV (ENG)
            </a>
            <a
              href="/pdf/JH_CV_Kor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black hover:bg-gray-800 text-white text-sm font-medium transition-all duration-300"
            >
              CV (KOR)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

