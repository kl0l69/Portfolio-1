import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 flex flex-col relative selection:bg-brand-yellow selection:text-black animate-fade-in-site">
      {/* 3D Animated Background */}
      <Background3D />
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;