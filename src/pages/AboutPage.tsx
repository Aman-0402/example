import React from 'react';
import { ArrowLeft, BookOpen, Terminal, Sparkles, Award, MapPin, GraduationCap } from 'lucide-react';
import { About } from '../components/About';
import { Translations, Language } from '../data/translations';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { PageId } from '../router';

interface AboutPageProps {
  currentLang: Language;
  t: Translations;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ t, onNavigate }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        className="mb-8 inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#B69A68] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Overview</span>
      </button>

      {/* Main About Component */}
      <About t={t} />

      {/* Extended Editorial Section: Methodology & Vision */}
      <div className="mt-16 pt-12 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-neutral-800">
          <span className="text-xs font-mono text-[#B69A68] uppercase tracking-wider block mb-2">
            Pedagogical Architecture
          </span>
          <h3 className="text-xl font-serif font-bold text-white mb-3">
            Bridging Academic Theory & Industry Scale
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            In my tenure as an AI & Full-Stack Trainer across premier universities (Ethnotech / Parul University, Allenhouse, Malla Reddy), I structured curriculum modules to emulate enterprise engineering teams. Students don't just write scripts—they understand ASGI event loops, container orchestration, and test suites.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-neutral-800">
          <span className="text-xs font-mono text-[#B69A68] uppercase tracking-wider block mb-2">
            Generative AI Integration
          </span>
          <h3 className="text-xl font-serif font-bold text-white mb-3">
            Applied LLM Systems & Context Engineering
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Moving beyond simple prompt generation, my focus centers on building reliable multi-agent workflows using Claude Code, NVIDIA NIM microservices, and structured JSON tool-calling pipelines. I teach engineers how to make AI deterministic, testable, and production-viable.
          </p>
        </div>
      </div>
    </div>
  );
};
