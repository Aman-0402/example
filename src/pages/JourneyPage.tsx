import React from 'react';
import { ArrowLeft, Briefcase, Calendar, MapPin, ShieldCheck } from 'lucide-react';
import { Journey } from '../components/Journey';
import { Translations, Language } from '../data/translations';
import { PageId } from '../router';

interface JourneyPageProps {
  currentLang: Language;
  t: Translations;
  onNavigate: (page: PageId) => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ currentLang, t, onNavigate }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <button
        onClick={() => onNavigate('home')}
        className="mb-8 inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#B69A68] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Overview</span>
      </button>

      {/* Main Journey Component */}
      <Journey currentLang={currentLang} t={t} />

      {/* Summary Note */}
      <div className="mt-14 p-6 rounded-2xl bg-[#1A1A1A] border border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#B69A68]" />
          <span>All 6 positions strictly verified against official corporate and academic records.</span>
        </span>
        <button
          onClick={() => onNavigate('projects')}
          className="text-[#B69A68] hover:underline"
        >
          View Associated Projects →
        </button>
      </div>
    </div>
  );
};
