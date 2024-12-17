import { motion } from 'framer-motion';

interface TagProps {
  children: string;
  delay?: number;
}

export const Tag = ({ children, delay = 0 }: TagProps) => (
  <motion.span
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay }}
    className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm 
              transition-all duration-300 hover:bg-zinc-700 hover:text-white 
              transform hover:scale-105"
  >
    {children}
  </motion.span>
);