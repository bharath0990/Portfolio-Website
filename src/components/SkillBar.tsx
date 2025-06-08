import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  onHover: () => void;
  onLeave: () => void;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-primary-500', 
  onHover, 
  onLeave 
}) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleHover = () => {
    setIsHovered(true);
    onHover();
  };

  const handleLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  return (
    <motion.div 
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <motion.span 
          className="text-sm font-medium"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          variants={{
            visible: { 
              width: `${percentage}%`,
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;