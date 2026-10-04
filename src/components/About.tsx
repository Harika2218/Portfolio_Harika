import React, { useState } from 'react';
import { 
  Database, 
  Filter, 
  LineChart, 
  PieChart, 
  Lightbulb, 
  Cpu, 
  CheckCircle2, 
  GraduationCap,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(2);

  const focusStages = [
    {
      id: 'data',
      name: 'DATA',
      label: 'Ingestion & Raw Extraction',
      description: 'Understanding problem statements, locating data sources, and examining structural schema.',
      tools: 'SQL, Raw Datasets, APIs',
      icon: Database,
      color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
      id: 'clean',
      name: 'CLEAN',
      label: 'Preparation & Validation',
      description: 'Handling missing fields, resolving inconsistencies, data standardization, and type casting.',
      tools: 'Excel, Pandas, Data Cleaning',
      icon: Filter,
      color: 'from-cyan-500/20 to-teal-500/20 text-teal-300 border-teal-500/30'
    },
    {
      id: 'analyze',
      name: 'ANALYZE',
      label: 'Exploratory & Statistical Analysis',
      description: 'Investigating correlations, statistical distributions, summary statistics, and segmentations.',
      tools: 'Python, Pandas, Statistics',
      icon: LineChart,
      color: 'from-teal-500/20 to-emerald-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      id: 'visualize',
      name: 'VISUALIZE',
      label: 'Dynamic Dashboards & Reporting',
      description: 'Crafting clear, intuitive dashboards with interactive filters, DAX measures, and visual hierarchy.',
      tools: 'Power BI, Matplotlib, Seaborn',
      icon: PieChart,
      color: 'from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30'
    },
    {
      id: 'insight',
      name: 'INSIGHT',
      label: 'Pattern Identification',
      description: 'Distilling complex analytical findings into actionable strategic and operational insights.',
      tools: 'Business Communication, EDA',
      icon: Lightbulb,
      color: 'from-purple-500/20 to-fuchsia-500/20 text-purple-300 border-purple-500/30'
    },
    {
      id: 'automate',
      name: 'AUTOMATE',
      label: 'Practical AI & System Workflows',
      description: 'Transforming analytical findings into operational systems via FastAPI REST endpoints and AI tools.',
      tools: 'FastAPI, n8n, AI Tools, Python',
      icon: Cpu,
      color: 'from-fuchsia-500/20 to-rose-500/20 text-pink-300 border-pink-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            <span>BACKGROUND &amp; APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded mt-2"></div>
        </div>

        {/* Split Layout: Left Narrative / Right Focus Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="glass-panel rounded-2xl p-7 relative border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">
                Turning data into insights and ideas into practical technology.
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I am a Computer Science undergraduate specializing in Data Science at Mohan Babu University (2024–2028). My work bridges analytical inquiry with practical technology development.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                Rather than treating data analysis as static reporting, I focus on the entire lifecycle: from cleaning datasets and performing exploratory data analysis to architecting dynamic Power BI dashboards and automating operational workflows with FastAPI and AI-powered tools.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                With hands-on experience developing an AI-Powered Workforce Management Automation System during my Infosys Springboard internship and exploring IoT/AI integration at AatonovaZ Technologies, I focus on building functional, reliable solutions.
              </p>
            </div>

            {/* Core Interest Areas */}
            <div className="bg-slate-900/40 rounded-xl p-5 border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Primary Interests &amp; Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Education Highlight Box */}
            <div className="glass-panel rounded-xl p-5 border border-white/5 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-indigo-400">{EDUCATION_DATA.period}</div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{EDUCATION_DATA.institution}</h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                  {EDUCATION_DATA.degree} — {EDUCATION_DATA.specialization}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focus Map */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-slate-200">
                    Visual Focus Map
                  </h3>
                  <span className="text-xs text-slate-400">
                    The progression from raw signals to automated solutions
                  </span>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded">
                  6 STAGES
                </div>
              </div>

              {/* Vertical Interactive Node Chain */}
              <div className="relative pl-6 space-y-4">
                {/* Vertical Connecting Line */}
                <div className="absolute left-[29px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-purple-500 opacity-30"></div>

                {focusStages.map((stage, idx) => {
                  const isCurrent = activeStageIndex === idx;
                  const Icon = stage.icon;
                  const isLast = idx === focusStages.length - 1;

                  return (
                    <div key={stage.id} className="relative">
                      {/* Node Trigger */}
                      <button
                        onClick={() => setActiveStageIndex(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                          isCurrent
                            ? 'bg-slate-800/90 border-cyan-500/50 shadow-md shadow-cyan-950/30'
                            : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-800/40'
                        }`}
                      >
                        {/* Node Icon Badge */}
                        <div
                          className={`relative z-10 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${stage.color} ${
                            isCurrent ? 'ring-2 ring-cyan-400/40 scale-105' : ''
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Node Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold tracking-wider text-slate-100">
                              {stage.name}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              Stage 0{idx + 1}
                            </span>
                          </div>
                          
                          <div className="text-xs text-cyan-300 font-medium mt-0.5">
                            {stage.label}
                          </div>

                          {isCurrent && (
                            <div className="mt-2.5 pt-2.5 border-t border-white/10 text-xs space-y-1.5 animate-fadeIn">
                              <p className="text-slate-300 leading-relaxed">
                                {stage.description}
                              </p>
                              <div className="text-[11px] font-mono text-slate-400 pt-1">
                                <span className="text-cyan-400">Tools:</span> {stage.tools}
                              </div>
                            </div>
                          )}
                        </div>
                      </button>

                      {/* Small Downward Indicator */}
                      {!isLast && (
                        <div className="flex justify-center -my-1 relative z-0">
                          <ArrowDown className="w-3 h-3 text-slate-600" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
