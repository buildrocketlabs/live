import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Focus ring uses accent color at 40% opacity as requested
  // Using ring-offset to make it distinct on dark backgrounds if needed, but keeping simple ring as requested
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-[3px] focus:ring-accent-start/40 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Updated primary shadow to use accent-start color with 20% opacity
    primary: "bg-gradient-to-r from-accent-start to-accent-end text-white hover:brightness-110 shadow-lg shadow-accent-start/20 border-transparent",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    outline: "bg-transparent border-2 border-accent-start text-accent-start hover:bg-accent-start/10"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </motion.button>
  );
};

export default Button;