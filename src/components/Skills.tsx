import React, { useState, useMemo } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Sparkles,
  Brain,
  Cloud,
  GraduationCap,
  Cpu,
  Search,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface SkillsProps {
  currentLang: Language;
  t: Translations;
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Sparkles,
  Brain,
  Cloud,
  GraduationCap,
  Cpu
};

export const Skills: React.FC<SkillsProps> = ({ currentLang, t }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      const matchesSearch = cat.skills.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return {
        ...cat,
        skills: matchesSearch
      };
    }).filter((cat) => {
      const categoryMatch = activeCategory === 'all' || cat.id === activeCategory;
      const hasSkills = cat.skills.length > 0;
      return categoryMatch && hasSkills;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.skills.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight text-balance">
          {t.skills.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Filter and Search Bar Controls (Interactive segmented controls as functional buttons) */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#1A1A1A] border border-neutral-800 max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-[#B69A68] text-[#121212] font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {t.skills.allCategory}
          </button>
          {SKILL_CATEGORIES.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#B69A68] text-[#121212] font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.skills.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#1A1A1A] border border-neutral-800 focus:border-[#B69A68] focus:outline-none text-current placeholder:text-neutral-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => {
          const IconComponent = iconMap[category.iconName] || Code2;
          return (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-current">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List (Zero-Pill discipline: clean unboxed text elements with subtle hover highlights) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#242424]/60 hover:bg-[#2A2A2A] border border-neutral-800/80 text-xs font-mono text-neutral-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#B69A68]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Note Footnote */}
              <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>{category.skills.length} competencies</span>
                <span className="text-[#B69A68]">Verified in Resume</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCategories.length === 0 && (
        <div className="py-12 text-center text-sm text-neutral-500 font-mono">
          No technologies found matching "{searchQuery}".
        </div>
      )}
    </section>
  );
};
