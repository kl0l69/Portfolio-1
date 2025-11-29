import React from 'react';
import { CLIENT_INFO } from '../constants';
import FadeInSection from './FadeInSection';
import { ArrowRight, Code, Terminal, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-1000">
      {/* خلفيات تجريدية بتدي شكل جمالي (Abstract Background Shapes) */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-yellow/10 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <FadeInSection>
            <div className="space-y-8 relative">
              {/* شارة الحالة (Status Badge) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-xs font-medium animate-float backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
                Available for Collaboration
              </div>
              
              <div className="relative">
                <p className="text-gray-400 text-lg md:text-xl font-medium mb-2">Hello, I'm</p>
                
                {/* الاسم بحجم ضخم */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white relative z-10 leading-[0.9]">
                  Omar <br/> Wageh<span className="text-brand-yellow">.</span>
                </h1>

                {/* رسمة الشخبطة تحت الاسم (Scribble) */}
                <div className="absolute top-full left-0 w-[280px] sm:w-[350px] md:w-[450px] -mt-2 md:-mt-4 opacity-80 pointer-events-none">
                  <svg viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path 
                      d="M5 25C50 5 150 25 390 10" 
                      stroke="#FFD60A" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                      className="animate-draw"
                      style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                    />
                    <path 
                      d="M20 28C80 15 180 30 380 15" 
                      stroke="#FFD60A" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      className="animate-draw"
                      style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animationDelay: '0.2s' }}
                    />
                  </svg>
                </div>
              </div>
              
              {/* الوصف المختصر */}
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-lg leading-relaxed pt-6">
                Building <span className="text-white font-semibold">Digital Experiences</span> that blend <span className="italic text-gray-400">creativity</span> with <span className="italic text-gray-400">logic</span>.
              </p>
              
              {/* الأزرار */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects"
                  className="group relative px-8 py-4 bg-brand-yellow text-brand-dark font-bold text-sm md:text-base rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,214,10,0.4)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    View My Work <ArrowRight size={18} />
                  </span>
                </a>
                
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white text-sm md:text-base font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* العنصر المرئي 3D اللي على اليمين - تم تعديله ليكون أكثر شياكة */}
          <FadeInSection delay="delay-300">
            <div className="relative hidden lg:block group perspective-1000 mt-10">
              
              {/* الكارت الأساسي بتأثير 3D */}
              <div className="relative z-10 w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-[1.02] preserve-3d">
                
                {/* الإطار المضيء الخلفي */}
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-yellow/30 to-purple-600/30 rounded-[2.5rem] blur-xl opacity-70 animate-pulse"></div>
                
                {/* الكارت الزجاجي */}
                <div className="relative rounded-[2rem] border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-3 shadow-2xl overflow-hidden">
                  
                  {/* حاوية الصورة */}
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5]">
                    <img 
                      src="https://ik.imagekit.io/rn0uichl8o/WhatsApp%20Image%202025-11-29%20at%2002.23.55_337124d8.jpg" 
                      alt="Omar Wageh" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    
                    {/* طبقة تدرج غامقة من تحت عشان الكتابة تبان */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                    
                    {/* عناصر طايرة فوق الصورة تدي شكل تقني */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-xl">
                       <Sparkles className="text-brand-yellow w-5 h-5 animate-pulse" />
                    </div>

                    <div className="absolute bottom-6 left-6 space-y-3">
                       <div className="flex items-center gap-2 text-white/90 font-mono text-sm bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                          <Terminal size={14} className="text-brand-yellow" />
                          <span>Dev.tsx</span>
                       </div>
                       <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-md text-xs text-white font-medium">React</span>
                          <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-md text-xs text-white font-medium">Next.js</span>
                          <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-md text-xs text-white font-medium">Node</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* ديكورات إضافية حول الكارت */}
                <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-brand-yellow/20 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 -bottom-5 -left-5 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
};

export default Hero;