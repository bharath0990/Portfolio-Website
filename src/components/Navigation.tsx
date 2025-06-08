import { motion } from 'framer-motion';
import React from 'react';

interface NavigationProps {
  sections: Array<{ id: string; label: string }>;
  activeSection: number;
  onNavigate: (index: number) => void;
  onLinkHover: () => void;
  onLinkLeave: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  onNavigate,
  onLinkHover,
  onLinkLeave,
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className="relative group"
            onClick={() => onNavigate(index)}
            onMouseEnter={onLinkHover}
            onMouseLeave={onLinkLeave}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            aria-label={`Navigate to ${section.label} section`}
          >
            <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
              {section.label}
            </span>
            <div className="w-3 h-3 rounded-full border border-primary-500 relative">
              {activeSection === index && (
                <motion.div
                  className="absolute inset-0.5 bg-primary-500 rounded-full"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;