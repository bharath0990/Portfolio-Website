import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface CursorProps {
  position: { x: number; y: number };
  variant: 'default' | 'link' | 'project' | 'view';
}

const Cursor: React.FC<CursorProps> = ({ position, variant }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.innerWidth >= 768);
    const handleResize = () => setIsVisible(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  const isExpanded = variant !== 'default';

  return (
    <>
      {/* Central Sharp Neon Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#fb4617] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#fb4617]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isExpanded ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Trailing Fluid Circle with Spring Physics */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center border border-[#fb4617]/50 bg-[#fb4617]/10 backdrop-blur-[2px]"
        animate={{
          x: isExpanded ? position.x - 35 : position.x - 18,
          y: isExpanded ? position.y - 35 : position.y - 18,
          width: isExpanded ? 70 : 36,
          height: isExpanded ? 70 : 36,
          scale: isExpanded ? 1.1 : 1,
          borderColor: isExpanded ? 'rgba(251, 70, 23, 0.9)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isExpanded ? 'rgba(251, 70, 23, 0.2)' : 'rgba(255, 255, 255, 0.03)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.5 }}
      >
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono tracking-widest font-bold text-white uppercase"
          >
            {variant === 'project' ? 'VIEW' : variant === 'view' ? 'OPEN' : 'GO'}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default Cursor;
