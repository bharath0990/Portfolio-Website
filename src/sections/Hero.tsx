import { motion } from 'framer-motion';
import { Calendar, Code, Database, Mail, MapPin, Server } from 'lucide-react';
import React from 'react';
import AnimatedText from '../components/AnimatedText';
import { fadeInLeft, fadeInRight, useScrollAnimation } from '../../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className="container mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      <motion.div
        className="w-full md:w-1/2 order-2 md:order-1"
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <span className="text-primary-500">About</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            Get to know me better
          </motion.p>
        </motion.div>

        <AnimatedText
          text="A CSE (AI) student at Saveetha School of Engineering - Chennai, passionate about building smart and efficient tech solutions. I enjoy working with Java, Python, and web technologies, and I'm currently exploring AI, cloud, and automation. Always curious and eager to learn, I love turning ideas into real projects."
          className="text-sky-600 text-opacity-70 font-bold mb-8 text-lg max-w-3xl mx-auto text-center"
          delay={0.4}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.div
            className="flex items-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:padakantibharath82@gmail.com"
              className="flex items-center text-sm text-gray-300 hover:text-primary-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} className="mr-2 text-primary-500" />
              padakantibharath82@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="flex items-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Calendar size={18} className="mr-2 text-primary-500" />
            <span className="text-sm">3rd Year B.Tech Student</span>
          </motion.div>

          <motion.div
            className="flex items-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <MapPin size={18} className="mr-2 text-primary-500" />
            <span className="text-sm">Hyderabad, India</span>
          </motion.div>

          <motion.div
            className="flex items-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Database size={18} className="mr-2 text-primary-500" />
            <span className="text-sm">B.Tech in CSE-AI (2023-2027)</span>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="./P.Bharath Kumar Reddy_Resume.pdf"
            download="Bharath_Kumar_Reddy_Resume.pdf"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500/10 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
        initial="hidden"
        animate={controls}
        variants={fadeInRight}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary-500 bg-dark-200 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src="./profile.png"
              alt="P. Bharath Kumar Reddy"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                console.log('Image failed to load:', e);
                // Fallback to a placeholder or hide the image
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Tech stack circles */}
          <motion.div
            className="absolute -top-6 -right-6 w-20 h-20 bg-dark-200 rounded-full flex items-center justify-center border-4 border-primary-500 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: 'spring' }}
          >
            <Code size={28} className="text-primary-500" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 w-20 h-20 bg-dark-200 rounded-full flex items-center justify-center border-4 border-primary-500 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring' }}
          >
            <Server size={28} className="text-primary-500" />
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 1.6, type: 'spring', duration: 1 }}
          >
            <Database size={24} className="text-white" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;