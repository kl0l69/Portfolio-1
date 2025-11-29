import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import FadeInSection from './FadeInSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* العنوان الرئيسي */}
        <FadeInSection>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-8">
             Let's create <br/>
             <span className="text-gray-700">something</span> <span className="text-brand-yellow">extraordinary.</span>
           </h2>
           <p className="text-gray-400 mb-12 max-w-lg mx-auto">
             Ready to start a project? Connect with me directly.
           </p>
        </FadeInSection>

        {/* منطقة الأيقونات - هنا بتظهر أيقونات التواصل اللي في ملف constants */}
        <FadeInSection delay="delay-200">
          <div className="flex justify-center items-center gap-8 mt-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                // الستايل: تكبير الحجم شوية عشان هما أيقونتين بس، مع إضاءة خفيفة
                className="group relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:text-brand-yellow hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,214,10,0.2)] hover:border-brand-yellow/50"
              >
                <link.icon 
                  size={32} 
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
                
                {/* التولتيب (Tooltip) */}
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-brand-dark border border-white/10 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </FadeInSection>

        {/* الفوتر الصغير اللي تحت خالص */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm">
           <p>© {new Date().getFullYear()} A R S I N E K 🐍 & Omar .</p>
           <p className="mt-2 md:mt-0">Designed & Developed in Egypt.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;