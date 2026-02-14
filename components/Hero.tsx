
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const words = ["Smart Automation", "Web Scrapers", "PDF Workflows", "Intelligent Bots"];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse delay-700"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-white/10 text-slate-300 text-sm font-medium mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Freelance RPA & Automation Developer - Available for Projects
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-[1.1] tracking-tight min-h-[3.3em] md:min-h-[2.2em]">
          I Build <br className="md:hidden" />
          <span className="gradient-text">{words[index].substring(0, subIndex)}</span>
          <span className="animate-pulse font-light">|</span>
          <br />
          That Works 24/7
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Independent RPA & Automation Specialist. I help businesses automate repetitive tasks, extract valuable data, and optimize workflows - delivering custom solutions tailored to your unique needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-gradient-main rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-900/20 glow-hover"
          >
            <span className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a 
            href="#expertise" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-white transition-all duration-300"
          >
            View Expertise
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 opacity-50">
        <ChevronDown />
      </div>
    </section>
  );
};
