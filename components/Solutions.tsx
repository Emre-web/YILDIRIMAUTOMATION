
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
      en: "Build robust crawlers that handle IP rotation, CAPTCHAs, and dynamic rendering.",
      tr: "IP rotasyonu, CAPTCHA ve dinamik rendering işleyen sağlam crawlerlar oluşturun."
    },
    details: {
      en: "Automated data extraction provides real-time insights and competitive intelligence.",
      tr: "Otomatik veri çıkarma gerçek zamanlı içgörüler ve rekabet istihbaratı sağlar."
    }
  },
  {
    title: {
      en: "Replace manual Excel workflows with bots",
      tr: "Manuel Excel iş akışlarını botlarla değiştirin"
    },
    description: {
      en: "Transform complex spreadsheet tasks into streamlined, one-click automated pipelines.",
      tr: "Karmaşık e-tablo görevlerini akıllı, tek tıklamalı otomatik pipelinelara dönüştürün."
    },
    details: {
      en: "Excel automation eliminates manual data entry and reduces processing time by 80%.",
      tr: "Excel otomasyonu manuel veri girişini ortadan kaldırır ve işlem süresini %80 azaltır."
    }
  },
  {
    title: {
      en: "Enterprise RPA solutions with UiPath",
      tr: "UiPath ile kurumsal RPA çözümleri"
    },
    description: {
      en: "Integrate high-level business process management with standard corporate software.",
      tr: "Yüksek seviye iş süreci yönetimini standart kurumsal yazılımlarla entegre edin."
    },
    details: {
      en: "Enterprise RPA delivers 300% ROI within the first year through process optimization.",
      tr: "Kurumsal RPA süreç optimizasyonu ile ilk yıl içinde %300 yatırım getirisi sağlar."
    }
  },
  {
    title: {
      en: "Custom automation tailored to your process",
      tr: "Sürecinize özel otomasyon"
    },
    description: {
      en: "We analyze your specific bottlenecks and build a bespoke solution that fits perfectly.",
      tr: "Spesifik darboğazlarınızı analiz eder ve mükemmel uyum sağlayan özel bir çözüm oluştururuz."
    },
    details: {
      en: "Custom solutions address unique business challenges that off-the-shelf tools cannot solve.",
      tr: "Özel çözümler, hazır araçların çözemediği benzersiz iş zorluklarını ele alır."
    }
  }
];

export const Solutions: React.FC = () => {
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
                      <p className="text-purple-400 text-sm leading-relaxed">
                        {item.details[language]}
                      </p>
                    </div>
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
