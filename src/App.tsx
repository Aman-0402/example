import React, { useState, useEffect } from 'react';
import { MonogramIntro } from './components/MonogramIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AssetSetupModal } from './components/AssetSetupModal';
import { TRANSLATIONS, Language } from './data/translations';
import { downloadOfficialResume } from './utils/resumeDownload';

export default function App() {
  // Theme state: Dark mode by default, persisted locally
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('ar_portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default dark
  });

  // Language state: English by default, persisted locally
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ar_portfolio_lang') as Language;
    if (saved === 'hi' || saved === 'en') {
      return saved;
    }
    return 'en';
  });

  // Monogram intro state
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Only show on first session load
    return sessionStorage.getItem('ar_monogram_shown') !== 'true';
  });

  // Modal states
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPhotoConfigOpen, setIsPhotoConfigOpen] = useState(false);

  // Custom portrait URL persisted in localStorage
  const [customPortraitUrl, setCustomPortraitUrl] = useState<string | null>(() => {
    return localStorage.getItem('ar_portrait_url') || null;
  });

  // Sync theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('ar_portfolio_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Sync language persistence
  useEffect(() => {
    localStorage.setItem('ar_portfolio_lang', currentLang);
  }, [currentLang]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('ar_monogram_shown', 'true');
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  const handleSavePortraitUrl = (url: string | null) => {
    setCustomPortraitUrl(url);
    if (url) {
      localStorage.setItem('ar_portrait_url', url);
    } else {
      localStorage.removeItem('ar_portrait_url');
    }
  };

  const t = TRANSLATIONS[currentLang];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDark ? 'bg-[#121212] text-[#F7F4ED]' : 'bg-[#F7F4ED] text-[#242424]'
      }`}
    >
      {/* Monogram Intro Animation */}
      {showIntro && (
        <MonogramIntro
          onComplete={handleIntroComplete}
          isDark={isDark}
        />
      )}

      {/* Floating Top Navigation Capsule */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLang}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        t={t}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          t={t}
          onOpenResume={() => setIsResumeOpen(true)}
          onDownloadResume={downloadOfficialResume}
          onOpenPhotoConfig={() => setIsPhotoConfigOpen(true)}
          customPortraitUrl={customPortraitUrl}
        />

        {/* About Section */}
        <About t={t} />

        {/* Career Journey Timeline */}
        <Journey currentLang={currentLang} t={t} />

        {/* Skills & Technologies Grid */}
        <Skills currentLang={currentLang} t={t} />

        {/* Selected Projects Gallery */}
        <Projects currentLang={currentLang} t={t} />

        {/* Verified Achievements & Impact */}
        <Achievements currentLang={currentLang} t={t} />

        {/* Education, Certifications & Workshops */}
        <Education currentLang={currentLang} t={t} />

        {/* Direct Contact (Form-free) */}
        <Contact currentLang={currentLang} t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} onReplayIntro={handleReplayIntro} />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownload={downloadOfficialResume}
        currentLang={currentLang}
        t={t}
      />

      {/* Asset Setup & Portrait Customization Modal */}
      <AssetSetupModal
        isOpen={isPhotoConfigOpen}
        onClose={() => setIsPhotoConfigOpen(false)}
        currentPortraitUrl={customPortraitUrl}
        onSavePortraitUrl={handleSavePortraitUrl}
      />
    </div>
  );
}
