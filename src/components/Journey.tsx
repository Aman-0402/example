import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface JourneyProps {
  currentLang: Language;
  t: Translations;
}

export const Journey: React.FC<JourneyProps> = ({ t }) => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Header */}
      <div className="flex flex-col items-start mb-14">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.journey.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight text-balance">
          {t.journey.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          {t.journey.subtitle}
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 ml-2 sm:ml-4 flex flex-col gap-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Marker Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#B69A68] group-hover:scale-125 transition-transform" />

            {/* Content Card */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/40 transition-colors">
              {/* Top metadata line: Role, Company, Period */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-current">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-neutral-400">
                    <span className="font-medium text-neutral-200">{exp.company}</span>
                    {exp.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#B69A68]" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#B69A68] bg-[#242424] px-3 py-1 rounded-lg border border-[#B69A68]/20 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Verified Responsibilities & Outcomes */}
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-300">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#B69A68] mt-1 shrink-0">―</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags (Zero-Pill Discipline: unboxed clean monospace metadata) */}
              <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400 font-mono">
                <span className="text-[#B69A68] font-semibold text-[11px] uppercase tracking-wider mr-1">
                  Stack:
                </span>
                {exp.skills.map((skill, sIndex) => (
                  <React.Fragment key={sIndex}>
                    <span className="text-neutral-300">{skill}</span>
                    {sIndex < exp.skills.length - 1 && (
                      <span className="text-neutral-600" aria-hidden="true">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
