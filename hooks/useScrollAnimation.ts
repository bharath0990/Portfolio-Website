import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.2, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '50px 0px',
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
    y: 30,
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
    x: -30,
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
    x: 30,
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
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};