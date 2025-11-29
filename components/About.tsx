import React from 'react';
import { CLIENT_INFO } from '../constants';
import FadeInSection from './FadeInSection';
import { MapPin, BookOpen, Code2, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">About <span className="text-gray-600">Me.</span></h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Main Bio Card */}
          <FadeInSection delay="delay-0">
            <div className="md:col-span-2 bg-brand-accent p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow mb-4">
                  <Code2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The Developer</h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  {CLIENT_INFO.bio}
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                 <div className="px-3 py-1.5 bg-white/5 rounded-full text-[10px] sm:text-xs text-gray-300 border border-white/5">Frontend</div>
                 <div className="px-3 py-1.5 bg-white/5 rounded-full text-[10px] sm:text-xs text-gray-300 border border-white/5">Backend</div>
                 <div className="px-3 py-1.5 bg-white/5 rounded-full text-[10px] sm:text-xs text-gray-300 border border-white/5">System Analysis</div>
              </div>
            </div>
          </FadeInSection>

          {/* Education Card */}
          <FadeInSection delay="delay-100">
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-24 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <BookOpen className="text-blue-400 mb-3" size={24} />
                <h3 className="text-3xl font-display font-bold text-white mb-1">2nd</h3>
                <p className="text-gray-400 font-medium text-sm">Year Student</p>
                <div className="h-px w-full bg-white/10 my-3"></div>
                <p className="text-xs text-gray-500">{CLIENT_INFO.education}</p>
                <p className="text-[10px] text-brand-yellow mt-1">{CLIENT_INFO.major}</p>
              </div>
            </div>
          </FadeInSection>

          {/* Location Card */}
          <FadeInSection delay="delay-200">
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
               {/* Decorative Map Pattern */}
               <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
               
               <div className="relative z-10 bg-brand-dark p-3 rounded-full border border-white/10 mb-3 shadow-xl">
                 <MapPin className="text-red-400" size={20} />
               </div>
               <h3 className="text-lg font-bold text-white">{CLIENT_INFO.location}</h3>
               <p className="text-gray-500 text-xs mt-1">Based in Alexandria</p>
            </div>
          </FadeInSection>

          {/* Passion Card */}
          <FadeInSection delay="delay-300">
            <div className="md:col-span-2 bg-gradient-to-r from-brand-accent to-brand-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex items-center justify-between group overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-xl font-bold text-white mb-1">Always Learning</h3>
                 <p className="text-gray-400 text-sm">Currently exploring advanced AI integration in web apps.</p>
               </div>
               <div className="relative z-10 p-3 bg-brand-yellow rounded-full text-brand-dark transform group-hover:rotate-12 transition-transform duration-300">
                 <Coffee size={24} />
               </div>
               <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-yellow/5 to-transparent"></div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
};

export default About;