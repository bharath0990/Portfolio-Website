import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Code2 } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import { initializeEmailJS, sendContactEmail, type ContactFormData } from '../services/emailService';

interface ContactProps {
  onLinkHover?: () => void;
  onLinkLeave?: () => void;
  isActive?: boolean;
}

const Contact: React.FC<ContactProps> = ({ onLinkHover, onLinkLeave }) => {
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
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
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formState);
      if (success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage('Failed to send message. Please try emailing directly.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bharath0990', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bharath0990', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/bharath0990/', label: 'LeetCode' },
    { icon: Instagram, href: 'https://www.instagram.com/p.bharathreddyy_/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#fb4617] tracking-widest uppercase mb-2">
            <Mail size={14} /> CONTACT STUDIO
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb4617] to-amber-400">
              Extraordinary Together
            </span>
          </h2>
        </div>
        <p className="text-white/60 font-mono text-xs max-w-xs uppercase leading-relaxed">
          Open for full-stack software developer opportunities, Java roles, and internships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <TiltCard maxRotate={8} className="p-6 border-white/10 bg-[#101017]/90">
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] text-[#fb4617] uppercase tracking-wider font-bold">
                DIRECT CHANNELS
              </span>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:padakantibharath82@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fb4617]/20 border border-[#fb4617]/40 flex items-center justify-center text-[#fb4617]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-white/40 uppercase">EMAIL ME</p>
                    <p className="font-mono text-xs text-white font-medium group-hover:text-[#fb4617] transition-colors">
                      padakantibharath82@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919390418976"
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center text-[#3b82f6]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-white/40 uppercase">PHONE / WHATSAPP</p>
                    <p className="font-mono text-xs text-white font-medium group-hover:text-[#3b82f6] transition-colors">
                      +91 9390418976
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-white/40 uppercase">LOCATION</p>
                    <p className="font-mono text-xs text-white font-medium">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Social Pills */}
              <div className="pt-4 border-t border-white/10">
                <p className="font-mono text-xs text-white/50 mb-3 uppercase">ONLINE PROFILES</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-[#fb4617] text-white font-mono text-xs transition-all"
                        onMouseEnter={onLinkHover}
                        onMouseLeave={onLinkLeave}
                      >
                        <Icon size={14} className="text-[#fb4617]" />
                        <span>{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </TiltCard>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <TiltCard maxRotate={8} className="p-8 border-white/10 bg-[#101017]/90">
            <h3 className="font-bold text-xl text-white font-heading mb-6 flex items-center gap-2">
              <span>Send a Message</span>
              <span className="w-2 h-2 rounded-full bg-[#fb4617]" />
            </h3>

            {submitStatus !== 'idle' && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-xs font-mono ${
                  submitStatus === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {submitStatus === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-white/70 mb-2 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-mono text-xs outline-none focus:border-[#fb4617] transition-all"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkLeave}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-white/70 mb-2 uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-mono text-xs outline-none focus:border-[#fb4617] transition-all"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkLeave}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-white/70 mb-2 uppercase">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-mono text-xs outline-none focus:border-[#fb4617] transition-all resize-none"
                  onMouseEnter={onLinkHover}
                  onMouseLeave={onLinkLeave}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#fb4617] hover:bg-[#ff5526] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                onMouseEnter={onLinkHover}
                onMouseLeave={onLinkLeave}
              >
                {isSubmitting ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <>
                    <span>SUBMIT MESSAGE</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </TiltCard>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
        <p>© {new Date().getFullYear()} P. Bharath Kumar Reddy. Built with React & 3D WebGL.</p>
        <p className="uppercase">BENJAMIN CREATIVE INSPIRED DESIGN</p>
      </footer>
    </section>
  );
};

export default Contact;
