import React from 'react';
import { ArrowLeft, Download, Printer, ShieldCheck, AlertCircle } from 'lucide-react';
import { PORTFOLIO_CONFIG, EXPERIENCES, PROJECTS, EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import { Translations, Language } from '../data/translations';
import { PageId } from '../router';

interface ResumePageProps {
  currentLang: Language;
  t: Translations;
  onNavigate: (page: PageId) => void;
  onDownloadResume: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({
  t,
  onNavigate,
  onDownloadResume
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto w-full">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#B69A68] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-[#242424] hover:bg-neutral-800 border border-neutral-700/60 text-xs font-mono text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print Document</span>
          </button>
          <button
            onClick={onDownloadResume}
            className="px-4 py-2 rounded-xl bg-[#B69A68] hover:bg-[#D4BC8B] text-[#121212] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{t.resume.downloadAction}</span>
          </button>
        </div>
      </div>

      {/* Setup Guide Banner */}
      <div className="p-4 rounded-2xl bg-[#B69A68]/10 border border-[#B69A68]/20 flex items-start gap-3 mb-8 text-xs text-neutral-300">
        <AlertCircle className="w-4 h-4 text-[#B69A68] shrink-0 mt-0.5" />
        <div className="text-[11px] font-mono leading-relaxed">
          <strong className="text-[#B69A68]">{t.resume.setupNoteTitle}:</strong> {t.resume.setupNoteBody}
        </div>
      </div>

      {/* Formatted Resume Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white text-[#242424] shadow-2xl border border-neutral-200">
        {/* Header */}
        <div className="border-b-2 border-[#242424] pb-5 mb-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#121212] tracking-tight">
            {PORTFOLIO_CONFIG.name.toUpperCase()}
          </h1>
          <p className="text-base font-semibold text-[#B69A68] mt-1">
            {PORTFOLIO_CONFIG.headline}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-600 mt-2">
            <span>{PORTFOLIO_CONFIG.contact.phone}</span>
            <span>·</span>
            <a href={`mailto:${PORTFOLIO_CONFIG.contact.email}`} className="text-blue-700 hover:underline">
              {PORTFOLIO_CONFIG.contact.email}
            </a>
            <span>·</span>
            <span>{PORTFOLIO_CONFIG.contact.location}</span>
            <span>·</span>
            <a href={PORTFOLIO_CONFIG.contact.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              GitHub
            </a>
            <span>·</span>
            <a href={PORTFOLIO_CONFIG.contact.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              LinkedIn
            </a>
            <span>·</span>
            <a href={PORTFOLIO_CONFIG.contact.leetcode} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              LeetCode
            </a>
          </div>
        </div>

        {/* About Me */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
            ABOUT ME
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-neutral-800">
            {PORTFOLIO_CONFIG.shortIntro} Over 3 years of combined industry and training experience.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-neutral-900">
                  <span>{exp.role}</span>
                  <span className="font-mono text-xs text-neutral-600">{exp.period}</span>
                </div>
                <div className="text-xs italic text-neutral-700 mb-1">
                  {exp.company} {exp.location && `· ${exp.location}`}
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 leading-relaxed">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
            PROJECTS
          </h2>
          <div className="space-y-4">
            {PROJECTS.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-neutral-900">
                  <span>{proj.title} — {proj.tagline}</span>
                </div>
                <div className="text-xs font-mono text-blue-700 mb-1 flex items-center gap-2">
                  {proj.liveUrl && <span>Live: {proj.liveUrl}</span>}
                  <span>GitHub: {proj.githubUrl}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 leading-relaxed">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="text-[11px] font-mono text-neutral-600 mt-1">
                  Stack: {proj.stack.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
            EDUCATION
          </h2>
          <div className="space-y-2 text-xs">
            {EDUCATION_ITEMS.map((edu, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <span className="font-bold text-neutral-900">{edu.degree}</span>
                  <div className="text-[11px] text-neutral-700">{edu.institution}, {edu.location}</div>
                </div>
                <span className="font-mono text-neutral-900 font-semibold">{edu.scoreType}: {edu.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
            CERTIFICATIONS & TRAINING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-neutral-800">
            {CERTIFICATIONS.map((c, i) => (
              <div key={i}>
                • {c.title} — <span className="text-neutral-600">{c.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
