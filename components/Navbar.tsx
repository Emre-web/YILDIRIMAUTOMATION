import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-16 lg:h-20">
          <div className="flex-shrink-0">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-heading tracking-tighter uppercase">
              <span className="text-white">YILDIRIM</span>
              <span className="text-blue-400 font-bold"> AUTOMATION</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 xl:gap-10 text-sm lg:text-base font-semibold text-slate-400 uppercase tracking-wider items-center">
            <a href="#expertise" className="hover:text-white transition-colors">{t.expertise}</a>
            <a href="#stack" className="hover:text-white transition-colors">{t.stack}</a>
            <a href="#solutions" className="hover:text-white transition-colors">{t.solutions}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>
            
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.5rem 0.5rem',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(to right, rgba(37,99,235,0.2), rgba(147,51,234,0.2))',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <Globe style={{ width: '0.875rem', height: '0.875rem', color: '#60a5fa' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#ffffff' }}>{language.toUpperCase()}</span>
                <ChevronDown style={{ width: '0.625rem', height: '0.625rem', color: 'rgba(255,255,255,0.7)' }} />
              </button>
              
              {showLangMenu && (
                <div style={{ position: 'absolute', right: 0, marginTop: '0.5rem', width: '7rem', backgroundColor: 'rgba(15,23,42,0.98)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
                  <button
                    onClick={() => { setLanguage('en'); setShowLangMenu(false); }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0.5rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      backgroundColor: language === 'en' ? 'rgba(255,255,255,0.05)' : 'transparent',
                      color: language === 'en' ? '#60a5fa' : '#cbd5e1'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🇬🇧</span>
                      <span>English</span>
                    </div>
                  </button>
                  <div className="h-px bg-white/10"></div>
                  <button
                    onClick={() => { setLanguage('tr'); setShowLangMenu(false); }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0.5rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      backgroundColor: language === 'tr' ? 'rgba(255,255,255,0.05)' : 'transparent',
                      color: language === 'tr' ? '#60a5fa' : '#cbd5e1'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem' }}>�🇷</span>
                      <span>Türkçe</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all uppercase tracking-wider"
            >
              {t.hireMe}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
            <div className="flex justify-between items-center mb-6">
              <div className="text-base sm:text-lg font-bold font-heading tracking-tighter uppercase">
                <span className="text-white">YILDIRIM</span>
                <span className="text-blue-400 font-bold"> AUTOMATION</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs font-medium text-white">{language.toUpperCase()}</span>
                    <ChevronDown className="w-2.5 h-2.5 text-white/70" />
                  </button>
                  
                  {showLangMenu && (
                    <div className="absolute right-0 mt-2 w-28 sm:w-32 bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden">
                      <button
                        onClick={() => { setLanguage('en'); setShowLangMenu(false); }}
                        className={`w-full text-left px-2 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-white/5 ${
                          language === 'en' ? 'text-blue-400 bg-white/5' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">🇬🇧</span>
                          <span>English</span>
                        </div>
                      </button>
                      <div className="h-px bg-white/10"></div>
                      <button
                        onClick={() => { setLanguage('tr'); setShowLangMenu(false); }}
                        className={`w-full text-left px-2 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-white/5 ${
                          language === 'tr' ? 'text-blue-400 bg-white/5' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">🇹🇷</span>
                          <span>Türkçe</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <a 
                href="#expertise" 
                className="block text-slate-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.expertise}
              </a>
              <a 
                href="#stack" 
                className="block text-slate-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.stack}
              </a>
              <a 
                href="#solutions" 
                className="block text-slate-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.solutions}
              </a>
              <a 
                href="#contact" 
                className="block text-slate-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.contact}
              </a>
            </div>
            
                      </div>
        </div>
      )}
    </nav>
  );
};
