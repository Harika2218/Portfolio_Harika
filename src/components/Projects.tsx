import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  BarChart3, 
  Filter, 
  ChevronRight, 
  Server, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  X 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  // Active view states inside individual project mock dashboards
  const [p1ActiveTab, setP1ActiveTab] = useState<'sales' | 'demographics' | 'subscription' | 'dax'>('sales');
  const [p2ActiveTab, setP2ActiveTab] = useState<'genres' | 'years' | 'ratings' | 'countries'>('genres');
  const [p3ActiveModule, setP3ActiveModule] = useState<'attendance' | 'payroll' | 'planning'>('attendance');

  const categories = ['All', 'Power BI / SQL', 'Python / EDA', 'AI & Automation'];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>TECHNICAL WORK &amp; SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded mt-2"></div>
            <p className="text-slate-400 text-sm mt-3 max-w-xl">
              Practical systems built across Power BI analytics, exploratory data analysis with Python, and backend automation with FastAPI.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          
          {/* ========================================================================= */}
          {/* PROJECT 01: Customer Behavior Analysis Dashboard */}
          {/* ========================================================================= */}
          {(selectedCategory === 'All' || selectedCategory === 'Power BI / SQL') && (
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/10 relative overflow-hidden transition-all hover:border-cyan-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Project Info & Capabilities */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                        Power BI • Excel • SQL
                      </span>
                      <span className="text-slate-500 text-xs font-mono">PROJECT 01</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      Customer Behavior Analysis Dashboard
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      An interactive Power BI dashboard designed to analyze customer purchasing behavior and business performance.
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Key Dashboard Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {[
                          'Sales analysis',
                          'Revenue analysis',
                          'Customer demographics',
                          'Subscription status',
                          'Product categories',
                          'Dynamic visualizations',
                          'Interactive DAX filters'
                        ].map((feat, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <a
                      href="https://github.com/Harika2218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/10 hover:border-cyan-500/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub Repository</span>
                    </a>

                    <button
                      onClick={() => setSelectedProjectModal(PROJECTS_DATA[0])}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 cursor-pointer"
                    >
                      <span>Expand Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right side: Mock Analytics Dashboard Interface */}
                <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-white/10 p-5 shadow-2xl relative">
                  {/* Dashboard header bar */}
                  <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-white/10 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-200 font-semibold">
                        PowerBI // Customer_Analytics.pbix
                      </span>
                    </div>

                    {/* View switcher tabs */}
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/5 text-[11px] font-mono">
                      <button
                        onClick={() => setP1ActiveTab('sales')}
                        className={`px-2.5 py-1 rounded transition-all ${p1ActiveTab === 'sales' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'}`}
                      >
                        Sales &amp; Revenue
                      </button>
                      <button
                        onClick={() => setP1ActiveTab('demographics')}
                        className={`px-2.5 py-1 rounded transition-all ${p1ActiveTab === 'demographics' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'}`}
                      >
                        Demographics
                      </button>
                      <button
                        onClick={() => setP1ActiveTab('subscription')}
                        className={`px-2.5 py-1 rounded transition-all ${p1ActiveTab === 'subscription' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'}`}
                      >
                        Subscriptions
                      </button>
                      <button
                        onClick={() => setP1ActiveTab('dax')}
                        className={`px-2.5 py-1 rounded transition-all ${p1ActiveTab === 'dax' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400'}`}
                      >
                        DAX Formula
                      </button>
                    </div>
                  </div>

                  {/* UI Visualization Content */}
                  {p1ActiveTab === 'sales' && (
                    <div className="space-y-4">
                      {/* Interactive DAX Filter bar mock */}
                      <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-lg border border-white/5 text-[11px] font-mono">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Filter className="w-3 h-3 text-cyan-400" />
                          <span>Active DAX Slicers: [All Categories] • [Active Fiscal Cycle]</span>
                        </span>
                        <span className="text-cyan-400">Dynamic Filtering</span>
                      </div>

                      {/* SVG Bar Chart for Product Categories */}
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                        <div className="text-[11px] font-mono text-slate-300 mb-2 flex items-center justify-between">
                          <span>Revenue Analysis Across Product Categories</span>
                          <span className="text-[10px] text-slate-500 font-mono">UI Visual Representation</span>
                        </div>
                        <div className="space-y-2.5 pt-1">
                          {[
                            { name: 'Category Alpha', width: '85%', color: 'from-cyan-500 to-sky-400' },
                            { name: 'Category Beta', width: '70%', color: 'from-cyan-500 to-teal-400' },
                            { name: 'Category Gamma', width: '55%', color: 'from-teal-500 to-emerald-400' },
                            { name: 'Category Delta', width: '40%', color: 'from-indigo-500 to-cyan-500' }
                          ].map((item, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                                <span>{item.name}</span>
                                <span className="text-slate-300">Relative Rank 0{idx + 1}</span>
                              </div>
                              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                                  style={{ width: item.width }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {p1ActiveTab === 'demographics' && (
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Customer Demographics Segmentation Model</span>
                        <span className="text-[10px] text-slate-500 font-mono">UI Schema</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-slate-950 border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Segment A</span>
                          <span className="text-cyan-300 font-semibold">High-Engagement Shoppers</span>
                          <span className="text-[10px] text-slate-500 block mt-1">Multi-Category Purchase History</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Segment B</span>
                          <span className="text-sky-300 font-semibold">Periodic Purchasers</span>
                          <span className="text-[10px] text-slate-500 block mt-1">Seasonal Buying Cycles</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Segment C</span>
                          <span className="text-teal-300 font-semibold">First-Time Visitors</span>
                          <span className="text-[10px] text-slate-500 block mt-1">Single Order Conversion</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Segment D</span>
                          <span className="text-indigo-300 font-semibold">Loyalty Members</span>
                          <span className="text-[10px] text-slate-500 block mt-1">Subscribed Tier Members</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {p1ActiveTab === 'subscription' && (
                    <div className="bg-slate-900/50 p-5 rounded-xl border border-white/5">
                      <div className="text-xs font-mono text-slate-300 mb-3 flex items-center justify-between">
                        <span>Subscription Status Breakdown</span>
                        <span className="text-[10px] text-slate-500 font-mono">UI Representation</span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-around gap-4 py-2">
                        {/* Donut representation */}
                        <div className="relative w-28 h-28 flex items-center justify-center">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="4" />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#06b6d4"
                              strokeWidth="4"
                              strokeDasharray="60 100"
                              strokeDashoffset="0"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="4"
                              strokeDasharray="40 100"
                              strokeDashoffset="-60"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-[10px] font-mono text-slate-400">Status</span>
                            <span className="text-xs font-bold text-cyan-300 font-mono">Active</span>
                          </div>
                        </div>

                        {/* Legend */}
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                            <span className="text-slate-300">Subscribed Active Customers</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                            <span className="text-slate-300">Standard / Non-Subscribed</span>
                          </div>
                          <div className="text-[10px] text-slate-500 pt-1">
                            Analyzed in Power BI with dynamic DAX segmentation
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {p1ActiveTab === 'dax' && (
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 font-mono text-xs">
                      <div className="text-[11px] text-cyan-400 mb-2 flex items-center justify-between">
                        <span>Interactive DAX Filter Measure</span>
                        <span className="text-slate-500">Data Modeling</span>
                      </div>
                      <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto p-2 rounded bg-slate-950 border border-white/5">
                        <code>
                          <span className="text-purple-400">FilteredRevenue</span> = {'\n'}
                          <span className="text-cyan-400">CALCULATE</span>({'\n'}
                          {'    '}<span className="text-cyan-400">SUM</span>(Transactions[Amount]),{'\n'}
                          {'    '}<span className="text-purple-400">KEEPFILTERS</span>(Customer[SubscriptionStatus] = <span className="text-emerald-400">"Active"</span>),{'\n'}
                          {'    '}<span className="text-purple-400">ALLSELECTED</span>(ProductCategories[CategoryName]){'\n'}
                          )
                        </code>
                      </pre>
                    </div>
                  )}

                  <div className="mt-3 text-[10px] font-mono text-slate-500 text-right">
                    Visual elements are UI representations of dashboard components
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PROJECT 02: Netflix Movie Analysis */}
          {/* ========================================================================= */}
          {(selectedCategory === 'All' || selectedCategory === 'Python / EDA') && (
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/10 relative overflow-hidden transition-all hover:border-cyan-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Project Info */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                        Python • Pandas • Matplotlib • Seaborn
                      </span>
                      <span className="text-slate-500 text-xs font-mono">PROJECT 02</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      Netflix Movie Analysis
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Exploratory data analysis of the Netflix Movies and TV Shows dataset to uncover content and viewing trends.
                    </p>

                    {/* Analysis Dimensions */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Exploratory Analysis Dimensions:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {[
                          'Genres',
                          'Release years',
                          'Ratings',
                          'Countries',
                          'Content distribution'
                        ].map((dim, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{dim}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <a
                      href="https://github.com/Harika2218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/10 hover:border-cyan-500/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub Repository</span>
                    </a>

                    <button
                      onClick={() => setSelectedProjectModal(PROJECTS_DATA[1])}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 cursor-pointer"
                    >
                      <span>Expand Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right side: Mock EDA Interface */}
                <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-white/10 p-5 shadow-2xl relative">
                  {/* EDA header bar */}
                  <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-white/10 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-200 font-semibold">
                        Jupyter // netflix_eda_insights.ipynb
                      </span>
                    </div>

                    {/* View switcher tabs */}
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/5 text-[11px] font-mono">
                      <button
                        onClick={() => setP2ActiveTab('genres')}
                        className={`px-2.5 py-1 rounded transition-all ${p2ActiveTab === 'genres' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-slate-400'}`}
                      >
                        Genres
                      </button>
                      <button
                        onClick={() => setP2ActiveTab('years')}
                        className={`px-2.5 py-1 rounded transition-all ${p2ActiveTab === 'years' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-slate-400'}`}
                      >
                        Release Years
                      </button>
                      <button
                        onClick={() => setP2ActiveTab('ratings')}
                        className={`px-2.5 py-1 rounded transition-all ${p2ActiveTab === 'ratings' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-slate-400'}`}
                      >
                        Ratings
                      </button>
                      <button
                        onClick={() => setP2ActiveTab('countries')}
                        className={`px-2.5 py-1 rounded transition-all ${p2ActiveTab === 'countries' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-slate-400'}`}
                      >
                        Countries
                      </button>
                    </div>
                  </div>

                  {/* UI Visualization Content */}
                  {p2ActiveTab === 'genres' && (
                    <div className="space-y-4">
                      <div className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
                        <span>Genre Distribution Breakdown</span>
                        <span className="text-purple-400 font-mono">Matplotlib / Seaborn</span>
                      </div>
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-2.5">
                        {[
                          { genre: 'Dramas & International', barWidth: '90%', color: 'from-purple-500 to-indigo-500' },
                          { genre: 'Comedies & Stand-up', barWidth: '72%', color: 'from-purple-500 to-pink-500' },
                          { genre: 'Action & Adventure', barWidth: '60%', color: 'from-indigo-500 to-cyan-500' },
                          { genre: 'Documentaries', barWidth: '48%', color: 'from-cyan-500 to-teal-500' }
                        ].map((g, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[11px] font-mono text-slate-400">
                              <span>{g.genre}</span>
                              <span className="text-slate-300">Dimension 0{idx + 1}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${g.color} rounded-full`}
                                style={{ width: g.barWidth }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {p2ActiveTab === 'years' && (
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-3 font-mono">
                      <div className="text-[11px] text-slate-300 flex justify-between">
                        <span>Release-Year Trend Examination</span>
                        <span className="text-purple-400">Time-Series Density</span>
                      </div>
                      {/* Trend representation */}
                      <div className="h-28 w-full flex items-end justify-between gap-1 pt-4">
                        {[20, 25, 35, 45, 60, 80, 95, 88, 75, 70].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full bg-gradient-to-t from-purple-600 to-cyan-400 rounded-t"
                              style={{ height: `${h}%` }}
                            ></div>
                            <span className="text-[9px] text-slate-500">T{i}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-[10px] text-slate-400 text-center">
                        Examining temporal additions and release density across catalog eras
                      </div>
                    </div>
                  )}

                  {p2ActiveTab === 'ratings' && (
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-3 font-mono text-xs">
                      <div className="text-[11px] text-slate-300 flex justify-between">
                        <span>Rating Distribution Categories</span>
                        <span className="text-purple-400">Audience Segmentation</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-2.5 rounded bg-slate-950 border border-white/5">
                          <span className="text-slate-400 text-[10px] block">Mature Audience</span>
                          <span className="text-purple-300 font-bold">TV-MA / R</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950 border border-white/5">
                          <span className="text-slate-400 text-[10px] block">Teens &amp; Young Adults</span>
                          <span className="text-cyan-300 font-bold">TV-14 / PG-13</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950 border border-white/5">
                          <span className="text-slate-400 text-[10px] block">Family &amp; Children</span>
                          <span className="text-teal-300 font-bold">TV-PG / PG</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950 border border-white/5">
                          <span className="text-slate-400 text-[10px] block">General Audience</span>
                          <span className="text-indigo-300 font-bold">TV-G / G</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {p2ActiveTab === 'countries' && (
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 font-mono text-xs space-y-3">
                      <div className="text-[11px] text-slate-300 flex justify-between">
                        <span>Geographical Content Sourcing</span>
                        <span className="text-purple-400">Country Analysis</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        Exploratory analysis identifying production countries, multi-national co-productions, and catalog concentration patterns.
                      </p>
                      <div className="flex flex-wrap gap-2 text-[10px]">
                        <span className="px-2 py-1 rounded bg-slate-950 text-cyan-300 border border-cyan-500/20">United States</span>
                        <span className="px-2 py-1 rounded bg-slate-950 text-purple-300 border border-purple-500/20">India</span>
                        <span className="px-2 py-1 rounded bg-slate-950 text-indigo-300 border border-indigo-500/20">United Kingdom</span>
                        <span className="px-2 py-1 rounded bg-slate-950 text-teal-300 border border-teal-500/20">Canada</span>
                        <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-white/5">International Hubs</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 text-[10px] font-mono text-slate-500 text-right">
                    Visual elements are UI representations of exploratory data structures
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PROJECT 03: AI-Powered Workforce Management Automation System */}
          {/* ========================================================================= */}
          {(selectedCategory === 'All' || selectedCategory === 'AI & Automation') && (
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/10 relative overflow-hidden transition-all hover:border-cyan-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Project Info */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                        Python • MongoDB • FastAPI
                      </span>
                      <span className="text-slate-500 text-xs font-mono">PROJECT 03</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      AI-Powered Workforce Management Automation System
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      A workforce management system designed to automate employee, attendance, leave, payroll, performance, and workforce planning processes.
                    </p>

                    {/* Supported Scope Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-6">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Developed for 200 Synthetic Employees</span>
                    </div>

                    {/* Capabilities list */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        System Modules &amp; Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {[
                          'Employee management',
                          'Attendance tracking',
                          'Leave management',
                          'Payroll processing',
                          'Performance monitoring',
                          'Workforce planning',
                          'Synthetic dataset (200 records)',
                          'MongoDB data management',
                          'FastAPI REST endpoints'
                        ].map((cap, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <a
                      href="https://github.com/Harika2218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/10 hover:border-cyan-500/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub Repository</span>
                    </a>

                    <button
                      onClick={() => setSelectedProjectModal(PROJECTS_DATA[2])}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 cursor-pointer"
                    >
                      <span>Expand Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right side: High-End Architecture Diagram */}
                <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-white/10 p-5 shadow-2xl relative">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Server className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-200 font-semibold">
                        System Architecture: REST API &amp; Automation
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">FastAPI • MongoDB</span>
                  </div>

                  {/* Architecture Flow: Frontend -> FastAPI REST API -> MongoDB -> Workforce Modules */}
                  <div className="space-y-3 font-mono text-xs">
                    {/* Layer 1: Frontend */}
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">Frontend UI / Client Layer</span>
                      <span className="text-[10px] text-slate-500">HTTP / JSON</span>
                    </div>

                    <div className="flex justify-center -my-1">
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 rotate-90" />
                    </div>

                    {/* Layer 2: FastAPI REST API */}
                    <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-cyan-300 font-bold">FastAPI REST API Layer</div>
                        <div className="text-[10px] text-slate-400">Structured Routing &amp; Module Endpoints</div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-500/30">
                        Async Python
                      </span>
                    </div>

                    <div className="flex justify-center -my-1">
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 rotate-90" />
                    </div>

                    {/* Layer 3: MongoDB */}
                    <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-purple-300 font-bold">MongoDB Database</div>
                        <div className="text-[10px] text-slate-400">Collections: 200 Synthetic Employee Records</div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 border border-purple-500/30">
                        NoSQL
                      </span>
                    </div>

                    <div className="flex justify-center -my-1">
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 rotate-90" />
                    </div>

                    {/* Layer 4: 6 Workforce Modules */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
                      <div className="text-[11px] text-slate-300 mb-2 flex items-center justify-between">
                        <span>Automated Workforce Modules:</span>
                        <span className="text-[10px] text-cyan-400">Click to test REST call</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-[11px]">
                        {[
                          { id: 'attendance', label: 'Attendance' },
                          { id: 'payroll', label: 'Payroll' },
                          { id: 'planning', label: 'Planning' },
                          { id: 'employee', label: 'Employee' },
                          { id: 'leave', label: 'Leave' },
                          { id: 'performance', label: 'Performance' },
                        ].map((mod) => {
                          const isActive = (p3ActiveModule === mod.id) || (p3ActiveModule === 'attendance' && mod.id === 'employee');
                          return (
                            <button
                              key={mod.id}
                              onClick={() => setP3ActiveModule((['attendance', 'payroll', 'planning'].includes(mod.id) ? mod.id : 'attendance') as 'attendance' | 'payroll' | 'planning')}
                              className={`p-2 rounded border transition-colors cursor-pointer ${
                                isActive
                                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                                  : 'bg-slate-950 border-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30'
                              }`}
                            >
                              {mod.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Live Endpoint Simulator */}
                  <div className="mt-4 p-3 rounded-lg bg-slate-900/80 border border-white/5 font-mono text-[11px]">
                    <div className="flex items-center justify-between text-slate-400 pb-1.5 mb-1.5 border-b border-white/5">
                      <span className="text-cyan-400">
                        {p3ActiveModule === 'payroll' 
                          ? 'POST /api/v1/payroll/calculate' 
                          : p3ActiveModule === 'planning' 
                            ? 'GET /api/v1/workforce/planning' 
                            : 'GET /api/v1/attendance/summary'}
                      </span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <code className="text-slate-300 block text-[10px] whitespace-pre-wrap">
                      {p3ActiveModule === 'payroll'
                        ? '{"status": "processed", "synthetic_employees": 200, "formula": "data-driven"}'
                        : p3ActiveModule === 'planning'
                          ? '{"status": "forecasted", "synthetic_employees": 200, "utilization_metric": "optimal"}'
                          : '{"status": "active", "total_synthetic_employees": 200, "modules_synced": 6}'}
                    </code>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal for Extended Project Specifications */}
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#0b0e14] border border-cyan-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-xs font-mono text-cyan-400 mb-2">
                PROJECT SPECIFICATION // {selectedProjectModal.category}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProjectModal.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProjectModal.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectModal.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Capabilities &amp; Features
                </div>
                <div className="space-y-2">
                  {selectedProjectModal.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={selectedProjectModal.githubUrl || 'https://github.com/Harika2218'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 text-slate-300 text-xs hover:bg-slate-800 border border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
