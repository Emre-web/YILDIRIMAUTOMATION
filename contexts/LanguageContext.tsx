import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface Translations {
  en: {
    // Navigation
    expertise: string;
    stack: string;
    solutions: string;
    contact: string;
    hireMe: string;
    
    // Hero
    availableForProjects: string;
    iBuild: string;
    thatWorks247: string;
    viewExpertise: string;
    heroDescription: string;
    startAutomationJourney: string;
    heroTitle: string;
    heroSubtitle: string;
    
    // Expertise
    automationServices: string;
    customAutomationSolutions: string;
    learnMore: string;
    showLess: string;
    requestConsultation: string;
    
    // Services
    backOfficeAutomation: string;
    backOfficeDesc: string;
    webDataExtraction: string;
    webDataDesc: string;
    excelAutomation: string;
    excelDesc: string;
    enterpriseRPA: string;
    enterpriseDesc: string;
    n8nAIAutomation: string;
    n8nDesc: string;
    customAutomation: string;
    customDesc: string;
    
    // Solutions
    builtForBusiness: string;
    solutionsDesc: string;
    showDetails: string;
    hideDetails: string;
    
    // Contact
    readyToAutomate: string;
    automate: string;
    contactDesc: string;
    getInTouch: string;
    getInTouchDesc: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    sendMessage: string;
    sending: string;
    
    // Footer
    allRightsReserved: string;
    
    // Showcase
    enterpriseGradeAutomation: string;
    enterpriseGradeDesc: string;
    
    // CTA
    haveProcessToAutomate: string;
    ctaDescription: string;
    contactForAutomation: string;
  };
  
  tr: {
    // Navigation
    expertise: string;
    stack: string;
    solutions: string;
    contact: string;
    hireMe: string;
    
    // Hero
    availableForProjects: string;
    iBuild: string;
    thatWorks247: string;
    viewExpertise: string;
    heroDescription: string;
    startAutomationJourney: string;
    heroTitle: string;
    heroSubtitle: string;
    
    // Expertise
    automationServices: string;
    customAutomationSolutions: string;
    learnMore: string;
    showLess: string;
    requestConsultation: string;
    
    // Services
    backOfficeAutomation: string;
    backOfficeDesc: string;
    webDataExtraction: string;
    webDataDesc: string;
    excelAutomation: string;
    excelDesc: string;
    enterpriseRPA: string;
    enterpriseDesc: string;
    n8nAIAutomation: string;
    n8nDesc: string;
    customAutomation: string;
    customDesc: string;
    
    // Solutions
    builtForBusiness: string;
    solutionsDesc: string;
    showDetails: string;
    hideDetails: string;
    
    // Contact
    readyToAutomate: string;
    automate: string;
    contactDesc: string;
    getInTouch: string;
    getInTouchDesc: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    sendMessage: string;
    sending: string;
    
    // Footer
    allRightsReserved: string;
    
    // Showcase
    enterpriseGradeAutomation: string;
    enterpriseGradeDesc: string;
    
    // CTA
    haveProcessToAutomate: string;
    ctaDescription: string;
    contactForAutomation: string;
  };
}

