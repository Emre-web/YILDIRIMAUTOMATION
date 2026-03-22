import React, { useState } from 'react';
import { Globe, Bot, Workflow, FileText, Monitor, ChevronDown, ChevronUp } from 'lucide-react';
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

const ServiceCard: React.FC<{ item: any; cardIndex: number }> = ({ item, cardIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();

  return (
    <div 
      style={{
        background: 'rgba(30,41,59,0.5)',
        border: `1px solid ${isExpanded ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '1rem',
        padding: '2rem',
        transition: 'all 0.3s ease',
        boxShadow: isExpanded ? '0 10px 15px -3px rgba(59,130,246,0.1)' : 'none'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ 
            width: '3rem', 
            height: '3rem', 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            borderRadius: '0.75rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '1.5rem' 
          }}>
            {item.icon}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              color: isExpanded ? '#60a5fa' : '#94a3b8',
              cursor: 'pointer',
              background: 'none',
              border: 'none'
            }}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#f8fafc' }}>
          {item.title}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.625', marginBottom: '1.5rem' }}>
          {item.description}
        </p>
        
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#cbd5e1' }}>
            {language === 'en' ? 'Tools & Technologies:' : 'Araçlar & Teknolojiler:'}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {item.tools.map((tool, toolIdx) => (
              <span key={toolIdx} style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                color: '#94a3b8'
              }}>{tool}</span>
            ))}
          </div>
        </div>

        <div style={{
          transition: 'all 0.4s ease-in-out',
          maxHeight: isExpanded ? '500px' : '0',
          opacity: isExpanded ? '1' : '0',
          overflow: 'hidden'
        }}>
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#60a5fa', letterSpacing: '0.05em' }}>
              {language === 'en' ? 'IMPLEMENTATION DETAILS' : 'UYGULAMA DETAYLARI'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {item.details.map((detail, idx) => (
                <li key={idx} style={{ display: 'flex', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                  <span style={{ color: '#60a5fa', marginRight: '0.5rem' }}>•</span>
                  {detail}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="#contact" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500' }}>
                {language === 'en' ? 'Request a free consultation →' : 'Ücretsiz danışmanlık talep edin →'}
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginTop: '1.5rem',
            background: 'none',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.875rem',
            padding: 0
          }}
        >
          {isExpanded ? (language === 'en' ? 'Show less' : 'Daha az göster') : (language === 'en' ? 'Learn more' : 'Detayları gör')}
          <ChevronDown style={{ 
            marginLeft: '0.25rem', 
            width: '1rem', 
            transition: 'transform 0.3s',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' 
          }} />
        </button>
      </div>
    </div>
  );
};

export const Expertise: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="expertise" className="py-24 px-6" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#f8fafc', fontFamily: 'inherit' }}>
            {t.automationServices}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.customAutomationSolutions}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises[language].map((item, idx) => (
            <ServiceCard key={idx} item={item} cardIndex={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
