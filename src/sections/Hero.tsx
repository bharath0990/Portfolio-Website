import { motion, useAnimation } from 'framer-motion';
import { Calendar, Code, Database, Mail, MapPin, Server } from 'lucide-react';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '../components/AnimatedText';

interface HeroProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Hero: React.FC<HeroProps> = ({ onLinkHover, onLinkLeave, isActive }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView || isActive) {
      controls.start('visible');
    }
  }, [controls, inView, isActive]);

  return (
    <div
      ref={ref}
      className="container mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      <motion.div
        className="w-full md:w-1/2 order-2 md:order-1"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
        }}
      >
        <div className="mb-4">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Java Developer
          </motion.span>

          <AnimatedText
            text="Hi, I'm P. Bharath Kumar Reddy"
            className="text-red-600 text-3xl font-bold"
            delay={0.1}
            noWrap
          />
        </div>

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
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
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
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
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
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
        }}
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