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
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          opacity: 0.3, 
          pointerEvents: 'none' 
        }}
      >
        <div 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(242, 100, 255, 0.15) 1px, transparent 0)', 
            backgroundSize: '50px 50px' 
          }}
        ></div>
      </div>
      
      {/* Soft blue light blooms */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(59,130,246,0.1)',
          filter: 'blur(64px)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '3s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(168,85,247,0.1)',
          filter: 'blur(64px)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '4s'
        }}></div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '64rem',
        margin: '0 auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        textAlign: 'center',
        paddingTop: '8rem'
      }}>
        {/* Eyebrow - Top small badge */}
        <div style={{
              position: 'relative',
              zIndex: 50,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.75rem 0.5rem 0.75rem',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, rgba(34,197,94,0.1), rgba(16,185,129,0.1))',
              border: '1px solid rgba(34,197,94,0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              marginBottom: '2rem'
            }}>
              <span style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  boxShadow: '0 0 10px rgba(34,197,94,0.3), 0 10px 15px -3px rgba(34,197,94,0.3), 0 4px 6px -2px rgba(34,197,94,0.2)'
                }}></span>
              <span style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                  color: '#cbd5e1' 
                }}>{t.availableForProjects}</span>
            </div>
        
        {/* Main Headline - Pyramid structure top */}
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900,
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: '4rem',
          lineHeight: 1,
          letterSpacing: '-0.025em',
          maxWidth: '72rem',
          margin: '0 auto 4rem'
        }}>
          <span style={{ color: '#ffffff', fontWeight: 900, display: 'block', marginBottom: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>{t.iBuild}</span>
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{
              position: 'relative',
              zIndex: 10,
              fontFamily: "'Space Grotesk', sans-serif",
              backgroundImage: 'linear-gradient(to right, #60a5fa, #3b82f6, #4f46e5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              {words[language][index].substring(0, subIndex)}
            </span>
            <>
              <span style={{
                fontWeight: 300,
                color: '#c084fc',
                marginLeft: '0.25rem',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}>|</span>
              <div style={{
                position: 'absolute',
                top: '-1rem',
                left: '-1rem',
                right: '-1rem',
                bottom: '-1rem',
                background: 'linear-gradient(to right, rgba(37,99,235,0.3), rgba(37,99,235,0.3), rgba(79,70,229,0.3))',
                borderRadius: '0.5rem',
                filter: 'blur(16px)',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></div>
              {React.createElement(icons[index % icons.length], {
                style: { 
                  position: 'absolute',
                  right: '-2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '1.5rem',
                  height: '1.5rem',
                  color: '#c084fc',
                  animation: 'bounce 1s infinite',
                  animationDelay: '0.2s'
                }
              })}
            </>
          </div>
        </h1>
        
        {/* Sub-headline - Pyramid structure middle */}
        <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
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
            }}>
          <span style={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.125rem',
              fontFamily: "'Space Grotesk', sans-serif",
              textShadow: '0 4px 6px rgba(0,0,0,0.1)',
              letterSpacing: '0.05em'
            }}>{t.thatWorks247}</span>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {[...Array(3)].map((_, i) => (
              <div style={{
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${i * 0.3}s`
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Description - Pyramid structure bottom */}
        <p style={{
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
          color: '#94a3b8',
          marginBottom: '2rem',
          maxWidth: '48rem',
          margin: '0 auto 2rem',
          lineHeight: '1.625',
          fontWeight: 300,
          letterSpacing: '0.1em'
        }}>{t.heroTitle}</p>
        
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          color: '#64748b',
          marginBottom: '5rem',
          maxWidth: '56rem',
          margin: '0 auto 5rem',
          lineHeight: '1.625',
          fontWeight: 300,
          letterSpacing: '0.05em'
        }}>{t.heroSubtitle}</p>
        
        {/* CTA Buttons - Pyramid structure base */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
          justifyContent: 'center',
          maxWidth: '42rem',
          margin: '0 auto'
        }}>
          <a 
            href="#expertise" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '0.75rem',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{t.viewExpertise}</span>
          </a>
          <a 
            href="#contact" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #312e81 100%)',
              borderRadius: '0.75rem',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
            }}
          >
            <span style={{ fontWeight: 700 }}>{t.startAutomationJourney}</span>
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
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#94a3b8',
          transition: 'color 0.3s ease',
          cursor: 'pointer',
          animation: 'bounce 1s infinite',
          background: 'none',
          border: 'none',
          padding: 0
        }}
        aria-label="Scroll to expertise section"
      >
        <ChevronDown style={{ width: '1.5rem', height: '1.5rem' }} />
      </button>
    </section>
  );
};
