import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Mail, RotateCcw } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Translations } from '../data/translations';
import { PageId } from '../router';

interface FooterProps {
  t: Translations;
  onReplayIntro: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onReplayIntro, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#121212] text-neutral-400 py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Tier: Brand, Monogram, Statement, and Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#B69A68]/40 flex items-center justify-center font-serif text-lg font-bold text-[#B69A68]">
              AR
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white block">
                {PORTFOLIO_CONFIG.name}
              </span>
              <p className="text-xs text-neutral-400 font-mono">
                {PORTFOLIO_CONFIG.headline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onReplayIntro}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-400 hover:text-[#B69A68] hover:border-[#B69A68]/50 border border-neutral-800 bg-[#1C1C1C] transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.footer.replayIntro}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#242424] hover:bg-[#B69A68] text-white hover:text-[#121212] transition-colors flex items-center gap-1.5 border border-neutral-800"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Middle Tier: Personal Brand Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <p className="md:col-span-8 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            {t.footer.brandStatement}
          </p>

          <div className="md:col-span-4 flex items-center md:justify-end gap-3">
            <a
              href={PORTFOLIO_CONFIG.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#B69A68] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#B69A68] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#B69A68] transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}
              className="p-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#B69A68] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Multi-Page Quick Navigation */}
        {onNavigate && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-neutral-400 py-4 border-t border-neutral-800/60">
            <span className="text-[#B69A68] uppercase tracking-wider text-[11px] font-semibold">Pages:</span>
            <button onClick={() => onNavigate('home')} className="hover:text-[#B69A68] transition-colors">{t.nav.home}</button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#B69A68] transition-colors">{t.nav.about}</button>
            <button onClick={() => onNavigate('journey')} className="hover:text-[#B69A68] transition-colors">{t.nav.journey}</button>
            <button onClick={() => onNavigate('skills')} className="hover:text-[#B69A68] transition-colors">{t.nav.skills}</button>
            <button onClick={() => onNavigate('projects')} className="hover:text-[#B69A68] transition-colors">{t.nav.projects}</button>
            <button onClick={() => onNavigate('achievements')} className="hover:text-[#B69A68] transition-colors">{t.nav.achievements}</button>
            <button onClick={() => onNavigate('education')} className="hover:text-[#B69A68] transition-colors">{t.nav.education}</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#B69A68] transition-colors">{t.nav.contact}</button>
            <button onClick={() => onNavigate('resume')} className="text-[#B69A68] hover:underline font-semibold">{t.nav.viewResume}</button>
          </div>
        )}

        {/* Bottom Tier: Copyright & Legality */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 pt-6 border-t border-neutral-800/60">
          <div>
            © {currentYear} {PORTFOLIO_CONFIG.name}. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-3">
            <span>Vadodara, Gujarat</span>
            <span>·</span>
            <span>English / हिन्दी</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
