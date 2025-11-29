import React from 'react';
import { SKILLS } from '../constants';
import FadeInSection from './FadeInSection';

const Skills: React.FC = () => {
  // Duplicate skills to create a seamless infinite loop
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-dark to-brand-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Technical <span className="text-brand-yellow">Arsenal.</span></h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            A continuous flow of technologies I use to bring ideas to life.
          </p>
        </FadeInSection>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden py-4 mask-fade">
        {/* Gradient Masks for edges */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-brand-dark to-transparent z-20"></div>
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-brand-dark to-transparent z-20"></div>

        {/* Row 1: Moving Left */}
        <div className="flex w-max animate-scroll gap-6 hover:[animation-play-state:paused] mb-8">
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm min-w-[180px] hover:border-brand-yellow/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-brand-yellow transition-colors"></div>
              <span className="text-gray-300 font-medium group-hover:text-white whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Moving Right (Reverse) */}
        <div className="flex w-max animate-scroll-reverse gap-6 hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={`rev-${skill.name}-${index}`} 
              className="flex items-center gap-3 px-6 py-4 bg-brand-accent border border-white/5 rounded-xl backdrop-blur-sm min-w-[180px] hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></div>
              <span className="text-gray-300 font-medium group-hover:text-white whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;