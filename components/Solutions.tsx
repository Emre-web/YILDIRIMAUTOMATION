
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const solutions = [
  {
    title: {
      en: "Automate repetitive back-office operations",
      tr: "Tekrarlayan back-office operasyonlarını otomatikleştirin"
    },
    description: {
      en: "Replace hundreds of manual hours with stable, error-free automated workflows.",
      tr: "Yüzlerce manuel saati stabil, hatasız otomatik iş akışlarıyla değiştirin."
    },
    details: {
      en: "Process automation reduces errors by 95% and saves 40+ hours weekly per employee.",
      tr: "Süreç otomasyonu hataları %95 azaltır ve çalışan başına haftada 40+ saat tasarruf sağlar."
    }
  },
  {
    title: {
      en: "Extract business-critical data from websites",
      tr: "Web sitelerinden iş kritik verileri çıkarın"
    },
    description: {
      en: 'Build tailored automation tools when off-the-shelf solutions fall short.',
      tr: 'Hazır araçların yetersiz kaldığı durumlarda özel otomasyon araçları geliştiririz.'
    },
    details: {
      en: ['Python scripting', 'API integrations', 'Custom UI development', 'Database design'],
      tr: ['Python scriptleme', 'API entegrasyonları', 'Özel UI geliştirme', 'Veritabanı tasarımı']
    }
  },
  {
    title: {
      en: 'Integration & Deployment',
      tr: 'Entegrasyon ve Dağıtım'
    },
    description: {
      en: 'Seamlessly connect new solutions with existing business systems.',
      tr: 'Yeni çözümleri mevcut iş sistemleriyle sorunsuz birleştiririz.'
    },
    details: {
      en: ['ERP/CRM connections', 'API development', 'Cloud deployment', 'Real-time monitoring'],
      tr: ['ERP/CRM bağlantıları', 'API geliştirme', 'Bulut dağıtımı', 'Gerçek zamanlı izleme']
    }
  }
];

export const SolutionsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { language, t } = useLanguage();

  return (
    <section id="solutions" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">{t.builtForBusiness}</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t.solutionsDesc}
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative pl-12 md:pl-16 pb-12 border-l border-slate-800 last:border-0 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500 ring-4 ring-purple-500/10 group-hover:scale-150 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 group-hover:text-purple-400 transition-colors">
                    {item.title[language]}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-3">
                    {item.description[language]}
                  </p>
                  
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      expandedIndex === idx ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="text-purple-400 text-sm leading-relaxed list-disc pl-4">
                      {Array.isArray(item.details[language]) ? item.details[language].map((detail, index) => (
                        <li key={index}>{detail}</li>
                      )) : item.details[language]}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
