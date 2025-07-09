import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';

interface SkillsProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Skills: React.FC<SkillsProps> = ({ onLinkHover, onLinkLeave, isActive }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView || isActive) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, isActive]);

  const frontendSkills = [
    { name: 'HTML5', logo: <img src="./html.png" alt="HTML5" className="w-8 h-8 object-contain" /> },
    { name: 'CSS3', logo: <img src="./css-3.png" alt="CSS3" className="w-8 h-8 object-contain" /> },
    { name: 'Figma', logo: <img src="./figma.png" alt="Figma" className="w-12 h-12 object-contain" /> },
    { name: 'Git', logo: <img src="./github.png" alt="Git" className="w-8 h-8 object-contain" /> },
  ];

  const backendSkills = [
    { name: 'Java', logo: <img src="./java.png" alt="Java" className="w-12 h-12 object-contain" /> },
    { name: 'C++', logo: <img src="./c-.png" alt="C++" className="w-12 h-12 object-contain" /> },
    { name: 'C', logo: <img src="./letter-c.png" alt="C" className="w-12 h-12 object-contain" /> },
    { name: 'Eclipse-IDE', logo: <img src="./Eclipse-IDE.png" alt="Eclipse" className="w-8 h-8 object-contain" /> },
    { name: 'Python', logo: <img src="./python.png" alt="Python" className="w-12 h-12 object-contain" /> },
    { name: 'SQL', logo: <img src="./sql-server.png" alt="SQL" className="w-12 h-12 object-contain" /> },
    { name: 'Oracle', logo: <img src="./oracle.png" alt="Oracle" className="w-12 h-12 object-contain" /> },
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

  const renderSkill = (
    skill: { name: string; logo: JSX.Element },
    index: number,
    direction: 'left' | 'right'
  ) => (
    <motion.div
      key={`${skill.name}-${index}`}
      className="group flex flex-col items-center justify-center mx-8 relative cursor-pointer"
      onMouseEnter={onLinkHover}
      onMouseLeave={onLinkLeave}
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full bg-dark-200/80 backdrop-blur-sm border-2 border-gray-600 shadow-lg group-hover:shadow-2xl ${
          direction === 'left' 
            ? 'group-hover:border-blue-500 group-hover:shadow-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]' 
            : 'group-hover:border-purple-500 group-hover:shadow-purple-500/50 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]'
        } transition-all duration-300`}
      >
        {skill.logo}
      </div>
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 -bottom-12 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`px-3 py-2 rounded-lg text-sm text-white shadow-lg border ${
          direction === 'left' 
            ? 'bg-blue-600 border-blue-500' 
            : 'bg-purple-600 border-purple-500'
        }`}>
          {skill.name}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-transparent ${
            direction === 'left' ? 'border-t-blue-600' : 'border-t-purple-600'
          }`} />
        </div>
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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/5 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="mb-16 text-center relative z-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-blue-500">Skills</span> & Projects
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Technical expertise and showcase of recent work
        </p>
      </motion.div>

      {/* Skills section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 relative z-10">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-blue-500 mr-3"></span>
            Frontend Development
          </h3>
          <div className="relative h-24 overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />
            <motion.div
              className="flex items-center h-full w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...frontendSkills, ...frontendSkills].map((skill, index) =>
                renderSkill(skill, index, 'left')
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-purple-500 mr-3"></span>
            Backend Development
          </h3>
          <div className="relative h-24 overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5" />
            <motion.div
              className="flex items-center h-full w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {[...backendSkills, ...backendSkills].map((skill, index) =>
                renderSkill(skill, index, 'right')
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

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