const translations: Translations = {
  en: {
    expertise: 'Expertise',
    stack: 'Stack',
    solutions: 'Solutions',
    contact: 'Contact',
    hireMe: "Let's Automate",
    availableForProjects: 'Professional RPA & Automation Developer - Available for Projects',
    iBuild: 'I Build',
    thatWorks247: 'That Works 24/7',
    viewExpertise: 'View Expertise',
    heroDescription: "I transform complex business processes into intelligent automated workflows that save time and eliminate errors.",
    startAutomationJourney: "Start Your Automation Journey",
    heroTitle: "Independent RPA & Automation Specialist.",
    heroSubtitle: "I help businesses automate repetitive tasks, extract valuable data, and optimize workflows - delivering custom solutions tailored to your unique needs.",
    automationServices: 'Automation Services',
    customAutomationSolutions: 'Custom automation solutions designed to streamline your business processes and boost efficiency.',
    learnMore: 'Learn more',
    showLess: 'Show less',
    requestConsultation: 'Request a free consultation',
    backOfficeAutomation: 'Back-Office Automation',
    backOfficeDesc: 'Replace hundreds of manual hours with stable, error-free automated workflows.',
    webDataExtraction: 'Web Data Extraction',
    webDataDesc: 'Build robust crawlers that handle IP rotation, CAPTCHAs, and dynamic rendering.',
    excelAutomation: 'Excel Automation',
    excelDesc: 'Transform complex spreadsheet tasks into streamlined, one-click automated pipelines.',
    enterpriseRPA: 'Enterprise RPA',
    enterpriseDesc: 'Integrate high-level business process management with standard corporate software.',
    n8nAIAutomation: 'n8n & AI Automation',
    n8nDesc: 'Build intelligent workflows using n8n and AI-powered automation platforms.',
    customAutomation: 'Custom Automation',
    customDesc: 'Tailored solutions for your specific business challenges and bottlenecks.',
    builtForBusiness: 'Built for Business Outcomes',
    solutionsDesc: 'I don\'t just write code; I design systems that translate directly into ROI and operational efficiency.',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    readyToAutomate: 'Ready to',
    automate: 'Automate',
    contactDesc: 'Let\'s discuss how automation can transform your business processes and boost productivity.',
    getInTouch: 'Get in Touch',
    getInTouchDesc: 'Have a project in mind or want to discuss how automation can help your business? Get in touch and I\'ll get back to you as soon as possible.',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    allRightsReserved: 'All rights reserved',
    
    // Showcase
    enterpriseGradeAutomation: 'Enterprise-Grade Automation',
    enterpriseGradeDesc: 'Our advanced automation solutions leverage the latest technologies to streamline your workflows, reduce operational costs, and increase productivity. From simple task automation to complex business process optimization, we deliver results that matter.',
    
    // CTA
    haveProcessToAutomate: 'Have a process you want to automate?',
    ctaDescription: 'Stop fighting manual tasks. Let\'s turn your complex workflows into reliable, scalable automation solutions.',
    contactForAutomation: 'Contact for Automation'
  },
  tr: {
    expertise: 'Uzmanlık',
    stack: 'Teknoloji',
    solutions: 'Çözümler',
    contact: 'İletişim',
    hireMe: "Otomasyon Yapalım",
    availableForProjects: 'Profesyonel RPA & Otomasyon Geliştirici - Projeler İçin Uygun',
    iBuild: 'Geliştirdiğim',
    thatWorks247: '7/24 Çalışan',
    viewExpertise: 'Uzmanlığımı Gör',
    heroDescription: "Karmaşık iş süreçlerini zaman kazandıran ve hataları ortadan kaldıran akıllı otomatik iş akışlarına dönüştürüyorum.",
    startAutomationJourney: "Otomasyon Yolculuğunuzu Başlatın",
    heroTitle: "Bağımsız RPA & Otomasyon Uzmanı.",
    heroSubtitle: "İşletmelerin tekrarlayan görevleri otomatikleştirmesine, değerli verileri çıkarmasına ve iş akışlarını optimize etmesine yardımcı oluyorum - benzersiz ihtiyaçlarınıza özel çözümler sunuyorum.",
    automationServices: 'Otomasyon Hizmetleri',
    customAutomationSolutions: 'İş süreçlerinizi kolaylaştırmak ve verimliliği artırmak için özel otomasyon çözümleri.',
    learnMore: 'Daha fazla',
    showLess: 'Daha az',
    requestConsultation: 'Ücretsiz danışmanlık iste',
    backOfficeAutomation: 'Back-Office Otomasyonu',
    backOfficeDesc: 'Yüzlerce manuel saati stabil, hatasız otomatik iş akışlarıyla değiştirin.',
    webDataExtraction: 'Web Veri Çıkarma',
    webDataDesc: 'IP rotasyonu, CAPTCHA ve dinamik rendering işleyen sağlam crawlerlar oluşturun.',
    excelAutomation: 'Excel Otomasyonu',
    excelDesc: 'Karmaşık e-tablo görevlerini akıllı, tek tıklamalı otomatik pipelinelara dönüştürün.',
    enterpriseRPA: 'Kurumsal RPA',
    enterpriseDesc: 'Yüksek seviye iş süreci yönetimini standart kurumsal yazılımlarla entegre edin.',
    n8nAIAutomation: 'n8n & AI Otomasyonu',
    n8nDesc: 'n8n ve AI destekli otomasyon platformlarını kullanarak akıllı iş akışları oluşturun.',
    customAutomation: 'Özel Otomasyon',
    customDesc: 'Spesifik iş zorluklarınız ve darboğazlarınız için özel çözümler.',
    builtForBusiness: 'İş Sonuçları İçin',
    solutionsDesc: 'Sadece kod yazmıyorum; doğrudan yatırım getirisi ve operasyonel verimlilik sağlayan sistemler tasarlıyorum.',
    showDetails: 'Detayları göster',
    hideDetails: 'Detayları gizle',
    readyToAutomate: 'Hazır mısınız',
    automate: 'Otomasyon Yapmaya',
    contactDesc: 'Otomasyonun iş süreçlerinizi nasıl dönüştürebileceğini ve verimliliği nasıl artırabileceğini tartışalım.',
    getInTouch: 'İletişime Geçin',
    getInTouchDesc: 'Aklınızda bir proje mi var yoksa otomasyonun işinize nasıl yardımcı olabileceğini mi tartışmak istiyorsunuz? İletişime geçin ve en kısa sürede size döneceğim.',
    yourName: 'Adınız',
    yourEmail: 'E-posta Adresiniz',
    yourMessage: 'Mesajınız',
    sendMessage: 'Mesaj Gönder',
    sending: 'Gönderiliyor...',
    allRightsReserved: 'Tüm hakları saklıdır',
    
    // Showcase
    enterpriseGradeAutomation: 'Kurumsal Seviye Otomasyon',
    enterpriseGradeDesc: 'Gelişmiş otomasyon çözümlerimiz, iş akışlarınızı kolaylaştırmak, operasyonel maliyetleri azaltmak ve üretkenliği artırmak için en son teknolojileri kullanır. Basit görev otomasyonundan karmaşık iş süreci optimizasyonuna kadar, önemli sonuçlar sunarız.',
    
    // CTA
    haveProcessToAutomate: 'Otomatikleştirmek istediğiniz bir süreç var mı?',
    ctaDescription: 'Manuel görevlerle savaşmayı bırakın. Karmaşık iş akışlarınızı güvenilir, ölçeklenebilir otomasyon çözümlerine dönüştürelim.',
    contactForAutomation: 'Otomasyon İçin İletişim'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en | typeof translations.tr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
