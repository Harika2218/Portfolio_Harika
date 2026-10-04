import React, { useState } from 'react';
import { 
  LineChart, 
  BarChart2, 
  Cloud, 
  Share2, 
  Bot, 
  Users, 
  Search,
  Star,
  Terminal,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons: Record<number, React.ElementType> = {
    1: Terminal,
    2: LineChart,
    3: BarChart2,
    4: Cloud,
    5: Share2,
    6: Bot,
    7: Users
  };

  const primarySkills = [
    { name: 'Python', role: 'Data Manipulation, EDA & FastAPI REST APIs', category: 'Programming' },
    { name: 'SQL', role: 'Relational Queries, Joins, Aggregations & Extraction', category: 'Programming' },
    { name: 'Power BI', role: 'Interactive Dashboards, DAX Filters & Business Reporting', category: 'Data Visualization' },
    { name: 'Microsoft Excel', role: 'Advanced Excel, Pivot Modeling & Formulas', category: 'Data Visualization' },
    { name: 'Data Analysis', role: 'EDA, Pattern Discovery & Statistical Summaries', category: 'Data Analytics' }
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'ALL' && cat.categoryNumber !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') return true;
    return cat.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Stack &amp; Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded mt-2"></div>
          <p className="text-slate-400 text-sm mt-3 max-w-xl">
            Structured skill ecosystem spanning programming, data analytics, visualization, cloud fundamentals, AI development tools, and collaboration.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* Visual Hierarchy: Primary Technologies Banner */}
        {/* ========================================================================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
              <span>Core Primary Technologies</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Primary Focus Areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {primarySkills.map((item) => (
              <div
                key={item.name}
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-slate-950/90 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    CORE
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{item.category}</span>
                </div>
                <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </div>
                <p className="text-[11px] text-slate-300 leading-snug mt-1.5 font-sans">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: Category Filter Buttons + Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'ALL'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.categoryNumber}
                onClick={() => setSelectedCategory(cat.categoryNumber)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.categoryNumber
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.categoryNumber] || Terminal;
            return (
              <div
                key={category.categoryNumber}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/25 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-mono font-bold tracking-wider text-slate-200">
                        CATEGORY {category.categoryNumber} — {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List in Category */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                          skill.isPrimary
                            ? 'bg-cyan-950/50 text-cyan-200 border border-cyan-500/40 shadow-sm shadow-cyan-950/40'
                            : 'bg-slate-900/90 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {skill.isPrimary && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  {category.skills.some((s) => s.isPrimary) && (
                    <span className="text-cyan-400/90">Includes Core Technologies</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
