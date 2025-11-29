import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Cpu, Mail, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home, subtitle: 'Start Here' },
    { name: 'About', href: '#about', icon: User, subtitle: 'My Story' },
    { name: 'Work', href: '#projects', icon: Briefcase, subtitle: 'Portfolio' },
    { name: 'Tech', href: '#skills', icon: Cpu, subtitle: 'Arsenal' },
    { name: 'Contact', href: '#contact', icon: Mail, subtitle: 'Get in touch' },
  ];

  useEffect(() => {
    // دالة بتراقب السكرول عشان تعرف إحنا في أنهي سكشن بالظبط
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActive(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // بنوقف حركة السكرول في الصفحة لما قائمة الموبايل تتفتح
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* اللوجو الثابت فوق على الشمال */}
      <div className="fixed top-6 left-6 z-50 mix-blend-difference pointer-events-none">
        <a href="#home" className="pointer-events-auto block group">
          <div className="relative">
            <span className="font-display font-black text-4xl md:text-5xl text-white tracking-tighter transition-transform group-hover:scale-105 inline-block">
              Omar<span className="text-brand-yellow">.</span>
            </span>
          </div>
        </a>
      </div>

      {/* الناف بار الطاير (Floating Navbar) للديسك توب */}
      <div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none opacity-0 animate-fade-in-site [animation-delay:0.5s]">
        <nav className="hidden md:flex items-center gap-1 glass-nav px-2 py-2 rounded-full shadow-2xl pointer-events-auto transition-transform hover:scale-105 duration-300 bg-black/50 backdrop-blur-xl border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                active === link.href
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <link.icon size={16} className={`${active === link.href ? 'text-black' : 'group-hover:text-brand-yellow transition-colors'}`} />
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* زرار المنيو للموبايل (Hamburger) */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-3 text-white bg-black/20 backdrop-blur-md rounded-full hover:bg-brand-yellow hover:text-black transition-all border border-white/10 shadow-lg active:scale-95"
          aria-label="Open Menu"
        >
          <Menu size={28} strokeWidth={2} />
        </button>
      </div>

      {/* القائمة الكاملة للموبايل (Fullscreen Overlay) */}
      <div 
        className={`md:hidden fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-[-20px] invisible'
        }`}
      >
        <div className="flex flex-col h-full relative p-6">
          {/* رأس القائمة وزرار الإغلاق */}
          <div className="flex justify-between items-center mb-12">
            <span className="text-4xl font-display font-black text-white tracking-tighter">
              Omar<span className="text-brand-yellow">.</span>
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-brand-yellow hover:text-black transition-all duration-300 border border-white/5"
            >
              <X size={28} />
            </button>
          </div>

          {/* روابط التنقل داخل المنيو */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center justify-between p-5 rounded-3xl transition-all duration-500 transform ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                } ${active === link.href ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5 border border-transparent'}`}
                style={{ transitionDelay: `${100 + (index * 50)}ms` }}
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl transition-colors ${
                    active === link.href ? 'bg-brand-yellow text-black' : 'bg-white/5 text-gray-400 group-hover:text-white'
                  }`}>
                    <link.icon size={26} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-3xl font-display font-bold tracking-tight ${
                      active === link.href ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    <span className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-1">
                      {link.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowRight 
                  size={24} 
                  className={`transform transition-all duration-300 ${
                    active === link.href ? 'text-brand-yellow translate-x-0' : 'text-gray-600 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`} 
                />
              </a>
            ))}
          </div>

          {/* حقوق الملكية في آخر القائمة */}
          <div className={`mt-auto pt-8 border-t border-white/10 text-center transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
             <p className="text-gray-400 font-medium">© {new Date().getFullYear()} arsinek</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;