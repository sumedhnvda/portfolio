import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ScardProps {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Scard = ({ 
  icon: Icon, 
  iconColor, 
  title, 
  children, 
  className = '',
}: ScardProps) => {
  return (
    <div
      className={`bg-zinc-900 rounded-xl p-6 ${className}`}
    >
      {Icon && <Icon className={`w-6 h-6 ${iconColor} mb-4`} />}
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      {children}
    </div>
  );
};
