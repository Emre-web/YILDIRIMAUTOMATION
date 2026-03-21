import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export const ShowcaseSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-white">Premium Automation</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600"> Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your business processes with cutting-edge RPA and automation technologies
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t.enterpriseGradeAutomation}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {t.enterpriseGradeDesc}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                    <div className="text-sm text-slate-400">Automated Processes</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-purple-400 mb-1">98%</div>
                    <div className="text-sm text-slate-400">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-indigo-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-400">Operation Time</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-green-400 mb-1">80%</div>
                    <div className="text-sm text-slate-400">Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-blue-500/30 to-indigo-500/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <img
                      src="/WhatsApp Görsel 2025-11-19 saat 16.02.34_0a2475f5.jpg"
                      alt="Premium Automation Solution"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
