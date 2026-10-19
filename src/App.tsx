import React, { useState, useEffect } from 'react';
import { MonogramIntro } from './components/MonogramIntro';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AssetSetupModal } from './components/AssetSetupModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { JourneyPage } from './pages/JourneyPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';
import { ResumePage } from './pages/ResumePage';
import { useAppRouter, PageId } from './router';
import { TRANSLATIONS, Language } from './data/translations';
import { downloadOfficialResume } from './utils/resumeDownload';

export default function App() {
  const { currentPage, navigate } = useAppRouter();

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

  const renderActivePage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'journey':
        return <JourneyPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'skills':
        return <SkillsPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'projects':
        return <ProjectsPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'achievements':
        return <AchievementsPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'education':
        return <EducationPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'contact':
        return <ContactPage currentLang={currentLang} t={t} onNavigate={navigate} />;
      case 'resume':
        return (
          <ResumePage
            currentLang={currentLang}
            t={t}
            onNavigate={navigate}
            onDownloadResume={downloadOfficialResume}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            currentLang={currentLang}
            t={t}
            onNavigate={navigate}
            onOpenResume={() => setIsResumeOpen(true)}
            onDownloadResume={downloadOfficialResume}
            onOpenPhotoConfig={() => setIsPhotoConfigOpen(true)}
            customPortraitUrl={customPortraitUrl}
          />
        );
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans flex flex-col justify-between ${
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
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Multi-Page Routed View */}
      <main className="w-full flex-1">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onReplayIntro={handleReplayIntro}
        onNavigate={navigate}
      />

      {/* In-app Quick Resume Modal (available from any page) */}
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
