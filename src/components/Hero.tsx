import React, { useState } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Mail, 
  Check, 
  Copy, 
  Terminal, 
  BarChart2, 
  Database,
  ArrowRight,
  Activity
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeVisualTab, setActiveVisualTab] = useState<'chart' | 'sql' | 'python'>('chart');
  const [activePointIndex, setActivePointIndex] = useState<number | null>(4);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  // Mock analytical data points for the interactive SVG trend chart
  const trendData = [
    { x: 30, y: 110, label: 'Raw Ingestion', val: '100% Validated' },
    { x: 90, y: 85, label: 'Data Cleaning', val: 'Nulls Handled' },
    { x: 150, y: 95, label: 'EDA & Stats', val: 'Trends Identified' },
    { x: 210, y: 55, label: 'DAX Modeling', val: 'Key Measures' },
    { x: 270, y: 40, label: 'Insight Synthesis', val: 'High Value' },
    { x: 330, y: 25, label: 'Automation / API', val: 'REST Deployed' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient gradient orbs and grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-600/10 blur-[90px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Positioning & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 shadow-sm shadow-cyan-900/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Turning Data Into Decisions.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Building Intelligent Solutions.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Brand Quote Pill */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/70 border border-white/10 text-xs text-slate-300 font-mono mb-8 max-w-xl">
              <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
              <span className="italic text-slate-300">
                &ldquo;{PERSONAL_INFO.brandQuote}&rdquo;
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/70 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Actual Verified Social & Contact Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-6 border-t border-white/10 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all text-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-200" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.links.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all text-xs"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/5 transition-all text-xs ml-auto"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px] font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">evuriharika@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: High-End Analytical Console Visual */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop Border */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-cyan-500/20 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
              
              {/* Console Top Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">data-pipeline.analytics</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Data Pipeline Progression Bar: DATA → ANALYSIS → INSIGHT → ACTION */}
              <div className="bg-slate-950/70 rounded-xl p-2.5 border border-white/5 mb-4">
                <div className="text-[10px] uppercase font-mono text-slate-400 mb-1.5 tracking-wider flex items-center justify-between">
                  <span>Analytical Progression Pipeline</span>
                  <span className="text-cyan-400 font-mono">End-to-End</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                  <div className="bg-cyan-500/15 text-cyan-300 py-1 px-1 rounded border border-cyan-500/30 font-semibold flex items-center justify-center gap-1">
                    <span>DATA</span>
                    <ArrowRight className="w-2.5 h-2.5 text-cyan-500 hidden sm:inline" />
                  </div>
                  <div className="bg-cyan-500/15 text-cyan-300 py-1 px-1 rounded border border-cyan-500/30 font-semibold flex items-center justify-center gap-1">
                    <span>ANALYSIS</span>
                    <ArrowRight className="w-2.5 h-2.5 text-cyan-500 hidden sm:inline" />
                  </div>
                  <div className="bg-purple-500/15 text-purple-300 py-1 px-1 rounded border border-purple-500/30 font-semibold flex items-center justify-center gap-1">
                    <span>INSIGHT</span>
                    <ArrowRight className="w-2.5 h-2.5 text-purple-500 hidden sm:inline" />
                  </div>
                  <div className="bg-emerald-500/15 text-emerald-300 py-1 px-1 rounded border border-emerald-500/30 font-semibold">
                    <span>ACTION</span>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Mode Switcher */}
              <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-lg border border-white/5 mb-4">
                <button
                  onClick={() => setActiveVisualTab('chart')}
                  className={`flex-1 py-1.5 px-2 rounded text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeVisualTab === 'chart'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Trend Flow</span>
                </button>
                <button
                  onClick={() => setActiveVisualTab('sql')}
                  className={`flex-1 py-1.5 px-2 rounded text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeVisualTab === 'sql'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>SQL Query</span>
                </button>
                <button
                  onClick={() => setActiveVisualTab('python')}
                  className={`flex-1 py-1.5 px-2 rounded text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeVisualTab === 'python'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Python EDA</span>
                </button>
              </div>

              {/* Tab Content Display */}
              {activeVisualTab === 'chart' && (
                <div className="bg-slate-950/90 rounded-xl p-4 border border-white/10 relative">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Value Extraction Curve
                    </span>
                    <span className="text-[11px] text-cyan-400/90">Hover nodes to inspect</span>
                  </div>

                  {/* Dynamic SVG Line & Area Chart */}
                  <div className="relative h-36 w-full mt-2">
                    <svg viewBox="0 0 360 130" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid guidelines */}
                      <line x1="20" y1="30" x2="340" y2="30" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.75" />
                      <line x1="20" y1="70" x2="340" y2="70" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.75" />
                      <line x1="20" y1="110" x2="340" y2="110" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.75" />

                      {/* Area Fill */}
                      <path
                        d="M 30 110 L 90 85 L 150 95 L 210 55 L 270 40 L 330 25 L 330 120 L 30 120 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Trend Curve */}
                      <path
                        d="M 30 110 Q 60 97 90 85 T 150 95 T 210 55 T 270 40 T 330 25"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                      />

                      {/* Interactive Nodes */}
                      {trendData.map((pt, idx) => {
                        const isSelected = activePointIndex === idx;
                        return (
                          <g 
                            key={idx} 
                            className="cursor-pointer transition-transform hover:scale-125"
                            onClick={() => setActivePointIndex(idx)}
                            onMouseEnter={() => setActivePointIndex(idx)}
                          >
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isSelected ? 6 : 4}
                              fill={isSelected ? '#38bdf8' : '#08090d'}
                              stroke={isSelected ? '#ffffff' : '#06b6d4'}
                              strokeWidth={isSelected ? 2.5 : 2}
                            />
                            {isSelected && (
                              <circle
                                cx={pt.x}
                                cy={pt.y}
                                r={10}
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="1"
                                className="animate-ping opacity-75"
                              />
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    {/* Active Point Card */}
                    {activePointIndex !== null && (
                      <div className="mt-2 p-2 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400 font-semibold">Stage {activePointIndex + 1}:</span>
                          <span className="text-slate-200">{trendData[activePointIndex].label}</span>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                          {trendData[activePointIndex].val}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeVisualTab === 'sql' && (
                <div className="bg-slate-950/90 rounded-xl p-3.5 border border-white/10 font-mono text-xs text-left">
                  <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-white/5">
                    <span className="text-cyan-400">behavior_query.sql</span>
                    <span className="text-[10px] text-slate-400">PostgreSQL / SQL</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-purple-400">SELECT</span>{'\n'}
                      {'  '}c.customer_segment,{'\n'}
                      {'  '}<span className="text-cyan-400">COUNT</span>(o.order_id) <span className="text-purple-400">AS</span> total_orders,{'\n'}
                      {'  '}<span className="text-cyan-400">SUM</span>(o.revenue) <span className="text-purple-400">AS</span> total_revenue,{'\n'}
                      {'  '}<span className="text-cyan-400">AVG</span>(o.order_value) <span className="text-purple-400">AS</span> avg_ticket{'\n'}
                      <span className="text-purple-400">FROM</span> customer_purchases c{'\n'}
                      <span className="text-purple-400">JOIN</span> order_transactions o <span className="text-purple-400">ON</span> c.id = o.cust_id{'\n'}
                      <span className="text-purple-400">GROUP BY</span> c.customer_segment{'\n'}
                      <span className="text-purple-400">ORDER BY</span> total_revenue <span className="text-purple-400">DESC</span>;
                    </code>
                  </pre>
                  <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Status: Structured Query Ready</span>
                    <span className="text-emerald-400">DAX / BI Ready</span>
                  </div>
                </div>
              )}

              {activeVisualTab === 'python' && (
                <div className="bg-slate-950/90 rounded-xl p-3.5 border border-white/10 font-mono text-xs text-left">
                  <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-white/5">
                    <span className="text-cyan-400">eda_pipeline.py</span>
                    <span className="text-[10px] text-slate-400">Pandas • Seaborn</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd{'\n'}
                      <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns{'\n\n'}
                      <span className="text-slate-400"># Exploratory analysis on dataset</span>{'\n'}
                      df = pd.read_csv(<span className="text-emerald-400">'dataset.csv'</span>){'\n'}
                      df_clean = df.dropna(subset=[<span className="text-emerald-400">'genre'</span>, <span className="text-emerald-400">'release_year'</span>]){'\n'}
                      trend = df_clean.groupby(<span className="text-emerald-400">'genre'</span>).agg({'{'}{'\n'}
                      {'    '}<span className="text-emerald-400">'title'</span>: <span className="text-emerald-400">'count'</span>,{'\n'}
                      {'    '}<span className="text-emerald-400">'rating'</span>: <span className="text-emerald-400">'mean'</span>{'\n'}
                      {'}'}).reset_index()
                    </code>
                  </pre>
                  <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Dimensions: Genres &amp; Years</span>
                    <span className="text-emerald-400">Data Cleaned</span>
                  </div>
                </div>
              )}

              {/* Three Power BI-Inspired Analytical KPI Blocks */}
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <div className="bg-slate-950/70 p-2.5 rounded-lg border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Core Focus</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">Data Science</div>
                  <div className="text-[10px] text-cyan-400 font-mono">Analytics &amp; EDA</div>
                </div>
                <div className="bg-slate-950/70 p-2.5 rounded-lg border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Visual Layer</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">Power BI</div>
                  <div className="text-[10px] text-cyan-400 font-mono">DAX &amp; Dashboards</div>
                </div>
                <div className="bg-slate-950/70 p-2.5 rounded-lg border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Automation</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">FastAPI &amp; AI</div>
                  <div className="text-[10px] text-purple-400 font-mono">REST Endpoints</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
