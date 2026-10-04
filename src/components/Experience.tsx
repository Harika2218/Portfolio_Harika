import React, { useState } from 'react';
import { 
  Briefcase, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Network, 
  Bot, 
  Sliders, 
  Server, 
  Users, 
  Calendar, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Workflow 
} from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [activeHardwareNode, setActiveHardwareNode] = useState<string>('Python');

  const exp1 = EXPERIENCES_DATA[0];
  const exp2 = EXPERIENCES_DATA[1];

  const moduleDetails = [
    { name: 'Employees', icon: Users, desc: 'Centralized directory for 200 synthetic personnel profiles, role structures, and departmental allocations.' },
    { name: 'Attendance', icon: Clock, desc: 'Daily log aggregation, clock-in tracking, shift metrics, and automated anomaly flags.' },
    { name: 'Leave', icon: Calendar, desc: 'Structured leave application lifecycle, accrual tracking, and quota management rules.' },
    { name: 'Payroll', icon: DollarSign, desc: 'Data-driven compensation computation, deduction formulas, and salary statement generation.' },
    { name: 'Performance', icon: TrendingUp, desc: 'KPI tracking, productivity indicators, and periodic evaluation matrices.' },
    { name: 'Workforce Planning', icon: Workflow, desc: 'Capacity forecasting, resource utilization mapping, and departmental staffing analysis.' },
  ];

  const techStackNodes = [
    { id: 'Python', role: 'Software Core', desc: 'Core logic, data manipulation, algorithm execution, and API integration.', icon: Cpu },
    { id: 'AI Tools', role: 'Accelerated Prototyping', desc: 'Vibe coding patterns, AI-assisted development tools, and workflow automation.', icon: Bot },
    { id: 'Arduino', role: 'Microcontroller Hardware', desc: 'Hardware input sensing, actuator control, and low-level physical computing.', icon: Sliders },
    { id: 'Raspberry Pi', role: 'Edge Computing', desc: 'Embedded computing node, hardware interfacing, and networked IoT services.', icon: Server }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded mt-2"></div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 md:pl-8 space-y-16">
          {/* Vertical continuous line */}
          <div className="absolute left-[11px] md:left-[15px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500/20"></div>

          {/* ============================================================== */}
          {/* EXPERIENCE 01: Infosys Springboard Internship 7.0 */}
          {/* ============================================================== */}
          <div className="relative">
            {/* Timeline node dot */}
            <div className="absolute -left-[27px] md:-left-[35px] top-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#08090d] border-2 border-cyan-400 shadow-md shadow-cyan-500/40">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
                    <span>{exp1.period}</span>
                    <span>•</span>
                    <span>Agile Methodology</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp1.company}
                  </h3>
                  <div className="text-base text-cyan-300 font-medium">
                    Role: {exp1.role}
                  </div>
                </div>

                {/* Explicitly supported 200 synthetic employees badge */}
                <div className="px-3.5 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-2 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>200 Synthetic Employees System</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-8">
                {exp1.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Visual representation of workforce management system */}
              <div className="bg-slate-950/80 rounded-xl p-5 sm:p-6 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-200">
                      Workforce Management System Flow
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">
                    Click module to inspect data role
                  </span>
                </div>

                {/* 6 Step Flow: Employees → Attendance → Leave → Payroll → Performance → Workforce Planning */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                  {moduleDetails.map((mod, idx) => {
                    const isSelected = activeModule === idx;
                    const Icon = mod.icon;
                    return (
                      <button
                        key={mod.name}
                        onClick={() => setActiveModule(idx)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 shadow-md shadow-cyan-950'
                            : 'bg-slate-900/60 border-white/5 hover:border-cyan-500/30 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                          <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                        </div>
                        <div className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {mod.name}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active module details callout */}
                <div className="mt-4 p-3.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-mono text-cyan-400 font-semibold">
                      Module 0{activeModule + 1} — {moduleDetails[activeModule].name}:
                    </span>{' '}
                    <span className="text-slate-300">
                      {moduleDetails[activeModule].desc}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 whitespace-nowrap">
                    FastAPI REST Connected
                  </span>
                </div>

                {/* Technology tags */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                  {exp1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* EXPERIENCE 02: AatonovaZ Technologies Private Limited */}
          {/* ============================================================== */}
          <div className="relative">
            {/* Timeline node dot */}
            <div className="absolute -left-[27px] md:-left-[35px] top-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#08090d] border-2 border-purple-400 shadow-md shadow-purple-500/40">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
                    <span>{exp2.period}</span>
                    <span>•</span>
                    <span>Emerging Tech &amp; Hardware</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp2.company}
                  </h3>
                  <div className="text-base text-purple-300 font-medium">
                    Role: {exp2.role}
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 text-xs font-mono">
                  Software + AI + Hardware
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-8">
                {exp2.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Visual concept: Software + AI + Hardware with animated connections */}
              <div className="bg-slate-950/80 rounded-xl p-5 sm:p-6 border border-white/10">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-200">
                      Visual Architecture: Software + AI + Hardware Interconnect
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-400">
                    Prototyping Framework
                  </span>
                </div>

                {/* 4 Interactive Connected Technology Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {techStackNodes.map((node) => {
                    const isSelected = activeHardwareNode === node.id;
                    const Icon = node.icon;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveHardwareNode(node.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-purple-950/40 border-purple-400 shadow-md shadow-purple-950'
                            : 'bg-slate-900/60 border-white/5 hover:border-purple-500/30 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">Component</span>
                        </div>
                        <div className="text-sm font-bold text-white">{node.id}</div>
                        <div className="text-xs text-purple-300 mt-0.5">{node.role}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Node Details */}
                <div className="mt-4 p-3.5 rounded-lg bg-slate-900/90 border border-purple-500/20 text-xs font-mono">
                  <span className="text-purple-400 font-semibold">{activeHardwareNode}:</span>{' '}
                  <span className="text-slate-300">
                    {techStackNodes.find((n) => n.id === activeHardwareNode)?.desc}
                  </span>
                </div>

                {/* Technology tags */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                  {exp2.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
