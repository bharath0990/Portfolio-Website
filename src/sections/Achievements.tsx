import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Download, CheckCircle2, Code2, Sparkles } from 'lucide-react';

import TiltCard from '../components/TiltCard';

interface AchievementsProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
  isActive?: boolean;
}

const certificationsList = [
  {
    title: 'Java SE 11 Developer',
    issuer: 'ORACLE UNIVERSITY',
    date: 'Nov 20, 2024',
    badge: 'ORACLE CERTIFIED PROFESSIONAL',
    image: './OracleJava.jpg',
    pdf: './Oracle Certified Professional Java SE 11 Developer.pdf',
    accent: '#fb4617',
  },
  {
    title: 'Database SQL Specialist',
    issuer: 'ORACLE UNIVERSITY',
    date: 'Nov 14, 2024',
    badge: 'ORACLE SPECIALIST',
    image: './OracleSQL.jpg',
    pdf: './Oracle Database SQL Specialist (1Z0-914).pdf',
    accent: '#3b82f6',
  },
  {
    title: 'Alpha (DSA with Java)',
    issuer: 'APNA COLLEGE',
    date: '2024',
    badge: 'DSA WITH JAVA SPECIALIST',
    image: './ApnaCollegeJava(DSA).png',
    pdf: './Apna College Certificate.pdf',
    accent: '#8b5cf6',
  },
];

const achievementsList = [
  {
    title: 'LeetCode 30+ Problems Solved',
    category: 'PROBLEM SOLVING & ALGORITHMS',
    description: 'Demonstrated strong problem-solving skills in Data Structures & Algorithms with Java.',
    link: 'https://leetcode.com/u/bharath0990/',
    icon: Code2,
    accent: '#f59e0b',
  },
  {
    title: 'Hexaware AI Innovation League',
    category: '24-HOUR AI HACKATHON',
    description: 'Built real-world AI solutions addressing practical challenges in an intensive 24-hour hackathon.',
    link: 'https://github.com/bharath0990/',
    icon: Sparkles,
    accent: '#ec4899',
  },
];

const Achievements: React.FC<AchievementsProps> = ({ onLinkHover, onLinkLeave }) => {
  return (
    <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#fb4617] tracking-widest uppercase mb-2">
            <Trophy size={14} /> CERTIFICATIONS & ACTIVITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Verified Certifications & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#fb4617] to-purple-400">
              Coding Accomplishments
            </span>
          </h2>
        </div>
        <p className="text-white/60 font-mono text-xs max-w-xs uppercase leading-relaxed">
          Official credentials from Oracle University, Apna College, and hackathon achievements.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {certificationsList.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <TiltCard maxRotate={12} className="p-5 h-full flex flex-col justify-between border-white/10 bg-[#101017]/90 hover:border-[#fb4617]/50">
              <div className="space-y-4">
                {/* Certificate Header */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-black/40 border border-white/10 group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="font-mono text-[10px] text-white/80 font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-400" /> VERIFIED CREDENTIAL
                    </span>
                  </div>
                </div>

                {/* Badge & Title */}
                <div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-[#fb4617]">
                    {cert.badge}
                  </span>
                  <h3 className="font-bold text-base text-white font-heading mt-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-white/50 mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between gap-2">
                {cert.pdf !== '#' ? (
                  <a
                    href={cert.pdf}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#fb4617] text-white font-mono text-[11px] font-semibold transition-all border border-white/10"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkLeave}
                  >
                    <Download size={13} /> PDF
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">COMPLETED</span>
                )}

                {cert.pdf !== '#' && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-white transition-colors"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkLeave}
                  >
                    <span>VIEW</span> <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Achievements & Competitive Programming Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsList.map((item, aIdx) => {
          const Icon = item.icon;
          return (
            <motion.div key={aIdx} whileHover={{ y: -4 }}>
              <TiltCard maxRotate={8} className="p-6 border-white/10 bg-[#101017]/90 flex items-center justify-between">
                <div className="space-y-2 max-w-sm">
                  <span
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}40` }}
                  >
                    {item.category}
                  </span>
                  <h4 className="font-bold text-lg text-white font-heading">{item.title}</h4>
                  <p className="text-xs text-white/60 font-light">{item.description}</p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all"
                  style={{ backgroundColor: `${item.accent}15`, borderColor: `${item.accent}40`, color: item.accent }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <Icon size={22} />
                </a>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
