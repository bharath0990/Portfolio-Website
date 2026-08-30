import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number;
  scaleOnHover?: number;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxRotate = 12,
  scaleOnHover = 1.02,
  onClick,
  onHoverStart,
  onHoverEnd,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * maxRotate;
    const rotY = ((x - centerX) / centerX) * maxRotate;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    if (onHoverEnd) onHoverEnd();
  };

  const handleMouseEnter = () => {
    if (onHoverStart) onHoverStart();
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: scaleOnHover }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#101017]/80 backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default TiltCard;
