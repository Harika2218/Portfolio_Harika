import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 text-slate-100 font-bold tracking-widest text-sm mb-1">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs">
                H
              </div>
              <span>EVURI HARIKA</span>
            </a>
            <p className="text-slate-400 text-xs max-w-sm mt-1">
              Data Science Student | Data Analyst | AI &amp; Automation Enthusiast
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#process" className="hover:text-cyan-300 transition-colors">Process</a>
            <a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
              aria-label="Email Harika"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] font-mono gap-2 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Evuri Harika. All rights reserved.
          </div>
          <div>
            Designed with precision for Data Science, Analytics &amp; AI Automation.
          </div>
        </div>
      </div>
    </footer>
  );
};
