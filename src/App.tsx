import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ThreeBackground from './components/ThreeBackground';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Skills from './sections/Skills';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { id: 'hero', component: Hero, label: 'About & Profile' },
    { id: 'achievements', component: Achievements, label: 'Achievements' },
    { id: 'education', component: Education, label: 'Education' },
    { id: 'skills', component: Skills, label: 'Skills & Projects' },
    { id: 'contact', component: Contact, label: 'Contact' },
  ];

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(index);
      }
    });
  }, []);

  useEffect(() => {
    let animationFrameId: number | null = null;
    const handleScroll = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [updateActiveSection]);

  return (
    <div className="bg-[#08080c] text-white min-h-screen relative font-sans selection:bg-[#fb4617] selection:text-white">
      {/* WebGL 3D Background */}
      <ThreeBackground />

      <ScrollProgress />
      <Header />
      
      <main className="relative z-10">
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionsRef.current[index] = el as HTMLDivElement | null;
              }}
              className="relative"
            >
              <SectionComponent isActive={activeSection === index} />
            </section>
          );
        })}
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;