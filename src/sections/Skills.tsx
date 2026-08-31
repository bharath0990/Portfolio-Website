import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Wrench, ExternalLink, Github } from 'lucide-react';
import TiltCard from '../components/TiltCard';

interface SkillsProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
  isActive?: boolean;
}

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    accent: '#fb4617',
    skills: [
      { name: 'Java', icon: './java.png' },
      { name: 'SQL', icon: './sql-server.png' },
      { name: 'Python (Beginner)', icon: './python.png' },
    ],
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    accent: '#3b82f6',
    skills: [
      { name: 'MySQL', icon: './sql-server.png' },
      { name: 'PostgreSQL', icon: './sql-server.png' },
      { name: 'Supabase', icon: './supabase.png' },
      { name: 'Oracle DB', icon: './oracle.png' },
    ],
  },
  {
    title: 'Frameworks & Frontend/Mobile',
    icon: Cpu,
    accent: '#8b5cf6',
    skills: [
      { name: 'React.js', icon: './react.png' },
      { name: 'Flutter', icon: './react.png' },
      { name: 'Java Swing', icon: './java.png' },
      { name: 'JDBC', icon: './java.png' },
    ],
  },
  {
    title: 'Tools & Core Concepts',
    icon: Wrench,
    accent: '#10b981',
    skills: [
      { name: 'Git & GitHub', icon: './github.png' },
      { name: 'Eclipse IDE', icon: './Eclipse-IDE.png' },
      { name: 'VS Code', icon: './vscode.png' },
      { name: 'OOP Principles', icon: './java.png' },
      { name: 'Data Structures & Algorithms', icon: './java.png' },
    ],
  },
];

const featuredProjects = [
  {
    title: 'Campus Connect – Accommodation & Roommate Matcher',
    description: 'Full-stack platform built for AI hackathon with a Flutter mobile app and React.js dashboard. Features GPS search, real-time messaging, and Supabase PostgreSQL.',
    tags: ['Flutter', 'React.js', 'Supabase', 'PostgreSQL', 'Git/GitHub'],
    github: 'https://github.com/bharath0990/Campus_Connect',
    demo: 'https://github.com/bharath0990/Campus_Connect',
  },
  {
    title: 'Student Management System',
    description: 'Desktop application using Java Swing, JDBC, and MySQL featuring password hashing, roll number/email input validation, multi-field search, and layered DAO architecture.',
    tags: ['Java Swing', 'JDBC', 'MySQL', 'Authentication', 'DAO Layer'],
    github: 'https://github.com/bharath0990/Student-Management-System',
    demo: 'https://github.com/bharath0990/Student-Management-System',
  },
  {
    title: 'Library Management System',
    description: 'Desktop application to manage book inventory, member records, and issue/return tracking using Core Java and JDBC across 10+ classes applying OOP principles.',
    tags: ['Core Java', 'JDBC', 'OOP Principles', 'Automation'],
    github: 'https://github.com/bharath0990/Library-Management-System',
    demo: 'https://github.com/bharath0990/Library-Management-System',
  },
];

const Skills: React.FC<SkillsProps> = ({ onLinkHover, onLinkLeave }) => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#fb4617] tracking-widest uppercase mb-2">
            <Cpu size={14} /> TECHNICAL SKILLS & PROJECTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Technical Stack & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb4617] via-orange-400 to-yellow-300">
              Software Engineering Portfolio
            </span>
          </h2>
        </div>
        <p className="text-white/60 font-mono text-xs max-w-xs uppercase leading-relaxed">
          Technical skills, databases, frameworks, and projects from resume.
        </p>
      </div>

      {/* Skills Matrix (4 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <TiltCard maxRotate={10} className="p-6 h-full flex flex-col justify-between border-white/10 bg-[#101017]/90 hover:border-[#fb4617]/40">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: `${cat.accent}20`, border: `1px solid ${cat.accent}40` }}
                    >
                      <Icon size={20} style={{ color: cat.accent }} />
                    </div>
                    <h3 className="font-bold text-base text-white font-heading">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all"
                        onMouseEnter={onLinkHover}
                        onMouseLeave={onLinkLeave}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-4 h-4 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="font-mono text-xs text-white/90 font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Projects */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="text-2xl font-bold font-heading text-white">Featured Projects</h3>
          <span className="font-mono text-xs text-white/40 uppercase tracking-wider">LIVE LINKS & GITHUB</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((proj, pIdx) => (
            <motion.div key={pIdx} whileHover={{ y: -5 }}>
              <TiltCard maxRotate={12} className="p-6 h-full flex flex-col justify-between border-white/10 bg-[#101017]/90 hover:border-[#fb4617]/50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#fb4617] uppercase tracking-wider font-bold">
                      PROJECT 0{pIdx + 1}
                    </span>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                      onMouseEnter={onLinkHover}
                      onMouseLeave={onLinkLeave}
                    >
                      <Github size={18} />
                    </a>
                  </div>

                  <h4 className="font-bold text-lg text-white font-heading leading-snug">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-[#fb4617] transition-colors"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkLeave}
                  >
                    <span>OPEN REPO</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;