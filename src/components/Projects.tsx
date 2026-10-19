import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  QrCode,
  ShieldAlert,
  MessageSquare,
  MapPin,
  Check,
  Maximize2,
  X,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface ProjectsProps {
  currentLang: Language;
  t: Translations;
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang, t }) => {
  const [filter, setFilter] = useState<'all' | 'saas' | 'realtime' | 'marketplace'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // Render stylized interactive visualizer preview for each project
  const renderProjectVisualizer = (project: ProjectItem) => {
    switch (project.id) {
      case 'classpulse':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#1C1C1C] via-[#141414] to-[#0D0D0D] p-5 flex flex-col justify-between overflow-hidden group/viz border-b border-neutral-800">
            {/* Top status bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-[#B69A68]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69A68] animate-pulse" />
                Channels WebSocket Active
              </span>
              <span className="text-neutral-500">TTL: 15s</span>
            </div>

            {/* Visual simulation: Rotating QR & Scan count */}
            <div className="flex items-center justify-around my-auto">
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#B69A68]/40 shadow-md group-hover/viz:scale-105 transition-transform flex flex-col items-center">
                <QrCode className="w-12 h-12 text-[#B69A68]" />
                <span className="text-[9px] font-mono text-neutral-400 mt-1">AUTO-ROTATE</span>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <span className="text-xs font-mono text-neutral-400">Live Scans Ingested</span>
                <span className="text-2xl font-serif font-bold text-[#F7F4ED] tabular-nums">
                  1,482 <span className="text-xs text-[#B69A68] font-sans font-normal">/ Verified</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Anti-Proxy Active</span>
              </div>
            </div>

            {/* Bottom info */}
            <div className="text-[10px] font-mono text-neutral-500 truncate">
              Django Channels ASGI · Server Token Validation · ReportLab
            </div>
          </div>
        );

      case 'certibyt':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#1C1C1C] via-[#151515] to-[#0E0E0E] p-5 flex flex-col justify-between overflow-hidden group/viz border-b border-neutral-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-[#B69A68]">Multi-Tenant SaaS</span>
              <span className="text-emerald-400">186 Tests Passing</span>
            </div>

            <div className="flex items-center justify-between gap-3 my-auto">
              <div className="p-3 rounded-xl bg-[#242424] border border-neutral-800 flex-1 text-center">
                <ShieldAlert className="w-6 h-6 text-[#B69A68] mx-auto mb-1" />
                <span className="text-[10px] font-mono text-neutral-300 block">Proctor Engine</span>
                <span className="text-[9px] text-neutral-500">Tab-Switch Monitor</span>
              </div>
              <div className="p-3 rounded-xl bg-[#242424] border border-neutral-800 flex-1 text-center">
                <Layers className="w-6 h-6 text-[#B69A68] mx-auto mb-1" />
                <span className="text-[10px] font-mono text-neutral-300 block">RBAC Portals</span>
                <span className="text-[9px] text-neutral-500">Super/Org/Candidate</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 truncate">
              Live at certibyt.com · MariaDB · ReportLab Vector Certificates
            </div>
          </div>
        );

      case 'consultme':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#1C1C1C] via-[#141414] to-[#0F0F0F] p-5 flex flex-col justify-between overflow-hidden group/viz border-b border-neutral-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-[#B69A68]">Marketplace & Escrow</span>
              <span className="text-neutral-400">Redis Broker</span>
            </div>

            <div className="flex items-center justify-between gap-4 my-auto">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-neutral-200 block">Live Chat</span>
                  <span className="text-[10px] text-neutral-400">WebSocket + Redis</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-[#B69A68] uppercase block">Escrow Flow</span>
                <span className="text-sm font-semibold text-neutral-200">Locked Funds</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 truncate">
              Live at consultmee.in · Celery Worker · GST & Platform Fee
            </div>
          </div>
        );

      case 'urbanease':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#1C1C1C] via-[#161616] to-[#0D0D0D] p-5 flex flex-col justify-between overflow-hidden group/viz border-b border-neutral-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-[#B69A68]">Hyperlocal Discovery</span>
              <span className="text-neutral-400">Haversine SQL</span>
            </div>

            <div className="flex items-center justify-between gap-3 my-auto">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-200 block">Proximity Sorting</span>
                  <span className="text-[10px] text-neutral-400">Browser Geolocation API</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono text-neutral-500">Booking Pipeline</span>
                <span className="text-xs font-mono text-[#B69A68]">5-Stage State</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 truncate">
              Django signals · Provider Earnings Ledger · Zustand
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Header */}
      <div className="flex flex-col items-start mb-10">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.projects.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight text-balance">
          {t.projects.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#1A1A1A] border border-neutral-800 mb-10 overflow-x-auto max-w-full">
        <button
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
            filter === 'all'
              ? 'bg-[#B69A68] text-[#121212] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          {t.projects.filterAll}
        </button>
        <button
          onClick={() => setFilter('saas')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
            filter === 'saas'
              ? 'bg-[#B69A68] text-[#121212] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          {t.projects.filterSaas}
        </button>
        <button
          onClick={() => setFilter('realtime')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
            filter === 'realtime'
              ? 'bg-[#B69A68] text-[#121212] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          {t.projects.filterRealtime}
        </button>
        <button
          onClick={() => setFilter('marketplace')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
            filter === 'marketplace'
              ? 'bg-[#B69A68] text-[#121212] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          {t.projects.filterMarketplace}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
          >
            {/* Top Interactive Visualizer */}
            <div className="relative">
              {renderProjectVisualizer(project)}
              <button
                onClick={() => setActiveModalProject(project)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-[#B69A68] text-white hover:text-[#121212] backdrop-blur-md transition-colors"
                title={t.projects.openDetails}
                aria-label={`Open details for ${project.title}`}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                {/* Clean unboxed category & title */}
                <div className="text-xs font-mono text-[#B69A68] mb-1">
                  {project.categoryLabel}
                </div>
                <h3 className="text-xl font-serif font-bold text-current group-hover:text-[#B69A68] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-neutral-400 mt-1 italic">
                  {project.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights list */}
                <ul className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B69A68] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom footer: Tech stack + Action buttons */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                {/* Tech tags (Zero-Pill discipline: unboxed text with / separator) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-neutral-400 mb-4">
                  {project.stack.map((tech, tIndex) => (
                    <React.Fragment key={tIndex}>
                      <span>{tech}</span>
                      {tIndex < project.stack.length - 1 && (
                        <span className="text-neutral-600" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3">
                  {/* Left: Open modal breakdown button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-medium text-[#B69A68] hover:text-[#D4BC8B] transition-colors flex items-center gap-1"
                  >
                    <span>{t.projects.openDetails}</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  {/* Right: Live and Source buttons */}
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#B69A68] hover:bg-[#D4BC8B] text-[#121212] transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-neutral-700/80 hover:border-[#B69A68] text-neutral-300 hover:text-white transition-colors"
                      title={t.projects.viewSource}
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="relative w-full max-w-2xl bg-[#1C1C1C] rounded-3xl border border-[#B69A68]/40 shadow-2xl p-6 sm:p-8 text-[#F7F4ED] my-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#242424] text-neutral-400 hover:text-white hover:border-[#B69A68] border border-neutral-700/60 transition-colors"
              aria-label={t.projects.closeModal}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs font-mono text-[#B69A68] uppercase tracking-wider">
                {activeModalProject.categoryLabel}
              </span>
              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-medium text-[#D4BC8B] mt-0.5">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Quick Stats Grid */}
            {activeModalProject.stats && (
              <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-[#141414] border border-neutral-800">
                {activeModalProject.stats.map((s, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                      {s.label}
                    </span>
                    <span className="text-base font-serif font-bold text-[#B69A68]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Full Description */}
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Verified Engineering Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#B69A68] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.projects.highlightsHeader}</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#B69A68] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Architecture Notes */}
            {activeModalProject.architectureNotes && (
              <div className="mb-6 p-4 rounded-xl bg-[#161616] border border-neutral-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#B69A68]" />
                  <span>{t.projects.architectureHeader}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-400 font-mono">
                  {activeModalProject.architectureNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B69A68]">›</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                {t.projects.stackHeader}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#242424] border border-neutral-700/60 text-xs font-mono text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between gap-4">
              <span className="text-xs text-neutral-500 font-mono">
                Source verified on GitHub
              </span>
              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#B69A68] hover:bg-[#D4BC8B] text-[#121212] transition-colors inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.projects.viewLive}</span>
                  </a>
                )}
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-neutral-700 hover:border-[#B69A68] text-white transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.projects.viewSource}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
