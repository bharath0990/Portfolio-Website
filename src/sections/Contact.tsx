import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
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
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';
import {
  initializeEmailJS,
  sendContactEmail,
  type ContactFormData
} from '../services/emailService';

interface ContactProps {
  onLinkHover: () => void;
  onLinkLeave: () => void;
  isActive: boolean;
}

const Contact: React.FC<ContactProps> = ({ onLinkHover, onLinkLeave }) => {
  const { ref, controls } = useScrollAnimation(0.1, false);

  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formState;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formState);
      if (success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! I will get back to you soon.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage('Failed to send message. Please try again or contact me directly.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div ref={ref} className="container mx-auto px-6 py-20">
      <motion.div
        className="mb-16 text-center"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
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
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
          }}
        >
          Let's connect to explore opportunities, collaborations, or just chat tech.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
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
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                  aria-label={item.text}
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
                  target="_blank"
                  rel="noopener noreferrer"
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

          {submitStatus !== 'idle' && (
            <motion.div
              className={`mb-6 p-4 rounded-lg flex items-center ${
                submitStatus === 'success'
                  ? 'bg-success-500/10 border border-success-500/20 text-success-400'
                  : 'bg-error-500/10 border border-error-500/20 text-error-400'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {submitStatus === 'success' ? (
                <CheckCircle size={20} className="mr-3 flex-shrink-0" />
              ) : (
                <AlertCircle size={20} className="mr-3 flex-shrink-0" />
              )}
              <span>{statusMessage}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2">
                  Your {field.charAt(0).toUpperCase() + field.slice(1)} *
                </label>
                <motion.input
                  type={field}
                  id={field}
                  name={field}
                  value={formState[field as keyof ContactFormData]}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-100 focus:border-primary-500 rounded-lg text-white outline-none transition-colors"
                  whileFocus={{ scale: 1.01 }}
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message *
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-dark-200 border border-dark-100 focus:border-primary-500 rounded-lg text-white outline-none transition-colors resize-none"
                whileFocus={{ scale: 1.01 }}
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              />
            </div>

            <motion.button
              type="submit"
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center w-full md:w-auto ${
                isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
              } text-white`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              onMouseEnter={onLinkHover}
              onMouseLeave={onLinkLeave}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <Send size={18} className="ml-2" />
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
