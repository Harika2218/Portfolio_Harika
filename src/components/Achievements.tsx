import React from 'react';
import { Trophy, Award, Medal, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getBadgeStyles = (type: string) => {
    switch (type) {
      case 'gold':
        return {
          icon: Trophy,
          badgeBg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
          cardBorder: 'hover:border-amber-500/40',
          glow: 'from-amber-500/10 to-transparent'
        };
      case 'silver':
        return {
          icon: Medal,
          badgeBg: 'bg-slate-300/15 border-slate-300/30 text-slate-200',
          cardBorder: 'hover:border-slate-300/40',
          glow: 'from-slate-400/10 to-transparent'
        };
      case 'cyan':
      default:
        return {
          icon: Award,
          badgeBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
          cardBorder: 'hover:border-cyan-500/40',
          glow: 'from-cyan-500/10 to-transparent'
        };
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-amber-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; COMPETITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 rounded mt-2"></div>
          <p className="text-slate-400 text-sm mt-3 max-w-xl">
            Recognitions earned in competitive hackathons and academic technical paper presentations.
          </p>
        </div>

        {/* Three Premium Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((achieve, idx) => {
            const styles = getBadgeStyles(achieve.badgeType);
            const Icon = styles.icon;

            return (
              <div
                key={idx}
                className={`glass-panel rounded-3xl p-7 border border-white/10 ${styles.cardBorder} transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 shadow-xl`}
              >
                {/* Subtle corner glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${styles.glow} rounded-full blur-2xl pointer-events-none`}></div>

                <div>
                  {/* Card Header with Rank Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold ${styles.badgeBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{achieve.rank}</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      {achieve.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                    {achieve.title}
                  </h3>

                  {/* Context */}
                  {achieve.description && (
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {achieve.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified Hackathon Honor</span>
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
