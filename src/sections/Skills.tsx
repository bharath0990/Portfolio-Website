import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';

interface SkillsProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onLinkHover, onLinkLeave }) => {
  const { ref, controls } = useScrollAnimation(0.1, false);

  const skills = [
    { name: 'HTML5', logo: <img src="./html.png" alt="HTML5" className="w-12 h-12 object-contain" /> },
    { name: 'CSS3', logo: <img src="./css-3.png" alt="CSS3" className="w-12 h-12 object-contain" /> },
    { name: 'Git Bash', logo: <img src="./Git-Bash.png" alt="Bash" className="w-12 h-12 object-contain" /> },
    { name: 'Figma', logo: <img src="./figma.png" alt="Figma" className="w-12 h-12 object-contain" /> },
    { name: 'SQL', logo: <img src="./sql-server.png" alt="SQL" className="w-12 h-12 object-contain" /> },
    { name: 'Oracle', logo: <img src="./oracle.png" alt="Oracle" className="w-12 h-12 object-contain" /> },
    { name: 'C++', logo: <img src="./c-.png" alt="C++" className="w-12 h-12 object-contain" /> },
    { name: 'C', logo: <img src="./letter-c.png" alt="C" className="w-12 h-12 object-contain" /> },
    { name: 'Python', logo: <img src="./python.png" alt="Python" className="w-12 h-12 object-contain" /> },
    { name: 'Java', logo: <img src="./java.png" alt="Java" className="w-12 h-12 object-contain" /> },
    { name: 'Git', logo: <img src="./github.png" alt="Git" className="w-12 h-12 object-contain" /> },
    { name: 'Eclipse', logo: <img src="./Eclipse-IDE.png" alt="Eclipse" className="w-12 h-12 object-contain" /> },
  ];

  const projects = [
    {
      title: 'AI Based Attendance System using Face Recognition',
      description: 'Face recognition attendance system using Python, OpenCV, and Tkinter. Auto-detects faces to mark attendance in real-time.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&fit=crop&w=600&q=80',
      tags: ['Python', 'OpenCV', 'Tkinter', 'SQLite'],
      liveUrl: 'https://github.com/bharath0990/AI-Based-Attendance-System-using-Face-Recognition',
      githubUrl: 'https://github.com/bharath0990/AI-Based-Attendance-System-using-Face-Recognition',
    },
    {
      title: 'Academic Performance',
      description: 'A web app to visualize and analyze academic performance data for students and institutions.',
      image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&fit=crop&w=600&q=80',
      tags: ['React', 'Charts', 'Visualization', 'Education'],
      liveUrl: 'https://bharath0990.github.io/Academic-Performance/',
      githubUrl: 'https://github.com/bharath0990/Academic-Performance',
    },
    {
      title: 'Real-time Chat App',
      description: 'A real-time messaging app with video calls, file sharing, and encryption.',
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['WebSockets', 'React', 'Node.js', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const renderSkill = (skill: { name: string; logo: JSX.Element }, index: number) => (
    <motion.div
      key={`${skill.name}-${index}`}
      className="group flex flex-col items-center justify-center relative cursor-pointer"
      onMouseEnter={onLinkHover}
      onMouseLeave={onLinkLeave}
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
      viewport={{ once: true }}
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-dark-200/80 backdrop-blur-sm border-2 border-gray-600 shadow-lg group-hover:shadow-2xl group-hover:border-primary-500 group-hover:shadow-primary-500/50 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 mb-3">
        {skill.logo}
      </div>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );

  return (
    <div ref={ref} className="container mx-auto px-6 py-20 relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
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
      </div>
      <motion.div
        className="mb-16 text-center relative z-10"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary-500">Skills</span> & Future Projects
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Technical expertise and tools I work with
        </p>
      </motion.div>
      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-20 relative z-10"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        {skills.map((skill, index) => renderSkill(skill, index))}
      </motion.div>
      {/* Projects */}
      <motion.h3
        className="text-2xl font-semibold mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            onHover={onLinkHover}
            onLeave={onLinkLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;