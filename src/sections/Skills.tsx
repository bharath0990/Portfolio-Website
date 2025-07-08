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
    hoverColor: string,
    glowColor: string
  ) => (
    <div
      key={`${skill.name}-${index}`}
      className="group flex flex-col items-center justify-center mx-10 relative cursor-pointer"
      onMouseEnter={onLinkHover}
      onMouseLeave={onLinkLeave}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 border-2 border-white shadow-[0_0_20px_4px_${glowColor}] group-hover:shadow-[0_0_40px_10px_rgba(14,165,233,0.8)] group-hover:border-${hoverColor}-500 transition-all duration-300`}
      >
        {skill.logo}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="bg-gray-800 px-3 py-1 rounded text-xs text-white border shadow">
          {skill.name}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="container mx-auto px-6 py-20">
      <motion.div
        className="mb-16 text-center"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-blue-500 mr-3"></span>
            Frontend Development
          </h3>
          <div className="relative h-24 overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
            <motion.div
              className="flex items-center h-full w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              {[...frontendSkills, ...frontendSkills].map((skill, index) =>
                renderSkill(skill, index, 'blue', 'rgba(14,165,233,0.5)')
              )}
            </motion.div>
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-purple-500 mr-3"></span>
            Backend Development
          </h3>
          <div className="relative h-24 overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
            <motion.div
              className="flex flex-row-reverse items-center h-full w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...backendSkills, ...backendSkills].map((skill, index) =>
                renderSkill(skill, index, 'purple', 'rgba(139,92,246,0.5)')
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <motion.h3
        className="text-2xl font-semibold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
