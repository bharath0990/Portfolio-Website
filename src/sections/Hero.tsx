import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, Code2, Sparkles, Layers, Terminal, ArrowDownRight, Github } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import AnimatedCounter from '../components/AnimatedCounter';

interface HeroProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
  isActive?: boolean;
}

const marqueeItems = [
  'JAVA & OBJECT-ORIENTED PROGRAMMING',
  'DATA STRUCTURES & ALGORITHMS',
  'SQL & MYSQL DATABASE ARCHITECTURE',
  'CAMPUS CONNECT (BUILD WITH AI)',
  'FLUTTER & REACT.JS FULL STACK',
  'ORACLE CERTIFIED JAVA DEVELOPER',
];

const Hero: React.FC<HeroProps> = ({ onLinkHover, onLinkLeave }) => {
  return (
    <section id="hero" className="pt-28 pb-16 min-h-screen flex flex-col justify-between relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 my-auto">
        
        {/* Monospaced Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Terminal size={14} className="text-[#fb4617]" />
          <span className="font-mono text-xs text-white/80 tracking-wide uppercase">
            HYDERABAD, INDIA <span className="text-white/30">|</span> B.E CSE (AI) • CGPA 8.2
          </span>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Main Bio & Details (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <TiltCard maxRotate={6} className="p-8 h-full flex flex-col justify-between border-white/10 bg-[#101017]/90 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] text-[#fb4617] tracking-wider uppercase font-bold">
                    SOFTWARE DEVELOPER & AI ENTHUSIAST
                  </span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-white leading-[1.1]">
                    P. Bharath <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#fb4617]">
                      Kumar Reddy
                    </span>
                  </h1>
                </div>

                <p className="text-white/70 text-base font-light leading-relaxed">
                  Motivated Computer Science (AI) student seeking an opportunity to start my career as a software developer, where I can utilize my skills in Java, SQL, programming, and problem solving to contribute to organizational growth and gain practical experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-white/70">
                    <Mail size={16} className="text-[#fb4617]" />
                    <span className="truncate">padakantibharath82@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/70">
                    <MapPin size={16} className="text-[#fb4617]" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/70">
                    <img src="./image.png" alt="Saveetha Logo" className="w-4 h-4 object-contain rounded-sm" />
                    <span>Saveetha School of Engg</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/70">
                    <Layers size={16} className="text-[#fb4617]" />
                    <span>Java & SQL Specialist</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-3 border-t border-white/10 mt-6">
                <a
                  href="./P.Bharath Kumar Reddy_Resume.pdf"
                  download="P_Bharath_Kumar_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fb4617] text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#ff5526] transition-all shadow-md"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <Download size={14} /> DOWNLOAD RESUME
                </a>
                <a
                  href="https://leetcode.com/u/bharath0990/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs font-semibold hover:bg-amber-500/20 transition-all"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <Code2 size={14} /> LEETCODE PROFILE
                </a>
                <a
                  href="https://github.com/bharath0990/Leet-Code-Problems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/15 bg-white/5 text-white font-mono text-xs font-semibold hover:bg-white/10 hover:border-amber-400/50 transition-all"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <Github size={14} className="text-amber-400" /> LEETCODE REPO
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all backdrop-blur-md"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <span>GET IN TOUCH</span>
                  <ArrowDownRight size={14} />
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Profile Picture Card & Stats (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <TiltCard maxRotate={10} className="p-6 relative overflow-hidden bg-gradient-to-br from-[#12121c] to-[#0c0c14] border-white/10 flex-1 flex flex-col justify-between shadow-2xl">
              <div className="flex flex-col items-center text-center space-y-4 my-auto">
                <div className="w-40 h-44 sm:w-44 sm:h-48 rounded-3xl overflow-hidden border-2 border-[#fb4617]/60 bg-black/60 shadow-2xl relative p-1 bg-gradient-to-tr from-[#fb4617]/40 via-transparent to-[#3b82f6]/40">
                  <img
                    src="./profile.jpeg"
                    alt="P. Bharath Kumar Reddy"
                    className="w-full h-full object-cover object-top rounded-[22px]"
                    style={{ objectPosition: 'center 0%' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-xs text-[#fb4617] font-semibold tracking-wider uppercase">B.E. CSE (AI) Student</p>
                  <p className="font-mono text-[11px] text-white/60 flex items-center justify-center gap-1.5">
                    <img src="./image.png" alt="Saveetha Logo" className="w-4 h-4 object-contain rounded-sm" />
                    <span>Saveetha School of Engineering</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <p className="font-mono text-2xl font-extrabold text-[#fb4617]">8.2</p>
                  <p className="font-mono text-[10px] text-white/50 uppercase">Engineering CGPA</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <AnimatedCounter to={30} suffix="+" className="font-mono text-2xl font-extrabold text-amber-400" />
                  <p className="font-mono text-[10px] text-white/50 uppercase">LeetCode Solved</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxRotate={10} className="p-6 bg-[#101017]/90 border-white/10 flex items-center justify-between shadow-xl">
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#fb4617] uppercase tracking-wider font-bold">HACKATHON & RECOGNITION</span>
                <h5 className="font-bold text-white text-sm font-heading">Hexaware AI Innovation League</h5>
                <p className="font-mono text-xs text-white/50">24-Hour AI Solution Hackathon Participant</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#fb4617]/20 border border-[#fb4617]/40 flex items-center justify-center text-[#fb4617] flex-shrink-0">
                <Sparkles size={20} />
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>

      {/* Kinetic Infinite Marquee Ticker */}
      <div className="w-full border-y border-white/10 bg-[#0c0c12]/80 backdrop-blur-md py-3.5 overflow-hidden mt-16 pointer-events-none">
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
    </section>
  );
};

export default Hero;