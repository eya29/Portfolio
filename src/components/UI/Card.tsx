import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 shadow-xl",
        "dark:bg-gray-800/50 dark:border-gray-700/50",
        hover && "hover:shadow-2xl transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};