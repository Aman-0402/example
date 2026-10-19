import React, { useState } from 'react';
import { ArrowDownRight, FileText, Download, ShieldCheck, Sparkles, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  t: Translations;
  onOpenResume: () => void;
  onDownloadResume: () => void;
  onOpenPhotoConfig: () => void;
  customPortraitUrl: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  t,
  onOpenResume,
  onDownloadResume,
  onOpenPhotoConfig,
  customPortraitUrl
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background soft champagne glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#B69A68]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Content & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Configurable Availability Badge (Zero-Pill discipline: quiet unboxed layout or subtle hairline card) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B69A68]/30 bg-[#242424]/40 text-xs text-neutral-300 backdrop-blur-sm mb-6">
            <span
              className={`w-2 h-2 rounded-full ${
                PORTFOLIO_CONFIG.isOpenToOpportunities ? 'bg-[#B69A68]' : 'bg-neutral-500'
              }`}
              aria-hidden="true"
            />
            <span className="font-medium tracking-wide">
              {PORTFOLIO_CONFIG.isOpenToOpportunities
                ? currentLang === 'en'
                  ? PORTFOLIO_CONFIG.availabilityTextEn
                  : PORTFOLIO_CONFIG.availabilityTextHi
                : t.hero.notAvailableBadge}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-current leading-[1.1] text-balance">
            {PORTFOLIO_CONFIG.name}
          </h1>

          {/* Role Kicker */}
          <p className="mt-3 text-base sm:text-lg md:text-xl font-medium text-[#B69A68] tracking-tight text-balance">
            {t.hero.roleHeadline}
          </p>

          {/* Intro Prose */}
          <p className="mt-5 text-sm sm:text-base text-neutral-400 dark:text-neutral-300 leading-relaxed max-w-2xl text-pretty">
            {t.hero.intro}
          </p>

          {/* Location & Verified Status */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <span>{PORTFOLIO_CONFIG.contact.location}</span>
            <span aria-hidden="true">·</span>
            <span>Ethnotech / Parul Univ</span>
            <span aria-hidden="true">·</span>
            <span>Allenhouse ITBS</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#B69A68] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Resume Profile
            </span>
          </div>

          {/* Action Buttons Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Primary Action */}
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B69A68] hover:bg-[#D4BC8B] text-[#121212] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group"
            >
              <span>{t.hero.exploreWork}</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            {/* View Resume Action */}
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-700/80 hover:border-[#B69A68] bg-[#242424]/50 hover:bg-[#242424] text-current font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#B69A68]" />
              <span>{t.hero.viewResume}</span>
            </button>

            {/* Download Resume Action */}
            <button
              onClick={onDownloadResume}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-transparent text-neutral-400 hover:text-current font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5"
              title="Download official PDF resume"
            >
              <Download className="w-4 h-4" />
              <span>{t.hero.downloadResume}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Tall Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-[#242424] to-[#171717] border border-[#B69A68]/30 shadow-2xl transition-all duration-300 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Inner Content Area */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#1A1A1A] flex flex-col items-center justify-center border border-white/5">
              {customPortraitUrl ? (
                <img
                  src={customPortraitUrl}
                  alt={t.hero.portraitAlt}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Verified Stylistic Architectural Monogram & Portrait Placeholder */
                <div className="relative w-full h-full flex flex-col items-center justify-between p-8 bg-gradient-to-b from-[#1E1E1E] via-[#161616] to-[#121212] select-none text-center">
                  {/* Top Seal Badge */}
                  <div className="w-full flex items-center justify-between text-xs font-mono text-[#B69A68]">
                    <span className="tracking-widest">CREATIVE DEV</span>
                    <span>2026</span>
                  </div>

                  {/* Center Monogram Silhouette Seal */}
                  <div className="relative my-auto flex flex-col items-center">
                    <div className="w-32 h-32 rounded-2xl border border-[#B69A68]/40 bg-[#242424]/60 flex items-center justify-center shadow-inner relative group-hover:border-[#B69A68] transition-colors">
                      {/* Geometric grid lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#B69A68" strokeWidth="0.5" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke="#B69A68" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#B69A68" strokeWidth="0.5" />
                      </svg>
                      <span className="font-serif text-5xl font-bold tracking-tight text-[#B69A68]">
                        AR
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif text-lg font-semibold tracking-wide text-current">
                      Aman Raj
                    </h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      AI & Full-Stack Engineer
                    </p>
                  </div>

                  {/* Replace / Configure Portrait button */}
                  <div className="w-full pt-4 border-t border-neutral-800">
                    <button
                      onClick={onOpenPhotoConfig}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#B69A68] bg-[#242424] hover:bg-[#2F2F2F] border border-[#B69A68]/30 transition-colors"
                      title="Upload or configure profile picture"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>{t.hero.configurePhoto}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Champagne gold corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B69A68]/60 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B69A68]/60 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B69A68]/60 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B69A68]/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Claim-to-Proof Adjacency Strip: Full-width row below the hero split */}
      <div className="mt-14 pt-8 border-t border-neutral-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_CONFIG.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#B69A68] tabular-nums">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
                {currentLang === 'en' ? metric.labelEn : metric.labelHi}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
