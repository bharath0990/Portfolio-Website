import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Terminal, Cpu, Code2, Github } from 'lucide-react';
import TiltCard from '../components/TiltCard';

interface IntroProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
  isActive?: boolean;
}

const Intro: React.FC<IntroProps> = ({ onLinkHover, onLinkLeave }) => {
  const marqueeItems = [
    'JAVA & OBJECT-ORIENTED PROGRAMMING',
    'DATA STRUCTURES & ALGORITHMS',
    'SQL & MYSQL DATABASE ARCHITECTURE',
    'CAMPUS CONNECT (BUILD WITH AI)',
    'FLUTTER & REACT.JS FULL STACK',
    'ORACLE CERTIFIED JAVA DEVELOPER',
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 flex flex-col justify-between relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#fb4617]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Monospaced Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <Terminal size={14} className="text-[#fb4617]" />
              <span className="font-mono text-xs text-white/80 tracking-wide uppercase">
                HYDERABAD, INDIA <span className="text-white/30">|</span> B.E CSE (AI) • CGPA 8.2
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="font-mono text-sm tracking-widest text-[#fb4617] uppercase font-semibold">
                SOFTWARE DEVELOPER & AI ENTHUSIAST
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight font-heading text-white leading-[1.05]">
                P. Bharath <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#fb4617]">
                  Kumar Reddy
                </span>
              </h1>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed"
            >
              Motivated Computer Science (AI) student proficient in Java, SQL, Data Structures, and Full-Stack Development. Experienced in building desktop management systems, mobile apps, and real-time student platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#hero"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#fb4617] text-white font-mono text-xs tracking-wider uppercase font-semibold overflow-hidden transition-all shadow-[0_0_25px_rgba(251,70,23,0.4)] hover:shadow-[0_0_35px_rgba(251,70,23,0.7)]"
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              >
                <span>VIEW PROJECTS & EXPERIENCE</span>
                <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="https://leetcode.com/u/bharath0990/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all backdrop-blur-md"
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              >
                <Code2 size={16} className="text-amber-400" />
                <span>LEETCODE PROFILE</span>
              </a>

              <a
                href="https://github.com/bharath0990/Leet-Code-Problems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all backdrop-blur-md"
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              >
                <Github size={16} className="text-amber-400" />
                <span>LEETCODE REPO</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Status Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <TiltCard maxRotate={15} scaleOnHover={1.03} className="p-6 border-white/15 bg-[#101017]/90 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#fb4617]/15 border border-[#fb4617]/30 flex items-center justify-center text-[#fb4617]">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-bold text-white uppercase">Software Developer</h3>
                        <p className="font-mono text-[11px] text-white/50">Core Competencies</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] uppercase font-semibold">
                      CGPA 8.2 / 10
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.03]">
                      <p className="font-mono text-[11px] text-white/40 uppercase">Degree</p>
                      <p className="font-mono text-sm font-bold text-white mt-1">B.E CSE (AI)</p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.03]">
                      <p className="font-mono text-[11px] text-white/40 uppercase">Graduation</p>
                      <p className="font-mono text-sm font-bold text-white mt-1">Class of 2027</p>
                    </div>
                  </div>

                  {/* Primary Tech Pills */}
                  <div className="space-y-2">
                    <p className="font-mono text-[11px] text-white/40 uppercase">Primary Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'SQL', 'MySQL', 'React.js', 'Flutter', 'Supabase', 'Python'].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-white/10 bg-white/5 text-white/90">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Stats Row */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <Sparkles size={13} /> Oracle Certified
                    </span>
                    <span>Saveetha School of Engineering</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Kinetic Infinite Marquee Ticker */}
      <div className="w-full border-y border-white/10 bg-[#0c0c12]/80 backdrop-blur-md py-3 overflow-hidden my-auto pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-4">
              <span className="font-mono text-xs tracking-[0.25em] text-white/70 font-semibold uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#fb4617]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;