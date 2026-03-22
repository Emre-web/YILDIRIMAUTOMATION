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
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, #0f172a, #581c87, #000000)'
      }}
    >
      {/* Animated background elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(148, 5, 141, 0.1)',
          filter: 'blur(64px)'
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(107, 8, 121, 0.1)',
          filter: 'blur(64px)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '2s'
        }}
      ></div>
      </div>
      
      {/* Data node constellation pattern */}
      <div 
        className="absolute inset-0"
        style={{ opacity: 0.3, pointerEvents: 'none' }}
      >
        <div 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(242, 100, 255, 0.15) 1px, transparent 0)', 
            backgroundSize: '50px 50px' 
          }}
        ></div>
      </div>
      
      {/* Soft blue light blooms */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
        style={{
          backgroundColor: 'rgba(59,130,246,0.1)',
          filter: 'blur(64px)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '3s'
        }}
      ></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          backgroundColor: 'rgba(168,85,247,0.1)',
          filter: 'blur(64px)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '4s'
        }}
      ></div>
      </div>

      <div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
        style={{ paddingTop: '8rem' }}
      >
        {/* Eyebrow - Top small badge */}
        <div 
              className="relative z-50 inline-flex items-center gap-2"
              style={{
                padding: '0.375rem 0.75rem 0.5rem 0.75rem',
                borderRadius: '9999px',
                background: 'linear-gradient(to right, rgba(34,197,94,0.1), rgba(16,185,129,0.1))',
                border: '1px solid rgba(34,197,94,0.2)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
                marginBottom: '2rem'
              }}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#22c55e',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  boxShadow: '0 0 10px rgba(34,197,94,0.3), 0 10px 15px -3px rgba(34,197,94,0.3), 0 4px 6px -2px rgba(34,197,94,0.2)'
                }}
              ></span>
              <span 
                className="font-sans text-xs sm:text-sm whitespace-nowrap"
                style={{ color: '#cbd5e1' }}
              >{t.availableForProjects}</span>
            </div>
        
        {/* Main Headline - Pyramid structure top */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading mb-16 leading-[1.0] tracking-tight max-w-6xl mx-auto"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-white font-black block mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.iBuild}</span>
          <div className="relative inline-flex items-center justify-center">
            <span 
              className="gradient-text relative z-10"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                backgroundImage: 'linear-gradient(to right, #60a5fa, #3b82f6, #4f46e5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
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
        <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(to right, rgba(34,197,94,0.1), rgba(16,185,129,0.1))',
                border: '1px solid rgba(34,197,94,0.2)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                marginBottom: '5rem',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '0.05em'
              }}
            >
          <span 
              className="text-white font-bold font-mono text-lg tracking-wide drop-shadow-lg"
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                textShadow: '0 4px 6px rgba(0,0,0,0.1)',
                letterSpacing: '0.05em'
              }}
            >{t.thatWorks247}</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div 
              className="w-2 h-2 rounded-full shadow-lg"
              style={{ 
                backgroundColor: '#22c55e',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
            ))}
          </div>
        </div>
        
        {/* Description - Pyramid structure bottom */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          style={{ letterSpacing: '0.1em' }}
        >{t.heroTitle}</p>
        
        <p 
          className="text-base sm:text-lg md:text-xl text-slate-400 mb-20 max-w-4xl mx-auto leading-relaxed font-light"
          style={{ letterSpacing: '0.05em' }}
        >{t.heroSubtitle}</p>
        
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors duration-300"
        style={{ 
          cursor: 'pointer',
          animation: 'bounce 1s infinite'
        }}
        aria-label="Scroll to expertise section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
