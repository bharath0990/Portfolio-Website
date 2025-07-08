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
    { 
      name: 'HTML5',
      logo: (
        <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
          <img src="./html.png" alt="HTML5" className="w-8 h-8 object-contain" />
        </div>
      )
    },
    { 
      name: 'CSS3',
      logo: (
        <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
          <img src="./css-3.png" alt="CSS3" className="w-8 h-8 object-contain" />
        </div>
      )
    },
    { 
      name: 'Figma',
      logo: (
        <img src="./figma.png" alt="Figma" className="w-12 h-12 object-contain" />
      )
    },
    {
      name: 'Git',
      logo: (
        <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
          <img src="./github.png" alt="Git" className="w-8 h-8 object-contain" />
        </div>
      )
    },
  ];

  const backendSkills = [
    { 
      name: 'Java',
      logo: (
        <img
          src="./java.png"
          alt="Java"
          className="w-12 h-12 object-contain"
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
      )
    },
    {
      name: 'C++',
      logo: (
        <img src="./c-.png" alt="C++" className="w-12 h-12 object-contain" />
      )
    },
    {
      name: 'C',
      logo: (
        <img src="./letter-c.png" alt="C" className="w-12 h-12 object-contain" />
      )
    },
    {
      name: 'Eclipse-IDE',
      logo: (
        <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
          <img src="./Eclipse-IDE.png" alt="Eclipse IDE" className="w-8 h-8 object-contain" />
        </div>
      )
    },
    { 
      name: 'Python',
      logo: (
        <img src="./python.png" alt="Python" className="w-12 h-12 object-contain" />
      )
    },
    { 
      name: 'SQL',
      logo: (
        <img src="./sql-server.png" alt="SQL" className="w-12 h-12 object-contain" />
      )
    },
    {
      name: 'Oracle',
      logo: (
        <img src="./oracle.png" alt="Oracle" className="w-12 h-12 object-contain" />
      )
    },
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
      description: 'A web application to visualize and analyze academic performance data for students and institutions.',
      image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&fit=crop&w=600&q=80',
      tags: ['React', 'Charts', 'Visualization', 'Education'],
      liveUrl: 'https://bharath0990.github.io/Academic-Performance/',
      githubUrl: 'https://github.com/bharath0990/Academic-Performance',
    },
    {
      title: 'Real-time Chat App',
      description: 'A real-time messaging application with video calls, file sharing, and end-to-end encryption.',
      image:
        'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['WebSockets', 'React', 'Node.js', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <div ref={ref} className="container mx-auto px-6 py-20">
      {/* header */}
      <motion.div
        className="mb-16 text-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary-500">Skills</span> & Projects
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
          }}
        >
          Technical expertise and showcase of recent work
        </motion.p>
      </motion.div>

      {/* skills section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-primary-500 mr-3"></span>
            Frontend Development
          </h3>

          <div className="relative h-20 overflow-hidden rounded-lg bg-gradient-to-r from-dark-300 via-dark-200 to-dark-300 border border-dark-100">
            <div className="flex items-center h-full">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative flex items-center justify-center group cursor-pointer"
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 8,
                    delay: index * 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-dark-100 border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:border-primary-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center justify-center transition-all duration-300">
                      {skill.logo}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 z-10">
                      <div className="bg-dark-100 px-2 py-1 rounded text-xs font-medium whitespace-nowrap border border-dark-100">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-secondary-500 mr-3"></span>
            Backend Development
          </h3>

          <div className="relative h-20 overflow-hidden rounded-lg bg-gradient-to-l from-dark-300 via-dark-200 to-dark-300 border border-dark-100">
            <div className="flex items-center h-full">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative flex items-center justify-center group cursor-pointer"
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 8,
                    delay: index * 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                  }}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-dark-100 border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:border-secondary-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center transition-all duration-300">
                      {skill.logo}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 z-10">
                      <div className="bg-dark-100 px-2 py-1 rounded text-xs font-medium whitespace-nowrap border border-dark-100">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Cards */}
      <motion.h3
        className="text-2xl font-semibold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
