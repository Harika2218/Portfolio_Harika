import React, { useState } from 'react';
import { GraduationCap, BookOpen, Calendar, Check } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const courseworkDetails: Record<string, string> = {
    'Data Structures': 'Algorithmic efficiency, tree structures, hash tables, and optimized memory complexity.',
    'Statistics': 'Descriptive & inferential statistics, hypothesis testing, distributions, and variance analysis.',
    'Operating Systems': 'Process scheduling, concurrency, system calls, and Unix-based file systems.',
    'Database Management': 'Relational schema design, normalization, ACID properties, and complex SQL joins.',
    'Advanced Excel': 'Power Query data modeling, dynamic pivot reporting, lookup logic, and analytical formulas.',
    'Data Science': 'End-to-end data lifecycle, exploratory data analysis, and predictive modeling fundamentals.',
    'Probability': 'Random variables, Bayes theorem, conditional probability, and stochastic analysis.',
    'Cloud Computing': 'Virtualization, distributed services, object storage, and foundational cloud principles.'
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded mt-2"></div>
        </div>

        {/* Education Timeline Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-9 border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & University Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                <Calendar className="w-3 h-3" />
                <span>{EDUCATION_DATA.period}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {EDUCATION_DATA.institution}
              </h3>

              <div className="text-base sm:text-lg font-semibold text-cyan-300">
                {EDUCATION_DATA.degree}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Specialization in{' '}
                <span className="text-white font-medium">Data Science</span>.
                Rigorous curriculum emphasizing computer science foundations, statistical theory, data modeling, and practical software applications.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active Undergraduate Program (2024 – 2028)</span>
              </div>
            </div>

            {/* Coursework Interactive Tag Cloud */}
            <div className="lg:col-span-6 bg-slate-950/60 rounded-xl p-5 sm:p-6 border border-white/5">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Relevant Coursework</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Click to inspect focus
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {EDUCATION_DATA.coursework.map((course) => {
                  const isSelected = selectedTag === course.name;
                  return (
                    <button
                      key={course.name}
                      onClick={() => setSelectedTag(isSelected ? null : course.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/60 shadow-sm shadow-cyan-950'
                          : 'bg-slate-900/90 text-slate-300 border border-white/10 hover:border-cyan-500/40 hover:text-white'
                      }`}
                    >
                      <span>{course.name}</span>
                      {isSelected && <Check className="w-3 h-3 text-cyan-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Coursework explanation callout */}
              <div className="mt-5 p-3.5 rounded-lg bg-slate-900/80 border border-cyan-500/20 min-h-[58px] flex items-center text-xs font-mono">
                {selectedTag ? (
                  <div>
                    <span className="text-cyan-400 font-semibold">{selectedTag}:</span>{' '}
                    <span className="text-slate-300">{courseworkDetails[selectedTag]}</span>
                  </div>
                ) : (
                  <span className="text-slate-400 italic">
                    Select any coursework tag above to see its direct application to data analysis and computational problem-solving.
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
