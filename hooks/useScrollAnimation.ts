import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};