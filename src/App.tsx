import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Skills from './sections/Skills';

// Add smooth scrolling CSS
const smoothScrollCSS = `
  html {
    scroll-behavior: smooth;
  }
  
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Add CSS for smooth scrolling
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = smoothScrollCSS;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const sections = [
    { id: 'hero', component: Hero, label: 'About' },
    { id: 'achievements', component: Achievements, label: 'Achievements' },
    { id: 'education', component: Education, label: 'Education' },
    { id: 'skills', component: Skills, label: 'Skills' },
    { id: 'contact', component: Contact, label: 'Contact' },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      const targetPosition = sectionsRef.current[index].offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
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
      <Cursor position={cursorPosition} variant={cursorVariant} />
      <ScrollProgress />
      <Header onLinkHover={handleLinkHover} onLinkLeave={handleLinkLeave} />
      <AnimatePresence>
        <main className="relative">
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
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
    </div>
  );
}

export default App;