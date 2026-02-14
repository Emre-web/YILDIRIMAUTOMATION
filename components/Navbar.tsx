
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold font-heading tracking-tighter uppercase">
          <span className="text-white">YILDIRIM</span>
          <span className="text-blue-700"> AUTOMATION</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 text-white px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all uppercase tracking-widest"
        >
          Let's Automate
        </a>
      </div>
    </nav>
  );
};
