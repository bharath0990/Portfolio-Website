import { motion, useScroll } from 'framer-motion';
import React from 'react';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform-gpu z-50"
      style={{ 
        scaleX: scrollYProgress, 
        transformOrigin: '0%',
        willChange: 'transform'
      }}
    />
  );
};

export default ScrollProgress;