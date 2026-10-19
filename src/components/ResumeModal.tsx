import React from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  ShieldCheck,
  FileText,
  AlertCircle
} from 'lucide-react';
import { PORTFOLIO_CONFIG, EXPERIENCES, PROJECTS, EDUCATION_ITEMS, CERTIFICATIONS, WORKSHOPS } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  currentLang: Language;
  t: Translations;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onDownload,
  t
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#1C1C1C] rounded-3xl border border-[#B69A68]/40 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-[#242424] border-b border-neutral-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1C1C1C] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-title" className="text-sm sm:text-base font-serif font-bold text-white">
                {t.resume.modalTitle}
              </h3>
              <span className="text-[11px] font-mono text-[#B69A68]">
                Verified Source of Truth
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#1C1C1C] hover:bg-neutral-800 border border-neutral-700/60 text-neutral-300 hover:text-white transition-colors hidden sm:inline-flex"
              title={t.resume.printAction}
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onDownload}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#B69A68] hover:bg-[#D4BC8B] text-[#121212] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resume.downloadAction}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1C1C1C] hover:bg-neutral-800 border border-neutral-700/60 text-neutral-400 hover:text-white transition-colors"
              aria-label={t.resume.closeAction}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Config / PDF setup banner */}
        <div className="px-5 py-3 bg-[#B69A68]/10 border-b border-[#B69A68]/20 flex items-start gap-2.5 text-xs text-neutral-300">
          <AlertCircle className="w-4 h-4 text-[#B69A68] shrink-0 mt-0.5" />
          <div className="text-[11px] font-mono leading-relaxed">
            <strong className="text-[#B69A68]">{t.resume.setupNoteTitle}:</strong> {t.resume.setupNoteBody}
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-[#242424] font-sans selection:bg-[#B69A68]/30">
          {/* Document Header */}
          <div className="border-b-2 border-[#242424] pb-4 mb-6">
            <h1 className="text-3xl font-serif font-bold text-[#121212] tracking-tight">
              {PORTFOLIO_CONFIG.name.toUpperCase()}
            </h1>
            <p className="text-sm font-semibold text-[#B69A68] mt-0.5">
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

          {/* About Me Section */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              ABOUT ME
            </h2>
            <p className="text-xs leading-relaxed text-neutral-800">
              {PORTFOLIO_CONFIG.shortIntro} Over 3 years of combined industry and training experience.
            </p>
          </div>

          {/* Professional Experience Section */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline text-xs font-bold text-neutral-900">
                    <span>{exp.role}</span>
                    <span className="font-mono text-neutral-600">{exp.period}</span>
                  </div>
                  <div className="text-xs italic text-neutral-700 mb-1">
                    {exp.company} {exp.location && `· ${exp.location}`}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-800 leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline text-xs font-bold text-neutral-900">
                    <span>{proj.title} — {proj.tagline}</span>
                  </div>
                  <div className="text-[11px] font-mono text-blue-700 mb-1 flex items-center gap-2">
                    {proj.liveUrl && <span>Live: {proj.liveUrl}</span>}
                    <span>GitHub: {proj.githubUrl}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-800 leading-relaxed">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="text-[10px] font-mono text-neutral-600 mt-1">
                    Stack: {proj.stack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
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

          {/* Certifications Section */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              CERTIFICATIONS & TRAINING
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-neutral-800">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i}>
                  • {c.title} — <span className="text-neutral-600">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
