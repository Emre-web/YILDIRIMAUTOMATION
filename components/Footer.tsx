
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-auto bg-slate-950/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold font-heading mb-2 uppercase tracking-tighter">
            <span className="text-white">YILDIRIM</span>
            <span className="text-purple-500"> AUTOMATION</span>
          </div>
          <p className="text-slate-500 text-sm">Empowering enterprises with intelligent automation & Document AI.</p>
        </div>
        
        <div className="flex gap-8 text-xs md:text-sm text-slate-500 uppercase tracking-widest font-medium">
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="text-slate-500 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} YILDIRIM AUTOMATION.
        </div>
      </div>
    </footer>
  );
};
