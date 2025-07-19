import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

interface CursorProps {
  position: { x: number; y: number };
  variant: 'default' | 'link';
}

const Cursor: React.FC<CursorProps> = ({ position, variant }) => {
  const cursorVariants = {
    default: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      x: position.x - 10,
      y: position.y - 10,
      transition: {
        type: 'tween',
        duration: 0.1,
        ease: 'easeOut',
      },
    },
    link: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      border: '1px solid rgba(14, 165, 233, 0.5)',
      x: position.x - 30,
      y: position.y - 30,
      transition: {
        type: 'tween',
        duration: 0.15,
        ease: 'easeOut',
      },
    },
  };

  // Hide cursor on small screens
  useEffect(() => {
    const handleResize = () => {
      const cursorEl = document.getElementById('custom-cursor');
      if (cursorEl) {
        if (window.innerWidth < 768) {
          cursorEl.style.display = 'none';
        } else {
          cursorEl.style.display = 'block';
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      id="custom-cursor"
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{ mixBlendMode: 'difference' }} // moved here from variant
      variants={cursorVariants}
      animate={variant}
    />
  );
};

export default Cursor;
