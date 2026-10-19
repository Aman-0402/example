import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Code,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Language, Translations } from '../data/translations';

interface ContactProps {
  currentLang: Language;
  t: Translations;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: t.contact.emailLabel,
      value: PORTFOLIO_CONFIG.contact.email,
      href: `mailto:${PORTFOLIO_CONFIG.contact.email}`,
      actionType: 'copy-link',
      badge: 'Primary Inquiries'
    },
    {
      id: 'phone',
      icon: Phone,
      label: t.contact.phoneLabel,
      value: PORTFOLIO_CONFIG.contact.phone,
      href: `tel:${PORTFOLIO_CONFIG.contact.rawPhone}`,
      actionType: 'copy-link',
      badge: 'Direct Line'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: '+91 9852104967 (Chat)',
      href: PORTFOLIO_CONFIG.contact.whatsapp,
      actionType: 'external',
      badge: 'Instant Chat'
    },
    {
      id: 'location',
      icon: MapPin,
      label: t.contact.locationLabel,
      value: PORTFOLIO_CONFIG.contact.location,
      actionType: 'info',
      badge: 'Residence'
    }
  ];

  const socialProfiles = [
    {
      name: 'GitHub',
      handle: 'github.com/Aman-0402',
      url: PORTFOLIO_CONFIG.contact.github,
      icon: Github,
      desc: 'Open source repositories, Django Channels & React codebases'
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/aman-raj',
      url: PORTFOLIO_CONFIG.contact.linkedin,
      icon: Linkedin,
      desc: 'Professional network, academic training updates & endorsements'
    },
    {
      name: 'LeetCode',
      handle: 'leetcode.com/u/Aman-0402',
      url: PORTFOLIO_CONFIG.contact.leetcode,
      icon: Code,
      desc: 'Data structures, algorithm problem solving & competitive coding'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-xs font-mono tracking-widest uppercase text-[#B69A68] mb-2">
          {t.contact.sectionTag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-current tracking-tight text-balance">
          {t.contact.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Communication Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isCopied = copiedKey === method.id;

            return (
              <div
                key={method.id}
                className="p-5 rounded-2xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#B69A68] uppercase tracking-wider">
                      {method.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 block">
                    {method.label}
                  </span>
                  <div className="text-sm font-semibold text-neutral-100 mt-1 font-mono break-all">
                    {method.value}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between gap-2">
                  {method.actionType === 'copy-link' && (
                    <>
                      <button
                        onClick={() => handleCopy(method.value, method.id)}
                        className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">{t.contact.copiedNotice}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#B69A68]" />
                            <span>{t.contact.copyAction}</span>
                          </>
                        )}
                      </button>

                      {method.href && (
                        <a
                          href={method.href}
                          className="text-xs font-semibold text-[#B69A68] hover:text-[#D4BC8B] transition-colors flex items-center gap-1"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </>
                  )}

                  {method.actionType === 'external' && method.href && (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#B69A68] hover:text-[#D4BC8B] transition-colors flex items-center gap-1 w-full justify-between"
                    >
                      <span>Start Conversation</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {method.actionType === 'info' && (
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B69A68]" />
                      <span>Verified On Resume</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Verified Profiles (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">
            Verified Engineering Networks
          </span>

          {socialProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#1A1A1A] border border-neutral-800/80 hover:border-[#B69A68]/50 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68] shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-neutral-100 group-hover:text-[#B69A68] transition-colors">
                      {profile.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#B69A68] transition-colors" />
                  </div>
                  <p className="text-xs font-mono text-[#B69A68] mt-0.5 truncate">
                    {profile.handle}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              </a>
            );
          })}

          <div className="p-4 rounded-xl bg-[#161616] border border-neutral-800 text-xs font-mono text-neutral-400 leading-relaxed">
            {t.contact.directChannelNote}
          </div>
        </div>
      </div>
    </section>
  );
};
