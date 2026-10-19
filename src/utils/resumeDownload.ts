import { PORTFOLIO_CONFIG, EXPERIENCES, PROJECTS, EDUCATION_ITEMS, CERTIFICATIONS, WORKSHOPS } from '../data/portfolioData';

export const downloadOfficialResume = async () => {
  try {
    // Attempt to fetch from static assets first
    const response = await fetch('/assets/Aman_Raj_Resume.pdf', { method: 'HEAD' });
    if (response.ok) {
      const link = document.createElement('a');
      link.href = '/assets/Aman_Raj_Resume.pdf';
      link.download = 'Aman_Raj_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch (e) {
    // Fall back to generated document
  }

  // Generate authentic formatted resume document
  const resumeText = `${PORTFOLIO_CONFIG.name.toUpperCase()}
${PORTFOLIO_CONFIG.headline}
Phone: ${PORTFOLIO_CONFIG.contact.phone} | Email: ${PORTFOLIO_CONFIG.contact.email} | Location: ${PORTFOLIO_CONFIG.contact.location}
GitHub: ${PORTFOLIO_CONFIG.contact.github} | LinkedIn: ${PORTFOLIO_CONFIG.contact.linkedin} | LeetCode: ${PORTFOLIO_CONFIG.contact.leetcode}

================================================================================
ABOUT ME
================================================================================
${PORTFOLIO_CONFIG.shortIntro} Over 3 years of combined industry and training experience.

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
${EXPERIENCES.map((exp) => `
${exp.role.toUpperCase()}
${exp.company} ${exp.location ? `· ${exp.location}` : ''} | ${exp.period}
${exp.bullets.map((b) => `• ${b}`).join('\n')}
Skills: ${exp.skills.join(', ')}
`).join('\n')}

================================================================================
PROJECTS
================================================================================
${PROJECTS.map((p) => `
${p.title.toUpperCase()} — ${p.tagline}
Category: ${p.categoryLabel}
${p.liveUrl ? `Live URL: ${p.liveUrl}\n` : ''}Repository: ${p.githubUrl}
Stack: ${p.stack.join(' · ')}
${p.highlights.map((h) => `• ${h}`).join('\n')}
`).join('\n')}

================================================================================
EDUCATION
================================================================================
${EDUCATION_ITEMS.map((edu) => `
• ${edu.degree}
  ${edu.institution}, ${edu.location}
  ${edu.scoreType}: ${edu.score}
`).join('\n')}

================================================================================
CERTIFICATIONS & TRAINING
================================================================================
Certifications:
${CERTIFICATIONS.map((c) => `• ${c.title} — ${c.issuer}`).join('\n')}

Workshops & Industrial Training:
${WORKSHOPS.map((w) => `• ${w.title} — ${w.organization} (${w.period})`).join('\n')}
`;

  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Aman_Raj_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
