import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';

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
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 85 },
    { name: 'UI/UX', percentage: 80 },
    { name: 'Figma', percentage: 70 },
  ];

  const backendSkills = [
    { name: 'Java', percentage: 98 },
    { name: 'SQL', percentage: 88 },
    { name: 'Python', percentage: 75 },
    { name: 'C/C++', percentage: 85 },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-primary-500 mr-3"></span>
            Frontend Development
          </h3>

          {frontendSkills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              onHover={onLinkHover}
              onLeave={onLinkLeave}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-primary-500 mr-3"></span>
            Backend Development
          </h3>

          {backendSkills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              color="bg-secondary-500"
              onHover={onLinkHover}
              onLeave={onLinkLeave}
            />
          ))}
        </motion.div>
      </div>

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