import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Achievements } from '../components/Achievements';
import { Translations, Language } from '../data/translations';
import { PageId } from '../router';

interface AchievementsPageProps {
  currentLang: Language;
  t: Translations;
  onNavigate: (page: PageId) => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ currentLang, t, onNavigate }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <button
        onClick={() => onNavigate('home')}
        className="mb-8 inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#B69A68] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Overview</span>
      </button>

      {/* Main Achievements Component */}
      <Achievements currentLang={currentLang} t={t} />
    </div>
  );
};
