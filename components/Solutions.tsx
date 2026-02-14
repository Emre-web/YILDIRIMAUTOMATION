
import React from 'react';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "Automate repetitive back-office operations",
    description: "Replace hundreds of manual hours with stable, error-free automated workflows."
  },
  {
    title: "Extract business-critical data from websites",
    description: "Build robust crawlers that handle IP rotation, CAPTCHAs, and dynamic rendering."
  },
  {
    title: "Replace manual Excel workflows with bots",
    description: "Transform complex spreadsheet tasks into streamlined, one-click automated pipelines."
  },
  {
    title: "Enterprise RPA solutions with UiPath",
    description: "Integrate high-level business process management with standard corporate software."
  },
  {
    title: "Custom automation tailored to your process",
    description: "We analyze your specific bottlenecks and build a bespoke solution that fits perfectly."
  }
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Built for Business Outcomes</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I don't just write code; I design systems that translate directly into ROI and operational efficiency.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((item, idx) => (
            <div key={idx} className="group relative pl-12 md:pl-16 pb-12 border-l border-slate-800 last:border-0">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500 ring-4 ring-purple-500/10 group-hover:scale-150 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  <ArrowRight className="text-purple-500 w-8 h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
