import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Skills from './sections/Skills';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link'>('default');
  const lastScrollTime = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const sections = [
    { id: 'intro', component: Intro, label: 'Intro' },
    { id: 'hero', component: Hero, label: 'About' },
    { id: 'achievements', component: Achievements, label: 'Achievements' },
    { id: 'education', component: Education, label: 'Education' },
    { id: 'skills', component: Skills, label: 'Skills' },
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
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 16) return; // Throttle to ~60fps
      lastScrollTime.current = now;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(updateActiveSection, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [updateActiveSection, handleMouseMove]);

  const scrollToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      const targetPosition = sectionsRef.current[index].offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'auto', // Changed from smooth to auto for better performance
      });
    }
  };

  const handleLinkHover = () => {
    setCursorVariant('link');
  };

  const handleLinkLeave = () => {
    setCursorVariant('default');
  };

  return (
    <div className="bg-dark-300 text-white min-h-screen">
      <ScrollProgress />
      <Header onLinkHover={handleLinkHover} onLinkLeave={handleLinkLeave} />
      <AnimatePresence mode="wait">
        <main className="relative">
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionsRef.current[index] = el as HTMLDivElement | null;
                }}
                className="min-h-screen"
              >
                <SectionComponent 
                  onLinkHover={handleLinkHover} 
                  onLinkLeave={handleLinkLeave} 
                  isActive={activeSection === index}
                />
              </section>
            );
          })}
          <Navigation 
            sections={sections} 
            activeSection={activeSection} 
            onNavigate={scrollToSection}
            onLinkHover={handleLinkHover}
            onLinkLeave={handleLinkLeave}
          />
        </main>
        <ScrollToTop onHover={handleLinkHover} onLeave={handleLinkLeave} />
      </AnimatePresence>
      <Cursor position={cursorPosition} variant={cursorVariant} />
    </div>
  );
}

export default App;