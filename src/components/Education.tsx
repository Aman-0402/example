import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Building,
  ExternalLink,
  X,
  FileCheck
} from 'lucide-react';
import {
  EDUCATION_ITEMS,
  CERTIFICATIONS,
  WORKSHOPS,
  CertificationItem,
  WorkshopItem
} from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface EducationProps {
  currentLang: Language;
  t: Translations;
}

export const Education: React.FC<EducationProps> = ({ t }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.education.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight text-balance">
          {t.education.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          {t.education.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Academic Background (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-[#B69A68]" />
            <h3 className="text-lg font-serif font-bold text-current">
              {t.education.academicHistoryTitle}
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {EDUCATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-serif font-bold text-neutral-100">
                    {item.degree}
                  </h4>
                  <p className="text-xs font-medium text-neutral-400 mt-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    {item.location}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    {item.scoreType}
                  </span>
                  <span className="text-sm font-mono font-bold text-[#B69A68] tabular-nums">
                    {item.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Specialized Workshops & Industrial Training */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Building className="w-4 h-4 text-[#B69A68]" />
              <h3 className="text-base font-serif font-bold text-current">
                {t.education.workshopsTitle}
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {WORKSHOPS.map((workshop, wIdx) => (
                <div
                  key={wIdx}
                  className="p-4 rounded-xl bg-[#171717] border border-neutral-800/80 flex items-start justify-between gap-3"
                >
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-neutral-200">
                      {workshop.title}
                    </h5>
                    <p className="text-xs text-[#B69A68] mt-0.5">
                      {workshop.organization} {workshop.location && `· ${workshop.location}`}
                    </p>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-[11px] font-mono text-neutral-400">
                      {workshop.period}
                    </span>
                    {workshop.hasCertificate && (
                      <button
                        onClick={() => setSelectedWorkshop(workshop)}
                        className="text-[10px] font-mono text-[#B69A68] hover:underline mt-1 flex items-center gap-1"
                      >
                        <FileCheck className="w-3 h-3" />
                        <span>View</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Professional Certifications Grid (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#B69A68]" />
              <h3 className="text-lg font-serif font-bold text-current">
                {t.education.certificationsTitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              {CERTIFICATIONS.length} Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CERTIFICATIONS.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B69A68]">
                      {cert.issuer}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#B69A68] transition-colors shrink-0" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Official Credential
                  </span>
                  {cert.hasViewCertificate ? (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-[11px] font-medium text-[#B69A68] hover:text-[#D4BC8B] transition-colors flex items-center gap-1"
                    >
                      <span>{t.education.viewCertificateAction}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-neutral-500">Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-neutral-500 leading-relaxed mt-2">
            {t.education.certificateNotice}
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      {(selectedCert || selectedWorkshop) && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => {
            setSelectedCert(null);
            setSelectedWorkshop(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md bg-[#1C1C1C] rounded-3xl border border-[#B69A68]/40 shadow-2xl p-6 sm:p-7 text-[#F7F4ED] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedCert(null);
                setSelectedWorkshop(null);
              }}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#242424] text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] mb-4">
              <Award className="w-5 h-5" />
            </div>

            <span className="text-xs font-mono text-[#B69A68] uppercase tracking-wider block">
              {selectedCert ? selectedCert.issuer : selectedWorkshop?.organization}
            </span>
            <h3 className="text-lg font-serif font-bold text-white mt-1">
              {selectedCert ? selectedCert.title : selectedWorkshop?.title}
            </h3>

            <div className="mt-4 p-4 rounded-xl bg-[#141414] border border-neutral-800 text-xs text-neutral-300 space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Recipient:</span>
                <span className="font-semibold">Aman Raj</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Status:</span>
                <span className="text-[#B69A68] font-semibold">Verified Completion</span>
              </div>
              {selectedWorkshop && (
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-mono">Period:</span>
                  <span>{selectedWorkshop.period}</span>
                </div>
              )}
            </div>

            <p className="mt-4 text-xs text-neutral-400 font-mono leading-relaxed">
              To link your official certificate PDF or verification URL directly, update the credentialUrl in portfolioData.ts.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setSelectedCert(null);
                  setSelectedWorkshop(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#B69A68] text-[#121212] hover:bg-[#D4BC8B] transition-colors"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
