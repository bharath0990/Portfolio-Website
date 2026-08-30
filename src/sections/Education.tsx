import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Building2, School } from 'lucide-react';
import TiltCard from '../components/TiltCard';

interface EducationProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
  isActive?: boolean;
}

const educationList = [
  {
    institution: 'Saveetha School of Engineering',
    degree: 'Bachelor of Engineering (B.E) in Computer Science & Engineering (AI)',
    location: 'Chennai, India',
    duration: '2023 – 2027',
    score: 'CGPA: 8.2 / 10.0',
    status: 'GRADUATING 2027',
    description: 'Specializing in Computer Science & Artificial Intelligence. Coursework includes Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management (MySQL), Software Architecture, and Machine Learning.',
    link: 'https://simatsengineering.com/',
    icon: GraduationCap,
    logo: './image.png',
    accent: '#fb4617',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Board of Intermediate Education (12th Grade)',
    location: 'Hyderabad, India',
    duration: '2021 – 2023',
    score: 'Score: 94.7%',
    status: 'COMPLETED 2023',
    description: 'Higher secondary education focusing on Mathematics, Physics, and Chemistry (MPC) with stellar academic performance scoring 94.7%.',
    link: '#',
    icon: Building2,
    accent: '#3b82f6',
  },
  {
    institution: 'Montessori E/M High School',
    degree: 'Board of Secondary Education (10th Grade)',
    location: 'Shabad, Telangana, India',
    duration: '2020 – 2021',
    score: 'CGPA: 9.5 / 10.0',
    status: 'COMPLETED 2021',
    description: 'Secondary School Certificate (SSC) with distinction scoring a CGPA of 9.5 out of 10.0.',
    link: '#',
    icon: School,
    accent: '#8b5cf6',
  },
];

const Education: React.FC<EducationProps> = () => {

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#fb4617] tracking-widest uppercase mb-2">
            <GraduationCap size={14} /> ACADEMIC TIMELINE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Education & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-[#fb4617]">
              Academic History
            </span>
          </h2>
        </div>
        <p className="text-white/60 font-mono text-xs max-w-xs uppercase leading-relaxed">
          Comprehensive academic background from school to engineering degree.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {educationList.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <TiltCard maxRotate={6} className="p-7 border-white/10 bg-[#101017]/90 hover:border-[#fb4617]/40">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  
                  {/* Icon Badge */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: `${edu.accent}20`, border: `1px solid ${edu.accent}40` }}
                  >
                    <Icon size={26} style={{ color: edu.accent }} />
                  </div>

                  {/* Details */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                          {edu.logo && (
                            <img src={edu.logo} alt={edu.institution} className="w-6 h-6 object-contain rounded bg-white/10 p-0.5" />
                          )}
                          <span>{edu.institution}</span>
                        </h3>
                        <p className="font-mono text-xs text-[#fb4617] font-semibold mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase"
                        style={{ backgroundColor: `${edu.accent}20`, color: edu.accent, border: `1px solid ${edu.accent}40` }}
                      >
                        {edu.score}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-mono text-white/60">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-white/40" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award size={14} className="text-white/40" />
                        <span>{edu.status}</span>
                      </div>
                      <span>• {edu.location}</span>
                    </div>

                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;