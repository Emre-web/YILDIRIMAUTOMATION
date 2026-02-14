
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-main rounded-2xl px-6 py-12 text-center group">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-white mb-4">
              Have a process you want to automate?
            </h2>
            <p className="text-base text-white/70 mb-6 font-light max-w-xl mx-auto">
              Stop fighting manual tasks. Let's turn your complex workflows into reliable, scalable automation solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-slate-950 px-6 py-3 rounded-xl font-medium text-base hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10"
            >
              Contact for Automation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
