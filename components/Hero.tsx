import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Zap, Code, Bot, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const words = {
  en: ['Automation Systems', 'Web Scrapers', 'RPA Solutions', 'Data Pipelines'],
  tr: ['Otomasyon Sistemleri', 'Web Kazıyıcılar', 'RPA Çözümleri', 'Veri Hattı']
};

const icons = [Sparkles, Zap, Code, Bot, Database];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const { t, language } = useLanguage();

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === words[language][index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words[language].length);
      return;
    }

    const timeout = setTimeout(() => {
      if (reverse) {
        setSubIndex((prev) => prev - 1);
      } else {
        setSubIndex((prev) => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, language]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Data node constellation pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(100,200,255,0.15) 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      
      {/* Soft blue light blooms */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 sm:pt-20">
        {/* Eyebrow - Top small badge */}
        <div className="relative z-50 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-slate-300 text-xs sm:text-sm font-mono mb-8 sm:mb-12 tracking-wide backdrop-blur-sm shadow-lg shadow-green-500/20">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500"></span>
          <span className="font-sans text-xs sm:text-sm whitespace-nowrap">{t.availableForProjects}</span>
        </div>
        
        {/* Main Headline - Pyramid structure top */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading mb-16 leading-[1.0] tracking-tight max-w-6xl mx-auto">
          <span className="text-white font-black block mb-4">{t.iBuild}</span>
          <div className="relative inline-flex items-center justify-center">
            <span className="gradient-text relative z-10 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-black">
              {words[language][index].substring(0, subIndex)}
            </span>
            <>
              <span 
                className="animate-pulse font-light text-purple-400 ml-1"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              >|</span>
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-blue-600/30 to-indigo-600/30 rounded-lg blur-xl"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              ></div>
              {React.createElement(icons[index % icons.length], {
                className: "absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-purple-400",
                style: { 
                  animation: 'bounce 1s infinite',
                  animationDelay: '0.2s'
                }
              })}
            </>
          </div>
        </h1>
        
        {/* Sub-headline - Pyramid structure middle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 px-6 py-4 rounded-xl border border-green-500/30 backdrop-blur-sm mb-20 shadow-lg shadow-green-500/20 max-w-2xl mx-auto animate-pulse">
          <span className="text-white font-bold font-mono text-lg tracking-wide drop-shadow-lg">{t.thatWorks247}</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/70"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Description - Pyramid structure bottom */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide" style={{ letterSpacing: '0.1em' }}>
          {t.heroTitle}
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-20 max-w-4xl mx-auto leading-relaxed font-light" style={{ letterSpacing: '0.05em' }}>
          {t.heroSubtitle}
        </p>
        
        {/* CTA Buttons - Pyramid structure base */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <a 
            href="#expertise" 
            className="group px-10 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm shadow-lg shadow-white/10 font-sans hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          >
            <span className="text-slate-200 font-medium">{t.viewExpertise}</span>
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-700 to-indigo-800 hover:from-blue-800 hover:via-blue-800 hover:to-indigo-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 font-sans animate-pulse"
            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #312e81 100%)' }}
          >
            <span className="font-bold">{t.startAutomationJourney}</span>
          </a>
        </div>
      </div>
      
      <button 
        onClick={() => {
          const nextSection = document.getElementById('expertise');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
        aria-label="Scroll to expertise section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
