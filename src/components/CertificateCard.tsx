import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import React from 'react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  onHover: () => void;
  onLeave: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  image,
  onHover,
  onLeave,
}) => {
  return (
    <motion.div
      className="bg-dark-200 rounded-lg overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-70" />
      </div>
      
      <div className="p-5 text-left">
        <div className="flex items-start gap-2 mb-2">
          <div className="min-w-[24px] h-6 flex items-center justify-center">
            <Award size={20} className="text-primary-500" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="text-left">
          <p className="text-sm text-gray-300 mb-1">{issuer}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;