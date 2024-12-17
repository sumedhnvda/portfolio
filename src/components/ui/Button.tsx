import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isActive?: boolean;
}

export const Button = ({ 
  children, 
  variant = 'secondary',
  isActive = false,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-full transition-all";
  const variants = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600",
    secondary: `${isActive 
      ? 'bg-emerald-500 text-white' 
      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'}`
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};