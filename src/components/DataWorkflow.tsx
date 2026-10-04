import React, { useState } from 'react';
import { 
  Database, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  Lightbulb, 
  Cpu, 
  ArrowRight, 
  Terminal, 
  Activity 
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const DataWorkflow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons: Record<string, React.ElementType> = {
    '01': Database,
    '02': Sparkles,
    '03': TrendingUp,
    '04': BarChart3,
    '05': Lightbulb,
    '06': Cpu
  };

  const currentStep = WORKFLOW_STEPS[activeStepIndex];
  const StepIcon = stepIcons[currentStep.step] || Database;

  // Visual simulation for each step
  const stepVisuals: Record<string, { label: string; code: string; outcome: string }> = {
    '01': {
      label: 'Data Intake & Schema Audit',
      code: 'RAW_INGEST: Source files (CSV / SQL database / REST inputs) loaded.\nSCHEMA_CHECK: Types, column definitions, and null ratios profiled.',
      outcome: 'Clear problem definition & verified ingestion boundary'
    },
    '02': {
      label: 'Normalization & Integrity Validation',
      code: 'DATA_CLEAN: Imputing missing values, removing duplicates.\nVALIDATION: Format standardization, type conversion, and outlier inspection.',
      outcome: 'Structured, reliable dataset ready for exploratory math'
    },
    '03': {
      label: 'Statistical & Exploratory Data Analysis',
      code: 'EDA_PIPELINE: Groupings, descriptive stats, distribution curves.\nCORRELATIONS: Identifying key variable relationships & feature behavior.',
      outcome: 'Quantifiable trends and anomalies identified'
    },
    '04': {
      label: 'Dashboard Design & DAX Modeling',
      code: 'POWER_BI: DAX filter measures, dynamic slicers, KPI cards.\nVISUAL_HIERARCHY: Bar charts, trendlines, and intuitive color mappings.',
      outcome: 'Clear visual dashboards accessible to decision-makers'
    },
    '05': {
      label: 'Pattern Synthesis & Strategic Conclusions',
      code: 'SYNTHESIS: Translating statistical signals into operational insights.\nACTIONABILITY: Clear answers to primary research and business questions.',
      outcome: 'Data-driven conclusions with practical business value'
    },
    '06': {
      label: 'AI Automation & REST API Deployment',
      code: 'AUTOMATION: FastAPI endpoints connected to data modules.\nAI_WORKFLOW: Integrating intelligent tools for ongoing task execution.',
      outcome: 'Automated, reproducible technology-driven solutions'
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>METHODOLOGY &amp; PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work With Data
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded mt-2"></div>
          <p className="text-slate-400 text-sm mt-3 max-w-xl">
            A disciplined, end-to-end framework transforming raw data into reliable insights and automated technology solutions.
          </p>
        </div>

        {/* Step Progression Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;
            const Icon = stepIcons[step.step] || Database;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-900/40 border-white/10 hover:border-cyan-500/30 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {step.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isCurrent ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <div className={`text-xs font-bold font-mono tracking-wider ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {step.description}
                  </div>
                </div>

                {isCurrent && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Console for Selected Step */}
        <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Description & Mission */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400">
                    STAGE {currentStep.step} OF 06
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <div className="text-base font-semibold text-cyan-300">
                &ldquo;{currentStep.description}&rdquo;
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {currentStep.details}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Deliverable:</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-300 text-xs font-mono border border-emerald-500/20">
                  {stepVisuals[currentStep.step]?.outcome}
                </span>
              </div>
            </div>

            {/* Right: Technical Terminal / Code Metaphor */}
            <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-white/10 p-5 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-200">{stepVisuals[currentStep.step]?.label}</span>
                </div>
                <span className="text-[10px] text-cyan-400">ACTIVE PIPELINE</span>
              </div>

              <pre className="text-slate-300 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                <code>{stepVisuals[currentStep.step]?.code}</code>
              </pre>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span>Phase Progression: Step {currentStep.step} / 06</span>
                <button
                  onClick={() => setActiveStepIndex((activeStepIndex + 1) % WORKFLOW_STEPS.length)}
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
