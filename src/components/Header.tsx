import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Menu, Twitter, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLinkHover, onLinkLeave }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bharath0990', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bharath0990', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/BharathReddy224', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/p.bharathreddyy_/', label: 'Instagram' },
  ];

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-200/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-2xl font-bold font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
          >
            <span className="text-primary-500">Bharath</span>Reddy
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary-400 transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 500 }}
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
                target={item.href.startsWith('#') ? undefined : '_blank'}
                rel={item.href.startsWith('#') ? undefined : 'noopener noreferrer'}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4 bg-dark-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
                target={item.href.startsWith('#') ? undefined : '_blank'}
                rel={item.href.startsWith('#') ? undefined : 'noopener noreferrer'}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkLeave}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;