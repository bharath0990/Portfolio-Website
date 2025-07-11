import { motion } from 'framer-motion';
import { BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react';
import React from 'react';
import { useScrollAnimation, fadeInUp } from "../../hooks/useScrollAnimation";

interface EducationProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Education: React.FC<EducationProps> = ({ onLinkHover, onLinkLeave }) => {
  const { ref, controls } = useScrollAnimation(0.1, false);

  const educationData = [
    {
      institute: 'Saveetha School of Engineering',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering - AI',
      duration: '2023 - 2027',
      location: 'Chennai, India',
      status: 'Current (3rd year)',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence. Presently in the 3rd year.',
      logo: 'image.png'
    }
  ];

  return (
    <div ref={ref} className="container mx-auto px-6 py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        {/* Floating Education Icons */}
        <div className="absolute left-20 top-1/3 opacity-20">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BookOpen size={60} className="text-primary-500" />
          </motion.div>
        </div>
        <div className="absolute right-20 top-1/2 opacity-20">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <GraduationCap size={80} className="text-orange-500" />
          </motion.div>
        </div>
        <div className="absolute left-1/2 top-20 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl transform rotate-12" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mb-16 text-center relative z-10"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Education
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          My academic journey and educational background
        </p>
      </motion.div>
      <div className="relative z-10 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Institution Logo/Icon */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-orange-500 rounded-full flex items-center justify-center text-4xl shadow-2xl">
                  <img src={edu.logo} alt={edu.institute + ' logo'} className="w-full h-full object-cover rounded-full" />
                </div>
              </motion.div>
              {/* Education Details */}
              <motion.div
                className="flex-1 bg-dark-200/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.25)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.institute}
                    </h3>
                    <div className="flex items-center text-primary-400 mb-2">
                      <GraduationCap size={18} className="mr-2" />
                      <span className="font-semibold">{edu.degree}</span>
                    </div>
                    <p className="text-lg text-gray-300 mb-3">{edu.field}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{edu.description}</p>
              </motion.div>
            </div>
            {/* Connection Line */}
            {index < educationData.length - 1 && (
              <div className="flex justify-center my-8">
                <motion.div
                  className="w-px h-16 bg-gradient-to-b from-primary-500 to-transparent"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;