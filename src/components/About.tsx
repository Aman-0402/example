import React from 'react';
import { BookOpen, Terminal, Sparkles, Award } from 'lucide-react';
import { Translations } from '../data/translations';

interface AboutProps {
  t: Translations;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.about.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight max-w-3xl text-balance">
          {t.about.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-300">
          <p className="text-lg sm:text-xl font-serif text-[#F7F4ED] dark:text-[#F7F4ED] leading-relaxed italic">
            "{t.about.leadParagraph}"
          </p>

          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-300 leading-relaxed">
            {t.about.bodyParagraph1}
          </p>

          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-300 leading-relaxed">
            {t.about.bodyParagraph2}
          </p>

          {/* Quick Facts Strip */}
          <div className="mt-4 p-5 rounded-2xl bg-[#1C1C1C] border border-neutral-800 grid grid-cols-2 gap-4">
            {t.about.quickFacts.map((fact, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[11px] font-mono text-[#B69A68] uppercase tracking-wider">
                  {fact.label}
                </span>
                <span className="text-sm font-semibold text-neutral-200 mt-0.5">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Three Core Operating Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-mono tracking-wider uppercase text-neutral-400 mb-1">
            {t.about.corePillarsTitle}
          </span>

          {t.about.pillars.map((pillar, i) => {
            const icons = [BookOpen, Terminal, Sparkles];
            const Icon = icons[i] || Award;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/50 transition-colors flex flex-col gap-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-current">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pl-11">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
