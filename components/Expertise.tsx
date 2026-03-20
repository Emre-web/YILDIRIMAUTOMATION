import React, { useState } from 'react';
import { Globe, Bot, Workflow, FileText, Monitor, Database, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const expertises = {
  en: [
    {
      title: 'Back-Office Automation',
      description: 'Replace hundreds of manual hours with stable, error-free automated workflows.',
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
      tools: ['Process Analysis', 'Workflow Design', 'Error Handling', 'Deployment'],
      details: [
        'Detailed process discovery and documentation',
        'Custom workflow automation using Python and RPA tools',
        'Integration with existing business systems (ERP, CRM, etc.)',
        'Automated error handling and notification systems',
        'Performance monitoring and optimization',
        'Detailed reporting and analytics'
      ]
    },
    {
      title: 'Document Understanding',
      description: 'Transform unstructured documents into structured data using AI-powered document processing.',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      tools: ['OCR', 'NLP', 'GPT Vision', 'LayoutLM'],
      details: [
        'OCR and text extraction from scanned documents',
        'Invoice and receipt data extraction',
        'Contract analysis and clause identification',
        'Table detection and data extraction',
        'Handwriting recognition and processing',
        'Multi-language document support',
        'Document classification and routing',
        'Integration with RPA and workflow systems'
      ]
    },
    {
      title: 'Web Data Extraction',
      description: 'Build robust crawlers that handle IP rotation, CAPTCHAs, and dynamic rendering.',
      icon: <Globe className="w-6 h-6 text-green-400" />,
      tools: ['Playwright', 'Selenium', 'Scrapy', 'Proxy Management'],
      details: [
        'Custom web scrapers for any website',
        'Handling JavaScript-rendered content',
        'IP rotation and proxy management',
        'CAPTCHA solving integration',
        'Structured data extraction and cleaning',
        'Automated data delivery to databases or APIs'
      ]
    },
    {
      title: 'Excel Automation',
      description: 'Transform complex spreadsheet tasks into streamlined, one-click automated pipelines.',
      icon: <FileText className="w-6 h-6 text-green-400" />,
      tools: ['OpenPyXL', 'Pandas', 'VBA Scripting', 'Data Validation'],
      details: [
        'Automated data entry and formatting',
        'Complex formula generation and optimization',
        'Chart and report generation',
        'Data validation and error checking',
        'Integration with external data sources',
        'Batch processing of multiple files'
      ]
    },
    {
      title: 'Enterprise RPA',
      description: 'Integrate high-level business process management with standard corporate software.',
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      tools: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Process Mining'],
      details: [
        'Enterprise-grade RPA implementation',
        'Integration with SAP, Oracle, and other ERP systems',
        'Process mining and optimization',
        'Digital workforce management',
        'Compliance and audit trail automation',
        'Scalable automation across departments'
      ]
    },
    {
      title: 'n8n & AI Automation',
      description: 'Build intelligent workflows using n8n and AI-powered automation platforms.',
      icon: <Bot className="w-6 h-6 text-orange-400" />,
      tools: ['n8n', 'Zapier', 'Make', 'AI Integration'],
      details: [
        'Visual workflow building with n8n',
        'AI-powered decision making and processing',
        'Multi-platform integration capabilities',
        'Custom node development',
        'Real-time data synchronization',
        'Intelligent automation with machine learning'
      ]
    }
  ],
  tr: [
    {
      title: 'Back-Office Otomasyonu',
      description: 'Yüzlerce manuel saati stabil, hatasız otomatik iş akışlarıyla değiştirin.',
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
      tools: ['Süreç Analizi', 'İş Akışı Tasarımı', 'Hata Yönetimi', 'Dağıtım'],
      details: [
        'Detaylı süreç keşfi ve dokümantasyon',
        'Python ve RPA araçları ile özel iş akışı otomasyonu',
        'Mevcut iş sistemleriyle entegrasyon (ERP, CRM, vb.)',
        'Otomatik hata yönetimi ve bildirim sistemleri',
        'Performans izleme ve optimizasyon',
        'Detaylı raporlama ve analiz'
      ]
    },
    {
      title: 'Document Understanding',
      description: 'AI destekli belge işleme kullanarak yapılandırılmamış belgeleri yapılandırılmış verilere dönüştürün.',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      tools: ['OCR', 'NLP', 'GPT Vision', 'LayoutLM'],
      details: [
        'Taranmış belgelerden OCR ve metin çıkarma',
        'Fatura ve makbuz veri çıkarma',
        'Sözleşme analizi ve madde tespiti',
        'Tablo tespiti ve veri çıkarma',
        'El yazısı tanıma ve işleme',
        'Çok dilli belge desteği',
        'Belge sınıflandırma ve yönlendirme',
        'RPA ve iş akışı sistemleriyle entegrasyon'
      ]
    },
    {
      title: 'Web Veri Çıkarma',
      description: 'IP rotasyonu, CAPTCHA ve dinamik rendering işleyen sağlam crawlerlar oluşturun.',
      icon: <Globe className="w-6 h-6 text-green-400" />,
      tools: ['Playwright', 'Selenium', 'Scrapy', 'Proxy Yönetimi'],
      details: [
        'Her web sitesi için özel web kazıyıcılar',
        'JavaScript tarafından oluşturulan içeriğin işlenmesi',
        'IP rotasyonu ve proxy yönetimi',
        'CAPTCHA çözümleme entegrasyonu',
        'Yapılandırılmış veri çıkarma ve temizleme',
        'Veritabanlarına veya API\'lere otomatik veri teslimatı'
      ]
    },
    {
      title: 'Excel Otomasyonu',
      description: 'Karmaşık e-tablo görevlerini akıllı, tek tıklamalı otomatik pipelinelara dönüştürün.',
      icon: <FileText className="w-6 h-6 text-green-400" />,
      tools: ['OpenPyXL', 'Pandas', 'VBA Scripting', 'Veri Doğrulama'],
      details: [
        'Otomatik veri girişi ve formatlama',
        'Karmaşık formül oluşturma ve optimizasyon',
        'Grafik ve rapor oluşturma',
        'Veri doğrulama ve hata kontrolü',
        'Harici veri kaynaklarıyla entegrasyon',
        'Birden fazla dosyanın toplu işlenmesi'
      ]
    },
    {
      title: 'Kurumsal RPA',
      description: 'Yüksek seviye iş süreci yönetimini standart kurumsal yazılımlarla entegre edin.',
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      tools: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Süreç Madenciliği'],
      details: [
        'Kurumsal düzeyde RPA implementasyonu',
        'SAP, Oracle ve diğer ERP sistemleriyle entegrasyon',
        'Süreç madenciliği ve optimizasyon',
        'Dijital iş gücü yönetimi',
        'Uyumluluk ve denetim izi otomasyonu',
        'Departmanlar arasında ölçeklenebilir otomasyon'
      ]
    },
    {
      title: 'n8n & AI Otomasyonu',
      description: 'n8n ve AI destekli otomasyon platformlarını kullanarak akıllı iş akışları oluşturun.',
      icon: <Bot className="w-6 h-6 text-orange-400" />,
      tools: ['n8n', 'Zapier', 'Make', 'AI Entegrasyonu'],
      details: [
        'n8n ile görsel iş akışı oluşturma',
        'AI destekli karar verme ve işleme',
        'Çoklu platform entegrasyon yetenekleri',
        'Özel node geliştirme',
        'Gerçek zamanlı veri senkronizasyonu',
        'Makine öğrenmesi ile akıllı otomasyon'
      ]
    }
  ]
};

const ServiceCard: React.FC<{ item: typeof expertises.en[0]; cardIndex: number }> = ({ item, cardIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div 
      className={`glass-card p-8 rounded-2xl group transition-all duration-300 ${
        isExpanded ? 'border border-blue-500/30 shadow-lg shadow-blue-500/10' : 'border border-white/5 hover:border-blue-500/10'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <button 
            onClick={() => isClient && setIsExpanded(!isExpanded)}
            className="text-slate-500 hover:text-blue-400 transition-colors p-2 -mt-2 -mr-2"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tools.map((tool, tidx) => (
            <span key={tidx} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-400">
              {tool}
            </span>
          ))}
        </div>
        
        <div 
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/5 pt-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-3">IMPLEMENTATION DETAILS</h4>
            <ul className="space-y-2">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-slate-400 text-sm">{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/5">
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Request a free consultation
              </a>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => isClient && setIsExpanded(!isExpanded)}
          className="mt-auto pt-4 text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          {isClient && (
            <svg 
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export const Expertise: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">{t.automationServices}</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.customAutomationSolutions}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises[language].map((item, idx) => (
            <ServiceCard key={idx} item={item} cardIndex={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
