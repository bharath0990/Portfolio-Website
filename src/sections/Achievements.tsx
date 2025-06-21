import { motion, useAnimation } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CertificateCard from '../components/CertificateCard';

interface AchievementsProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ onLinkHover, onLinkLeave, isActive }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView || isActive) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, isActive]);

  const achievements = [
    {
      title: "Oracle Certified Professional",
      description: "Java SE 11 Developer certification demonstrating advanced Java programming skills and best practices.",
      icon: Trophy,
    },
    {
      title: "Oracle Database SQL Specialist",
      description: "Certified in Oracle Database SQL, showcasing expertise in database design and query optimization.",
      icon: Award,
    },
    {
      title: "Oracle Cloud AI Foundations",
      description: "Certified in Oracle Cloud Infrastructure AI services and machine learning fundamentals.",
      icon: Trophy,
    },
    {
      title: "Python Data Science",
      description: "Completed comprehensive Python for Data Science certification from Great Learning platform.",
      icon: Award,
    },
  ];

  const certificates = [
    {
      title: "Oracle certified Professional: Java SE 11 Developer",
      issuer: "ORACLE University",
      date: "Nov 20, 2024",
      image: "./OracleJava.jpg",
    },
    {
      title: "Oracle Database SQL Certified Specialist",
      issuer: "ORACLE University",
      date: "Nov 14, 2024",
      image: "./OracleSQL.jpg",
    },
    {
      title: "Oracle Cloud Infrastucture 2023 AI Certified Foundations Associate",
      issuer: "ORACLE University",
      date: "Aug 31, 2024",
      image: "./OracleAI.jpg",
    },
    {
      title: "Python for Data Science",
      issuer: "Great Learning",
      date: "Jul 2024",
      image: "./GreatLearningPython.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={ref} className="container mx-auto px-6 py-20">
      <motion.div
        className="mb-16 text-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary-500">Achievements</span> & Certifications
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          variants={containerVariants}
        >
          Recognitions for excellence and dedication in the field of technology
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              className="bg-dark-200 p-6 rounded-lg border-l-4 border-primary-500"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              onMouseEnter={onLinkHover}
              onMouseLeave={onLinkLeave}
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                  <Icon size={24} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.h3
        className="text-2xl font-semibold mb-8 text-center"
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      >
        Professional Certifications
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {certificates.map((certificate, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CertificateCard
              title={certificate.title}
              issuer={certificate.issuer}
              date={certificate.date}
              image={certificate.image}
              onHover={onLinkHover}
              onLeave={onLinkLeave}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
