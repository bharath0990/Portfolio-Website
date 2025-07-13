import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursorBlinkSpeed?: number;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursorBlinkSpeed = 500,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (onComplete && currentIndex >= text.length) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isTyping, onComplete]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{displayedText}</span>
      {isTyping && currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-primary-500 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: cursorBlinkSpeed / 1000,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};

export default Typewriter;