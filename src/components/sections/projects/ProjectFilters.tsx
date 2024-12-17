import { motion } from 'framer-motion';
import type { Category } from '../../../types';
const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'ML&DL', label: 'ML & DL' },
  { value: 'NLP' , label: 'NLP'  },
  { value: 'GenAI/LLMs', label: 'GenAI/LLMs' },
  { value: 'CV' , label: 'CV'  },
  { value: 'QuantumML' , label:'Quantum ML'  },
  { value: 'others' , label: 'others'  }
];

interface ProjectFiltersProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const ProjectFilters = ({ selectedCategory, onSelectCategory }: ProjectFiltersProps) => (
  <div className="flex flex-wrap gap-2">
    {categories.map(({ value, label }) => (
      <motion.button
        key={value}
        onClick={() => onSelectCategory(value)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded-full transition-all ${
          selectedCategory === value
            ? 'bg-emerald-500 text-white'
            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
        }`}
      >
        {label}
      </motion.button>
    ))}
  </div>
);