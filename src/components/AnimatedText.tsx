import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  noWrap?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', once = true, delay = 0, noWrap = false }) => {
  const words = text.split(' ');
  
  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      className={`overflow-hidden flex ${noWrap ? 'flex-nowrap' : 'flex-wrap'} ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 mt-2"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;