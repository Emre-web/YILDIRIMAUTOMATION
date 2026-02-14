
import React from 'react';

const techs = [
  { name: 'Python', color: 'hover:text-yellow-400 hover:shadow-yellow-400/20' },
  { name: 'Playwright', color: 'hover:text-green-400 hover:shadow-green-400/20' },
  { name: 'Selenium', color: 'hover:text-orange-400 hover:shadow-orange-400/20' },
  { name: 'BeautifulSoup', color: 'hover:text-blue-400 hover:shadow-blue-400/20' },
  { name: 'UiPath', color: 'hover:text-red-400 hover:shadow-red-400/20' },
  { name: 'n8n', color: 'hover:text-orange-500 hover:shadow-orange-500/20' },
  { name: 'APIs', color: 'hover:text-purple-400 hover:shadow-purple-400/20' },
  { name: 'SQL', color: 'hover:text-indigo-400 hover:shadow-indigo-400/20' },
  { name: 'Pandas', color: 'hover:text-pink-400 hover:shadow-pink-400/20' },
  { name: 'PyAutoGUI', color: 'hover:text-cyan-400 hover:shadow-cyan-400/20' },
];

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading mb-2">The Engine Room</h2>
          <p className="text-slate-500">The battle-tested technologies I use to build robust bots.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techs.map((tech, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center p-8 glass-card rounded-xl text-slate-400 transition-all duration-300 font-bold tracking-tight cursor-default ${tech.color} hover:bg-slate-800/50 hover:-translate-y-1 hover:text-white`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
