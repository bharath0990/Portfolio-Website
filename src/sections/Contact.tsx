import { motion, useAnimation } from 'framer-motion';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ContactProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Contact: React.FC<ContactProps> = ({ onLinkHover, onLinkLeave, isActive }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (inView || isActive) {
      controls.start('visible');
    }
  }, [controls, inView, isActive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 1500);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bharath0990', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bharath0990', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://x.com/BharathReddy224', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: 'https://www.instagram.com/p.bharathreddyy_/', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'padakantibharath82@gmail.com', href: 'mailto:padakantibharath82@gmail.com' },
    { icon: Phone, text: '+91 9390418976', href: 'tel:+919390418976' },
    { icon: MapPin, text: 'Hyderabad, India', href: '#' },
  ];

  return (
    <div 
      ref={ref}
      className="container mx-auto px-6 py-20"
    >
      <motion.div 
        className="mb-16 text-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary-500">Get in</span> Touch
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.p 
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Let's connect and discuss opportunities, collaborations, or just have a friendly chat about technology
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center mr-4">
                    <Icon size={20} className="text-primary-500" />
                  </div>
                  <span>{item.text}</span>
                </motion.a>
              );
            })}
          </div>
          
          <h3 className="text-2xl font-semibold mb-6">Connect on Social Media</h3>
          
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center text-white ${social.color} transition-colors`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-dark-200 border border-dark-100 focus:border-primary-500 rounded-lg text-white outline-none transition-colors"
                whileFocus={{ scale: 1.01 }}
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-dark-200 border border-dark-100 focus:border-primary-500 rounded-lg text-white outline-none transition-colors"
                whileFocus={{ scale: 1.01 }}
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-200 border border-dark-100 focus:border-primary-500 rounded-lg text-white outline-none transition-colors resize-none"
                whileFocus={{ scale: 1.01 }}
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              />
            </div>
            
            <motion.button
              type="submit"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center w-full md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={onLinkHover}
              onMouseLeave={onLinkLeave}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <Send size={18} className="ml-2" />
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      <div className="mt-20 pt-12 border-t border-dark-100 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} P.Bharath Kumar Reddy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;