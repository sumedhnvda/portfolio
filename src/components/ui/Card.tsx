import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({
  icon: Icon,
  iconColor,
  title,
  children,
  className = '',
  onClick
}: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-zinc-900 rounded-xl p-6 cursor-pointer relative ${className}`} 
      onClick={onClick}
    >
      {Icon && <Icon className={`w-6 h-6 ${iconColor} mb-4`} />}
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      {children}
      
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center cursor-pointer">
        <span className="text-white">⌞ ⌝</span>
      </div>
    </motion.div>
  );
};
