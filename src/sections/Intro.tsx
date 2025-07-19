import { motion } from 'framer-motion';
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface IntroProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Intro: React.FC<IntroProps> = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        className="text-center relative z-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
          }
        }}
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          >
            <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', lineHeight: 1 }}>
              <span
                className="font-extrabold text-white uppercase tracking-wide"
                style={{
                  fontFamily: "'Inter', 'Montserrat', Arial, sans-serif",
                  fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                  lineHeight: 1,
                  display: 'inline-block',
                }}
              >
                Hi, I'm
              </span>
              <span className="grok-outline ml-4">
                P. Bharath Kumar Reddy
              </span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-red-500/60 to-sky-500/60 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 2, duration: 0.8 }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;