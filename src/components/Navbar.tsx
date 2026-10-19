import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X, FileText } from 'lucide-react';
import { Language, Translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  t: Translations;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  isDark,
  onToggleTheme,
  t,
  onOpenResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['home', 'about', 'journey', 'skills', 'projects', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'journey', label: t.nav.journey },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'achievements', label: t.nav.achievements },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 sm:px-6 md:px-8 ${
          isScrolled
            ? 'backdrop-blur-md bg-[#121212]/85 dark:bg-[#121212]/85 border-b border-[#B69A68]/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark / AR Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A68]"
            aria-label="Aman Raj Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#242424] border border-[#B69A68]/40 flex items-center justify-center font-serif font-bold text-sm text-[#B69A68] transition-transform group-hover:scale-105">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-current whitespace-nowrap">
                Aman Raj
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wide -mt-0.5 whitespace-nowrap hidden sm:inline">
                AI & Full-Stack
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-medium text-neutral-400 dark:text-neutral-300"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#B69A68] ${
                    isActive ? 'text-[#B69A68] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B69A68] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Interactive Controls (Lang, Theme, Resume, Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono border border-neutral-700/60 hover:border-[#B69A68]/60 transition-colors bg-[#242424]/40"
              title={currentLang === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#B69A68]" />
              <span className="font-semibold text-current">
                {currentLang === 'en' ? 'HI' : 'EN'}
              </span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
              className="p-1.5 rounded-lg border border-neutral-700/60 hover:border-[#B69A68]/60 transition-colors bg-[#242424]/40 text-current"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#D4BC8B]" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>

            {/* Quick Resume Action */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#121212] bg-[#B69A68] hover:bg-[#D4BC8B] transition-colors whitespace-nowrap shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.nav.viewResume}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg border border-neutral-700/60 text-current hover:border-[#B69A68]"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 right-4 left-4 p-5 rounded-2xl bg-[#1C1C1C] text-[#F7F4ED] border border-[#B69A68]/30 shadow-2xl flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69A68]">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#B69A68]/15 text-[#B69A68]'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-[#121212] bg-[#B69A68] hover:bg-[#D4BC8B] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.viewResume}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
