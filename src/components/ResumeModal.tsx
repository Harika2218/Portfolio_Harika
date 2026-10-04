import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  EXPERIENCES_DATA, 
  PROJECTS_DATA, 
  SKILL_CATEGORIES, 
  ACHIEVEMENTS_DATA 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div className="bg-[#0b0e14] border border-cyan-500/30 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl shadow-cyan-950/50 overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>EVURI_HARIKA_RESUME.pdf (Preview Mode)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090b10] text-slate-200 font-sans print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm sm:text-base font-semibold text-cyan-300 mt-1">
              {PERSONAL_INFO.positioning}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {PERSONAL_INFO.aboutBio}
            </p>

            {/* Contact links */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <a href={`mailto:${PERSONAL_INFO.links.email}`} className="flex items-center gap-1 text-cyan-300 hover:underline">
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.links.email}</span>
              </a>
              <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-300 hover:underline">
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/harikaevuri</span>
              </a>
              <a href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-300 hover:underline">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/Harika2218</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h2>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex flex-wrap items-center justify-between">
                <h3 className="text-base font-bold text-white">{EDUCATION_DATA.institution}</h3>
                <span className="text-xs font-mono text-slate-400">{EDUCATION_DATA.period}</span>
              </div>
              <div className="text-sm text-cyan-300 font-medium">
                {EDUCATION_DATA.degree} — {EDUCATION_DATA.specialization}
              </div>
              <div className="text-xs text-slate-400 pt-1">
                <span className="text-slate-300 font-semibold">Coursework:</span>{' '}
                {EDUCATION_DATA.coursework.map((c) => c.name).join(', ')}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>WORK EXPERIENCE</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.company}</h3>
                      <div className="text-xs font-medium text-cyan-300">Role: {exp.role}</div>
                    </div>
                    {exp.period && <span className="text-xs font-mono text-slate-400">{exp.period}</span>}
                  </div>
                  
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pt-1 leading-relaxed">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4" />
              <span>FEATURED PROJECTS</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-base font-bold text-white">{proj.title}</h3>
                    <span className="text-xs font-mono text-cyan-300">{proj.technologies.join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-xs text-slate-400 pt-1">
                    <span className="text-slate-300 font-semibold">Features:</span>{' '}
                    {proj.features.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>TECHNICAL SKILLS</span>
            </h2>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.categoryNumber} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-mono text-slate-300 font-bold min-w-40">{cat.title}:</span>
                  <span className="text-slate-400">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>ACHIEVEMENTS &amp; HONORS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ACHIEVEMENTS_DATA.map((ach, idx) => (
                <div key={idx} className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                  <div className="text-xs font-bold text-cyan-300 font-mono mb-1">{ach.rank}</div>
                  <div className="text-xs font-semibold text-white">{ach.title}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
