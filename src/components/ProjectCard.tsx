import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  onHover,
  onLeave,
}) => {
  return (
    <motion.div
      className="bg-dark-200 rounded-lg overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex space-x-2">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                className="p-2 bg-dark-100/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                aria-label="View source code on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                className="p-2 bg-dark-100/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                aria-label="View live project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-dark-100 text-primary-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;