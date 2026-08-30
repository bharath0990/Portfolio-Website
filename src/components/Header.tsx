import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLinkHover, onLinkLeave }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bharath0990', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bharath0990', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/p.bharathreddyy_/', label: 'Instagram' },
  ];

  const navLinks = [
    { label: 'About & Profile', href: '#hero' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Skills & Projects', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Monospace Logo Pill */}
        <motion.a
          href="#hero"
          className="pointer-events-auto group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-[#101017]/80 backdrop-blur-xl hover:border-[#fb4617]/50 transition-all duration-300 shadow-lg"
          onMouseEnter={onLinkHover}
          onMouseLeave={onLinkLeave}
          whileHover={{ scale: 1.03 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#fb4617] animate-ping" />
          <span className="font-mono text-xs tracking-wider uppercase text-white font-medium">
            BHARATH <span className="text-white/40">//</span> CSE-AI
          </span>
        </motion.a>

        {/* Center Floating Glass Navigation Pill (Desktop) */}
        <nav className="hidden md:flex pointer-events-auto items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-[#101017]/80 backdrop-blur-xl shadow-xl">
          {navLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              onMouseEnter={onLinkHover}
              onMouseLeave={onLinkLeave}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Right CTA Status & Socials */}
        <div className="hidden sm:flex pointer-events-auto items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR WORK
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#fb4617] hover:bg-[#ff5526] text-white text-xs font-mono font-medium tracking-wide transition-all shadow-md"
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
          >
            LET'S TALK <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="pointer-events-auto md:hidden p-2.5 rounded-full border border-white/10 bg-[#101017]/80 backdrop-blur-xl text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto md:hidden mt-3 max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#101017]/95 backdrop-blur-2xl p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-sm tracking-wide text-white/80 hover:text-[#fb4617] py-1 border-b border-white/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-white/70 hover:text-[#fb4617] transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;