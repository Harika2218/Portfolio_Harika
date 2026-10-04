import React from 'react';
import { Compass, LineChart, PieChart, Bot, Cloud, ArrowUpRight } from 'lucide-react';
import { CAREER_PILLARS } from '../data/portfolioData';

export const CareerDirection: React.FC = () => {
  const pillarIcons: Record<string, React.ElementType> = {
    'DATA SCIENCE': LineChart,
    'DATA VISUALIZATION': PieChart,
    'AI & AUTOMATION': Bot,
    'SOFTWARE & CLOUD': Cloud
  };

  return (
    <section id="direction" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>TRAJECTORY &amp; GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where I&apos;m Heading
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded mt-2"></div>
          
          {/* Core Message Callout */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            <span className="text-cyan-300 font-semibold">Directional Objective:</span>{' '}
            &ldquo;Building deeper expertise in Data Science, analytics, AI-powered automation, and intelligent software systems.&rdquo;
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_PILLARS.map((pillar) => {
            const Icon = pillarIcons[pillar.title] || Compass;
            return (
              <div
                key={pillar.title}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  {pillar.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
