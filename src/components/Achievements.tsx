import React from 'react';
import { Award, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface AchievementsProps {
  currentLang: Language;
  t: Translations;
}

export const Achievements: React.FC<AchievementsProps> = ({ t }) => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.achievements.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight text-balance">
          {t.achievements.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          {t.achievements.subtitle}
        </p>
      </div>

      {/* Grid of Verified Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, index) => {
          const icons = [Users, CheckCircle, Award, ShieldCheck];
          const Icon = icons[index % icons.length];

          return (
            <div
              key={index}
              className="p-7 rounded-3xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* Top Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#B69A68] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#242424] border border-[#B69A68]/20 flex items-center justify-center text-[#B69A68] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums mb-2">
                  {item.metric}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-neutral-200 mb-2">
                  {item.title}
                </h3>

                {/* Verified Context Prose */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.context}
                </p>
              </div>

              {/* Bottom verified proof badge */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B69A68]" />
                <span>Verified against institutional records</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
