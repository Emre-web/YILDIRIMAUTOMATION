
import React, { useState } from 'react';
import { Globe, Bot, Workflow, FileText, Monitor, Database, ChevronDown, ChevronUp } from 'lucide-react';

const expertises = [
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
      'Scheduled data collection and updates'
    ]
  },
  {
    title: 'Excel Automation',
    description: 'Transform complex spreadsheet tasks into streamlined, one-click automated pipelines.',
    icon: <FileText className="w-6 h-6 text-purple-400" />,
    tools: ['Pandas', 'OpenPyXL', 'XLSX', 'CSV Processing'],
    details: [
      'Automated data processing and transformation',
      'Report generation and distribution',
      'Integration with databases and APIs',
      'Error checking and data validation',
      'Scheduled report generation',
      'User-friendly interfaces for non-technical staff'
    ]
  },
  {
    title: 'Enterprise RPA',
    description: 'Integrate high-level business process management with standard corporate software.',
    icon: <Bot className="w-6 h-6 text-indigo-400" />,
    tools: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python'],
    details: [
      'End-to-end process automation',
      'Legacy system integration',
      'AI/ML powered decision making',
      'Centralized bot orchestration',
      'Compliance and audit logging',
      'Scalable automation infrastructure'
    ]
  },
  {
    title: 'Custom Automation',
    description: 'Tailored solutions for your specific business challenges and bottlenecks.',
    icon: <Monitor className="w-6 h-6 text-teal-400" />,
    tools: ['Python', 'Node.js', 'API Development', 'System Integration'],
    details: [
      'In-depth business process analysis',
      'Custom software development',
      'API development and integration',
      'Cross-platform automation solutions',
      'Performance optimization',
      'Ongoing support and maintenance'
    ]
  },
  {
    title: 'Data Integration',
    description: 'Seamlessly connect and synchronize data across all your business applications.',
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    tools: ['ETL', 'API Integration', 'Webhooks', 'Cloud Services'],
    details: [
      'Data extraction and transformation',
      'Real-time data synchronization',
      'Cloud and on-premise integration',
      'Data quality management',
      'Custom data pipelines',
      'Monitoring and alerting'
    ]
  }
];

const ServiceCard: React.FC<{ item: typeof expertises[0] }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`glass-card p-8 rounded-2xl group transition-all duration-300 ${isExpanded ? 'border border-blue-500/30' : 'border border-white/5 hover:border-blue-500/10'}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
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
          className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 ml-1">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto pt-4 text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
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
        </button>
      </div>
    </div>
  );
};

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Automation Services
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Custom automation solutions designed to streamline your business processes and boost efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
