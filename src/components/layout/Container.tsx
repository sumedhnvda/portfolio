import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`max-w-6xl mx-auto p-4 ${className}`}>
    {children}
  </div>
);