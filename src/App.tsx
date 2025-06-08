import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Achievements from './sections/Achievements';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  const sections = [
    { id: 'hero', component: Hero, label: 'About' },
    { id: 'achievements', component: Achievements, label: 'Achievements' },
    { id: 'skills', component: Skills, label: 'Skills' },
    { id: 'contact', component: Contact, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
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
      window.scrollTo({
        top: sectionsRef.current[index].offsetTop,
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
      </AnimatePresence>
    </div>
  );
}

export default App;