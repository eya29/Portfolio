import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg focus:ring-purple-500",
    secondary: "bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:shadow-lg focus:ring-yellow-500",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white focus:ring-blue-500"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};