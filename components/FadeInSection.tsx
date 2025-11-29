import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string; // Tailwind delay class
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 'delay-0' }) => {
  const { domRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={domRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      } ${delay}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;