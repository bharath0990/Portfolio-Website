import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  position: { x: number; y: number };
  variant: string;
}

const Cursor: React.FC<CursorProps> = ({ position, variant }) => {
  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      x: position.x - 12,
      y: position.y - 12,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    link: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      border: '1px solid rgba(14, 165, 233, 0.5)',
      x: position.x - 40,
      y: position.y - 40,
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
  };

  // For mobile devices, don't show the cursor
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
      variants={cursorVariants}
      animate={variant}
    />
  );
};

export default Cursor;