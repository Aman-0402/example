export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    home: string;
    about: string;
    journey: string;
    skills: string;
    projects: string;
    achievements: string;
    education: string;
    contact: string;
    viewResume: string;
    downloadResume: string;
    themeDark: string;
    themeLight: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    greeting: string;
    roleHeadline: string;
    intro: string;
    availableBadge: string;
    notAvailableBadge: string;
    exploreWork: string;
    viewResume: string;
    downloadResume: string;
    metricsTitle: string;
    portraitAlt: string;
    configurePhoto: string;
  };
  about: {
    sectionTag: string;
    title: string;
    leadParagraph: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
    corePillarsTitle: string;
    pillars: {
      title: string;
      description: string;
    }[];
    quickFacts: {
      label: string;
      value: string;
    }[];
  };
  journey: {
    sectionTag: string;
    title: string;
    subtitle: string;
    present: string;
    viewAllRoles: string;
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategory: string;
    verifiedNote: string;
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterSaas: string;
    filterRealtime: string;
    filterMarketplace: string;
    viewLive: string;
    viewSource: string;
    openDetails: string;
    architectureHeader: string;
    highlightsHeader: string;
    stackHeader: string;
    closeModal: string;
    previewInteraction: string;
  };
  achievements: {
    sectionTag: string;
    title: string;
    subtitle: string;
    verifiedProof: string;
  };
  education: {
    sectionTag: string;
    title: string;
    subtitle: string;
    certificationsTitle: string;
    workshopsTitle: string;
    academicHistoryTitle: string;
    viewCertificateAction: string;
    certificateNotice: string;
    scoreLabel: string;
  };
  resume: {
    modalTitle: string;
    downloadAction: string;
    closeAction: string;
    setupNoteTitle: string;
    setupNoteBody: string;
    printAction: string;
    openInNewTab: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    leetcodeLabel: string;
    whatsappLabel: string;
    copyAction: string;
    copiedNotice: string;
    directChannelNote: string;
  };
  footer: {
    brandStatement: string;
    navigationHeader: string;
    contactHeader: string;
    backToTop: string;
    allRightsReserved: string;
    replayIntro: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      journey: "Journey",
      skills: "Skills",
      projects: "Projects",
      achievements: "Achievements",
      education: "Education & Certs",
      contact: "Contact",
      viewResume: "View Resume",
      downloadResume: "Download Resume",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      openMenu: "Open navigation menu",
      closeMenu: "Close menu"
    },
    hero: {
      greeting: "Hello, I'm Aman Raj",
      roleHeadline: "AI & Full-Stack Trainer · Full-Stack Developer · Corporate L&D",
      intro: "Bridging real-world software engineering with rigorous technical education. I build high-availability web applications and design production-grade curricula across MERN, Django, and Generative AI systems for 2,000+ university and corporate engineers.",
      availableBadge: "Open to Opportunities & Training Engagements",
      notAvailableBadge: "Currently Committed to Active Engagements",
      exploreWork: "Explore Selected Works",
      viewResume: "View Resume",
      downloadResume: "Download Resume",
      metricsTitle: "Verified Career Metrics",
      portraitAlt: "Aman Raj – AI Trainer & Full-Stack Developer",
      configurePhoto: "Replace Portrait"
    },
    about: {
      sectionTag: "About Me",
      title: "Architecting Software & Empowering Next-Gen Engineers",
      leadParagraph: "I am a multidisciplinary technology professional combining hands-on software development with instructional leadership.",
      bodyParagraph1: "With over 3 years of combined industry and training experience, I have trained 2,000+ students and professionals across top institutions like Parul University, Allenhouse Institute, and Malla Reddy College. My philosophy centers on bridging theoretical concepts with deployment-ready systems.",
      bodyParagraph2: "On the engineering side, I specialize in architecting multi-tenant SaaS platforms, real-time WebSocket pipelines, and automated LLM workflows. I treat curriculum engineering with the same architectural rigor as production codebases—structured, verified, and built to scale.",
      corePillarsTitle: "Core Operating Philosophy",
      pillars: [
        {
          title: "Production-Grade Pedagogy",
          description: "No disconnected toy tutorials. Every lecture and lab trains learners on real-world constraints: security, data validation, automated testing, and CI/CD."
        },
        {
          title: "Full-Stack Reliability",
          description: "From ASGI WebSocket consumers in Django Channels to reactive state stores in React and Zustand, building systems that scale deterministically."
        },
        {
          title: "Applied Generative AI",
          description: "Moving beyond naive chat prompts into context engineering, model training pipelines, and production inference using NVIDIA NIM and Anthropic APIs."
        }
      ],
      quickFacts: [
        { label: "Base Location", value: "Vadodara, Gujarat, India" },
        { label: "Focus Domains", value: "Full-Stack, GenAI, Corporate L&D" },
        { label: "Degree", value: "B.Tech in CSE (CGPA 7.86)" },
        { label: "Teaching Reach", value: "2,000+ University Students" }
      ]
    },
    journey: {
      sectionTag: "Career Journey",
      title: "Professional Experience & Engineering Leadership",
      subtitle: "A chronological timeline of training, technical mentorship, and full-stack software development roles.",
      present: "Present",
      viewAllRoles: "All verified roles from resume"
    },
    skills: {
      sectionTag: "Technical Competencies",
      title: "Skills, Frameworks & Tooling",
      subtitle: "Organized inventory of verified technical, algorithmic, and educational capabilities.",
      searchPlaceholder: "Filter technologies (e.g. Python, Django, React, AI)...",
      allCategory: "All Capabilities",
      verifiedNote: "Technologies and tools extracted directly from verified project and training history."
    },
    projects: {
      sectionTag: "Selected Projects",
      title: "Production Architectures & Real-World Systems",
      subtitle: "Interactive portfolio of verified platforms featuring real-time WebSockets, multi-tenant SaaS, and escrow marketplaces.",
      filterAll: "All Projects",
      filterSaas: "SaaS & EdTech",
      filterRealtime: "Real-Time / WebSocket",
      filterMarketplace: "Marketplace & FinTech",
      viewLive: "Visit Live Site",
      viewSource: "View Repository",
      openDetails: "Architecture Breakdown",
      architectureHeader: "System Architecture",
      highlightsHeader: "Verified Engineering Feats",
      stackHeader: "Technologies Employed",
      closeModal: "Close Details",
      previewInteraction: "Interactive System Simulation"
    },
    achievements: {
      sectionTag: "Verified Impact",
      title: "Milestones & Concrete Accomplishments",
      subtitle: "Quantified metrics and institutional accomplishments drawn from verified career records.",
      verifiedProof: "Factual achievements verified against academic transcripts and corporate records."
    },
    education: {
      sectionTag: "Credentials",
      title: "Education, Certifications & Training",
      subtitle: "Academic foundation, industry certifications, and specialized technical workshops.",
      certificationsTitle: "Professional Certifications",
      workshopsTitle: "Workshops & Industrial Training",
      academicHistoryTitle: "Academic Background",
      viewCertificateAction: "View Certificate",
      certificateNotice: "Certificate verification links are configured according to official issuing credentials.",
      scoreLabel: "Grade / Result"
    },
    resume: {
      modalTitle: "Aman Raj — Professional Resume",
      downloadAction: "Download Official PDF",
      closeAction: "Close Viewer",
      setupNoteTitle: "Resume Asset Integration",
      setupNoteBody: "To view your official PDF, place your file at '/public/assets/Aman_Raj_Resume.pdf'. Below is the verified resume text extracted directly from your document.",
      printAction: "Print Resume",
      openInNewTab: "Open Full View"
    },
    contact: {
      sectionTag: "Direct Contact",
      title: "Get in Touch",
      subtitle: "Direct channels for technical training inquiries, consulting engagements, or software engineering roles. No intermediaries or contact forms.",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Current Location",
      githubLabel: "GitHub Profile",
      linkedinLabel: "LinkedIn Network",
      leetcodeLabel: "LeetCode Profile",
      whatsappLabel: "WhatsApp Message",
      copyAction: "Copy to Clipboard",
      copiedNotice: "Copied to clipboard!",
      directChannelNote: "Direct outreach ensures fastest turnaround for L&D programs, workshops, and engineering discussions."
    },
    footer: {
      brandStatement: "Aman Raj · Multidisciplinary technologist combining full-stack software development with enterprise technical training.",
      navigationHeader: "Navigation",
      contactHeader: "Direct Inquiries",
      backToTop: "Back to Top",
      allRightsReserved: "All rights reserved. Built with precision and factual accuracy.",
      replayIntro: "Replay Monogram Intro"
    }
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "परिचय",
      journey: "करियर यात्रा",
      skills: "कौशल",
      projects: "परियोजनाएं",
      achievements: "उपलब्धियां",
      education: "शिक्षा व प्रमाणन",
      contact: "संपर्क करें",
      viewResume: "बायोडाटा देखें",
      downloadResume: "बायोडाटा डाउनलोड करें",
      themeDark: "डार्क मोड",
      themeLight: "लाइट मोड",
      openMenu: "मेन्यू खोलें",
      closeMenu: "मेन्यू बंद करें"
    },
    hero: {
      greeting: "नमस्ते, मैं अमन राज हूँ",
      roleHeadline: "AI और फुल-स्टैक ट्रेनर · फुल-स्टैक डेवलपर · कॉर्पोरेट L&D",
      intro: "व्यावहारिक सॉफ्टवेयर इंजीनियरिंग और उच्चस्तरीय तकनीकी शिक्षा का संगम। मैं उच्च-उपलब्धता वाले वेब एप्लिकेशन बनाता हूँ और MERN, Django, तथा जेनरेटिव AI सिस्टम्स पर आधारित 2,000+ विश्वविद्यालय और कॉर्पोरेट छात्रों के लिए पाठ्यक्रम डिजाइन करता हूँ।",
      availableBadge: "नई भूमिकाओं और L&D अवसरों के लिए उपलब्ध",
      notAvailableBadge: "वर्तमान में सक्रिय परियोजनाओं में व्यस्त",
      exploreWork: "प्रमुख कार्य देखें",
      viewResume: "बायोडाटा देखें",
      downloadResume: "बायोडाटा डाउनलोड करें",
      metricsTitle: "सत्यापित करियर आंकड़े",
      portraitAlt: "अमन राज – AI ट्रेनर और फुल-स्टैक डेवलपर",
      configurePhoto: "तस्वीर बदलें"
    },
    about: {
      sectionTag: "मेरे बारे में",
      title: "सॉफ्टवेयर आर्किटेक्चर और अगली पीढ़ी के इंजीनियरों का निर्माण",
      leadParagraph: "मैं सॉफ्टवेयर विकास और तकनीकी शिक्षण नेतृत्व को एक साथ जोड़ने वाला एक बहुविषयक पेशेवर हूँ।",
      bodyParagraph1: "3 से अधिक वर्षों के उद्योग और प्रशिक्षण अनुभव के साथ, मैंने पारुल यूनिवर्सिटी, एलेनहाउस इंस्टीट्यूट और मल्ला रेड्डी कॉलेज जैसे प्रतिष्ठित संस्थानों में 2,000+ छात्रों और पेशेवरों को प्रशिक्षित किया है। मेरा दर्शन सैद्धांतिक अवधारणाओं को प्रोडक्शन-रेडी सिस्टम्स में बदलने पर आधारित है।",
      bodyParagraph2: "इंजीनियरिंग में, मैं मल्टी-टेनेंट सास प्लेटफॉर्म्स, रियल-टाइम वेबसॉकेट पाइपलाइन्स और स्वचालित LLM वर्कफ़्लो के आर्किटेक्चर में विशेषज्ञता रखता हूँ। मैं पाठ्यक्रम इंजीनियरिंग को भी प्रोडक्शन कोड की तरह ही संरचनात्मक और स्केलेबल बनाता हूँ।",
      corePillarsTitle: "मूल कार्य दर्शन",
      pillars: [
        {
          title: "प्रोडक्शन-ग्रेड शिक्षण पद्धति",
          description: "कोई सतही ट्यूटोरियल नहीं। हर व्याख्यान और लैब वास्तविक तकनीकी सीमाओं: सुरक्षा, डेटा सत्यापन, स्वचालित परीक्षण और CI/CD पर केंद्रित है।"
        },
        {
          title: "फुल-स्टैक विश्वसनीयता",
          description: "Django Channels में ASGI वेबसॉकेट से लेकर React और Zustand में रिएक्टिव स्टेट तक, स्केलेबल सिस्टम्स का निर्माण।"
        },
        {
          title: "व्यावहारिक जेनरेटिव AI",
          description: "साधारण चैट प्रॉम्प्ट से आगे बढ़कर कॉन्टेक्स्ट इंजीनियरिंग, मॉडल ट्रेनिंग पाइपलाइन्स और NVIDIA NIM व Claude API से वास्तविक एकीकरण।"
        }
      ],
      quickFacts: [
        { label: "स्थान", value: "वडोदरा, गुजरात, भारत" },
        { label: "प्रमुख क्षेत्र", value: "फुल-स्टैक, जेन AI, कॉर्पोरेट L&D" },
        { label: "डिग्री", value: "B.Tech CSE (CGPA 7.86)" },
        { label: "प्रशिक्षित छात्र", value: "2,000+ विश्वविद्यालय छात्र" }
      ]
    },
    journey: {
      sectionTag: "करियर यात्रा",
      title: "व्यावसायिक अनुभव और इंजीनियरिंग नेतृत्व",
      subtitle: "प्रशिक्षण, तकनीकी मार्गदर्शन और सॉफ्टवेयर विकास भूमिकाओं का सत्यापित कालक्रम।",
      present: "वर्तमान",
      viewAllRoles: "बायोडाटा से सत्यापित सभी भूमिकाएं"
    },
    skills: {
      sectionTag: "तकनीकी क्षमताएं",
      title: "कौशल, फ्रेमवर्क और टूल्स",
      subtitle: "सत्यापित प्रोग्रामिंग, एल्गोरिदम और प्रशिक्षण क्षमताओं की व्यवस्थित सूची।",
      searchPlaceholder: "तकनीक खोजें (जैसे Python, Django, React, AI)...",
      allCategory: "सभी क्षमताएं",
      verifiedNote: "सत्यापित परियोजनाओं और प्रशिक्षण इतिहास से सीधे प्राप्त तकनीकें।"
    },
    projects: {
      sectionTag: "प्रमुख परियोजनाएं",
      title: "प्रोडक्शन आर्किटेक्चर और वास्तविक सिस्टम्स",
      subtitle: "रियल-टाइम वेबसॉकेट्स, मल्टी-टेनेंट सास और एस्क्रो मार्केटप्लेस से लैस सत्यापित परियोजनाएं।",
      filterAll: "सभी परियोजनाएं",
      filterSaas: "सास व एडटेक",
      filterRealtime: "रियल-टाइम / वेबसॉकेट",
      filterMarketplace: "मार्केटप्लेस व फिनटेक",
      viewLive: "लाइव वेबसाइट देखें",
      viewSource: "कोड रिपॉजिटरी देखें",
      openDetails: "आर्किटेक्चर विवरण",
      architectureHeader: "सिस्टम आर्किटेक्चर",
      highlightsHeader: "सत्यापित तकनीकी उपलब्धियां",
      stackHeader: "प्रयुक्त तकनीकें",
      closeModal: "विवरण बंद करें",
      previewInteraction: "इंटरैक्टिव सिस्टम सिमुलेशन"
    },
    achievements: {
      sectionTag: "सत्यापित प्रभाव",
      title: "उपलब्धियां और महत्वपूर्ण मील के पत्थर",
      subtitle: "करियर रिकॉर्ड से प्राप्त सत्यापित और परिमाणित उपलब्धियां।",
      verifiedProof: "शैक्षणिक प्रमाणपत्रों और उद्योग रिकॉर्ड से सत्यापित वास्तविक आंकड़े।"
    },
    education: {
      sectionTag: "प्रमाणपत्र",
      title: "शिक्षा, प्रमाणन और कार्यशालाएं",
      subtitle: "शैक्षणिक पृष्ठभूमि, आधिकारिक उद्योग प्रमाणन और विशेष कार्यशालाएं।",
      certificationsTitle: "व्यावसायिक प्रमाणन",
      workshopsTitle: "कार्यशालाएं और औद्योगिक प्रशिक्षण",
      academicHistoryTitle: "शैक्षणिक योग्यता",
      viewCertificateAction: "प्रमाणपत्र देखें",
      certificateNotice: "प्रमाणपत्र सत्यापन लिंक आधिकारिक जारीकर्ता क्रेडेंशियल के अनुसार कॉन्फ़िगर किए गए हैं।",
      scoreLabel: "अंक / परिणाम"
    },
    resume: {
      modalTitle: "अमन राज — आधिकारिक बायोडाटा",
      downloadAction: "आधिकारिक PDF डाउनलोड करें",
      closeAction: "बंद करें",
      setupNoteTitle: "बायोडाटा फ़ाइल एकीकरण",
      setupNoteBody: "अपनी आधिकारिक PDF देखने के लिए फ़ाइल को '/public/assets/Aman_Raj_Resume.pdf' पर रखें। नीचे बायोडाटा की सामग्री सीधे दस्तावेज़ से प्रस्तुत की गई है।",
      printAction: "प्रिंट करें",
      openInNewTab: "पूरी स्क्रीन में खोलें"
    },
    contact: {
      sectionTag: "सीधा संपर्क",
      title: "संपर्क स्थापित करें",
      subtitle: "तकनीकी प्रशिक्षण, परामर्श या सॉफ्टवेयर इंजीनियरिंग भूमिकाओं के लिए सीधे संपर्क सूत्र। कोई मध्यस्थ या संपर्क फ़ॉर्म नहीं।",
      emailLabel: "ईमेल पता",
      phoneLabel: "फ़ोन नंबर",
      locationLabel: "वर्तमान स्थान",
      githubLabel: "गिटहब प्रोफ़ाइल",
      linkedinLabel: "लिंक्डइन नेटवर्क",
      leetcodeLabel: "लीटकोड प्रोफ़ाइल",
      whatsappLabel: "व्हाट्सएप संदेश",
      copyAction: "कॉपी करें",
      copiedNotice: "क्लिपबोर्ड पर कॉपी किया गया!",
      directChannelNote: "सीधा संपर्क L&D कार्यक्रमों और इंजीनियरिंग चर्चाओं के लिए सबसे तेज़ उत्तर सुनिश्चित करता है।"
    },
    footer: {
      brandStatement: "अमन राज · फुल-स्टैक सॉफ्टवेयर डेवलपमेंट और एंटरप्राइज तकनीकी प्रशिक्षण का समन्वय।",
      navigationHeader: "नेविगेशन",
      contactHeader: "सीधा संपर्क",
      backToTop: "शीर्ष पर जाएं",
      allRightsReserved: "सर्वाधिकार सुरक्षित। तथ्यात्मक सटीकता और विश्वसनीयता के साथ निर्मित।",
      replayIntro: "AR मोनोग्राम दोबारा देखें"
    }
  }
};
