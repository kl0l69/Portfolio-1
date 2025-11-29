import React from 'react';
import FadeInSection from './FadeInSection';
import { Loader2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Selected <span className="text-gray-600">Works.</span></h2>
          </div>
        </FadeInSection>

        <FadeInSection delay="delay-200">
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-full bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden min-h-[300px] flex flex-col">
              {/* Fake Browser/Terminal Header */}
              <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <div className="ml-3 px-3 py-0.5 bg-black/50 rounded text-[10px] text-gray-500 font-mono">
                  status.js
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-12 bg-brand-yellow/5 rounded-xl flex items-center justify-center mb-6 relative">
                   <div className="absolute inset-0 rounded-xl border border-brand-yellow/20 animate-ping opacity-20"></div>
                   <Loader2 size={24} className="text-brand-yellow animate-spin" />
                </div>

                <div className="text-left font-mono text-sm md:text-base leading-relaxed">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">status</span> <span className="text-white">=</span> <span className="text-green-400">"Collaboration Ready"</span>;
                  </div>
                  <div className="text-gray-500">
                    // I am waiting for you to create projects together.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;