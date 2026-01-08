import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Programs } from '../components/sections/Programs';
import { Projects } from '../components/sections/Projects';
import { Research } from '../components/sections/Research';
import { Skills } from '../components/sections/Skills';
import { Awards } from '../components/sections/Awards';

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Programs />
      <Projects />
      <Research />
      <Skills />
      <Awards />
    </div>
  );
};

