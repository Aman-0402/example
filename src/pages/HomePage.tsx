import React from 'react';
import { ArrowRight, Sparkles, Briefcase, Code, GraduationCap } from 'lucide-react';
import { Hero } from '../components/Hero';
import { PageId } from '../router';
import { Translations, Language } from '../data/translations';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface HomePageProps {
  currentLang: Language;
  t: Translations;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onDownloadResume: () => void;
  onOpenPhotoConfig: () => void;
  customPortraitUrl: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  t,
  onNavigate,
  onOpenResume,
  onDownloadResume,
  onOpenPhotoConfig,
  customPortraitUrl
}) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        currentLang={currentLang}
        t={t}
        onOpenResume={onOpenResume}
        onDownloadResume={onDownloadResume}
        onOpenPhotoConfig={onOpenPhotoConfig}
        customPortraitUrl={customPortraitUrl}
      />

      {/* Developer Wallpaper Showcase */}
      <section
        aria-label="Developer wallpaper"
        className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pb-12"
      >
        <div className="overflow-hidden rounded-3xl border border-[#B69A68]/30 bg-[#161616] shadow-2xl">
          <img
            src="https://raw.githubusercontent.com/Aman-0402/example/main/public/developer-wallpaper.png"
            alt="Funny developer cat wallpaper with coding-themed artwork"
            className="block w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mt-3 text-center text-xs font-mono tracking-wide text-neutral-500">
          DEVELOPER MODE · CODE · DEBUG · COFFEE · REPEAT
        </p>
      </section>

      {/* Featured Teaser: Three Pillars of Aman Raj's Portfolio */}
      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full border-t border-neutral-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-1 block">
              Multi-Page Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-current">
              Explore Portfolio Sections
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 max-w-xs">
            Comprehensive deep dives across software engineering, AI systems, and technical pedagogy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Projects */}
          <div
            onClick={() => onNavigate('projects')}
            className="p-6 rounded-3xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] group-hover:scale-105 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#B69A68]">{PROJECTS.length} Systems</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-current group-hover:text-[#B69A68] transition-colors">
                Production Architectures
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Multi-tenant SaaS, WebSocket real-time attendance, escrow marketplace, and hyperlocal proximity discovery.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-medium text-[#B69A68]">
              <span>Explore Projects Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Career Journey */}
          <div
            onClick={() => onNavigate('journey')}
            className="p-6 rounded-3xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#B69A68]">{EXPERIENCES.length} Roles</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-current group-hover:text-[#B69A68] transition-colors">
                Career Journey & L&D
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Over 3 years of combined industry and training experience spanning Parul University, Allenhouse, and Malla Reddy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-medium text-[#B69A68]">
              <span>View Career Timeline</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: Skills & AI Systems */}
          <div
            onClick={() => onNavigate('skills')}
            className="p-6 rounded-3xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#B69A68]">{SKILL_CATEGORIES.length} Categories</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-current group-hover:text-[#B69A68] transition-colors">
                Technical Competencies
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Python, Django, React, Prompt Engineering, LLM Integration (NVIDIA NIM, Claude API), and cloud infrastructure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-medium text-[#B69A68]">
              <span>Browse Technical Grid</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Secondary Navigation Row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('about')}
            className="p-4 rounded-2xl bg-[#161616] border border-neutral-800 hover:border-[#B69A68]/40 transition-colors flex items-center justify-between text-left group"
          >
            <div>
              <span className="text-[11px] font-mono text-[#B69A68] uppercase block">About</span>
              <span className="text-sm font-semibold text-neutral-200">Engineering Philosophy & Bio</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B69A68] transition-colors" />
          </button>

          <button
            onClick={() => onNavigate('education')}
            className="p-4 rounded-2xl bg-[#161616] border border-neutral-800 hover:border-[#B69A68]/40 transition-colors flex items-center justify-between text-left group"
          >
            <div>
              <span className="text-[11px] font-mono text-[#B69A68] uppercase block">Credentials</span>
              <span className="text-sm font-semibold text-neutral-200">Education & 10 Certifications</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B69A68] transition-colors" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="p-4 rounded-2xl bg-[#161616] border border-neutral-800 hover:border-[#B69A68]/40 transition-colors flex items-center justify-between text-left group"
          >
            <div>
              <span className="text-[11px] font-mono text-[#B69A68] uppercase block">Contact</span>
              <span className="text-sm font-semibold text-neutral-200">Direct Communication Channels</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B69A68] transition-colors" />
          </button>
        </div>
      </section>
    </div>
  );
};
