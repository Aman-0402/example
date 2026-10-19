export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'saas' | 'realtime' | 'edtech' | 'marketplace';
  categoryLabel: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  highlights: string[];
  architectureNotes?: string[];
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period?: string;
  score: string;
  scoreType: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  hasViewCertificate: boolean;
  credentialUrl?: string;
}

export interface WorkshopItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  hasCertificate: boolean;
}

export interface AchievementItem {
  metric: string;
  title: string;
  context: string;
  tag: string;
}

export const PORTFOLIO_CONFIG = {
  name: "Aman Raj",
  monogram: "AR",
  headline: "AI & Full-Stack Trainer · Full-Stack Developer · Corporate L&D",
  shortIntro: "IT Trainer and L&D professional with 2000+ students trained across leading universities. Designing full-stack, AI/ML, and cloud curricula, backed by real-world development expertise across MERN, Django, and Generative AI systems.",
  
  // Configurable availability badge
  isOpenToOpportunities: true,
  availabilityTextEn: "Open to High-Impact Opportunities & L&D Roles",
  availabilityTextHi: "नई भूमिकाओं और L&D अवसरों के लिए उपलब्ध",
  
  // Contact details directly from resume
  contact: {
    email: "think.like.ai.aman@gmail.com",
    phone: "+91 9852104967",
    rawPhone: "9852104967",
    location: "Vadodara, Gujarat, India",
    github: "https://github.com/Aman-0402",
    linkedin: "https://www.linkedin.com/in/aman-raj", // Verified config placeholder
    leetcode: "https://leetcode.com/u/Aman-0402/",
    whatsapp: "https://wa.me/919852104967",
  },

  // Asset configurations
  assets: {
    resumePath: "/assets/Aman_Raj_Resume.pdf",
    portraitPath: null as string | null, // Configurable: place image in /public/assets/portrait.jpg
  },

  metrics: [
    { value: "2,000+", labelEn: "Students Trained", labelHi: "प्रशिक्षित छात्र" },
    { value: "3+", labelEn: "Years Industry & L&D", labelHi: "वर्षों का उद्योग अनुभव" },
    { value: "186", labelEn: "Automated SaaS Tests", labelHi: "स्वचालित सास टेस्ट" },
    { value: "4", labelEn: "Full-Stack Architectures", labelHi: "फुल-स्टैक आर्किटेक्चर" }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "codedevh",
    role: "AI Trainer",
    company: "CodedevH · Allenhouse Institute of Technology & Business School",
    period: "August 2026 – Current",
    startDate: "2026-08",
    endDate: "Current",
    bullets: [
      "Deliver AI training to students at Allenhouse Institute of Technology & Business School, covering practical, applied AI concepts and tools.",
      "Develop and train AI models as part of the training program, translating model-building workflows into structured learning material for students."
    ],
    skills: ["Applied AI", "Model Training", "Curriculum Engineering", "Python", "Deep Learning"]
  },
  {
    id: "ethnotech",
    role: "Sr. IT Trainer",
    company: "Ethnotech Academic Solutions · Parul University",
    location: "Vadodara, Gujarat",
    period: "July 2025 – June 2026",
    startDate: "2025-07",
    endDate: "2026-06",
    bullets: [
      "Designed and delivered structured training programs across HTML/CSS, JavaScript, Python, Django, Flask, Statistics, AWS, and Networking (Cisco) for 2000+ students at leading universities.",
      "Developed and delivered a Generative AI curriculum module covering prompt engineering, context engineering, and API-based AI systems, extending the training offering into applied AI/ML.",
      "Designed hands-on lab sessions and mentored students through capstone projects, guiding them from problem definition to deployment-ready solutions."
    ],
    skills: ["Generative AI", "Prompt Engineering", "Python", "Django", "AWS", "Full-Stack", "Mentorship"]
  },
  {
    id: "anuratech",
    role: "Technical Trainer",
    company: "Anuratech Solutions · Parul University",
    location: "Vadodara, Gujarat",
    period: "April 2025 – June 2025",
    startDate: "2025-04",
    endDate: "2025-06",
    bullets: [
      "Led the design, deployment, and maintenance of enterprise IT infrastructure supporting academic and training platforms.",
      "Ensured high availability, security, and performance of digital learning systems across multiple departments.",
      "Collaborated with academic teams to align infrastructure capacity with training and lab requirements."
    ],
    skills: ["Enterprise Infrastructure", "System Security", "High Availability", "Lab Systems"]
  },
  {
    id: "databits",
    role: "Machine Learning Trainer",
    company: "Databits Technologia",
    period: "August 2024 – March 2025",
    startDate: "2024-08",
    endDate: "2025-03",
    bullets: [
      "Developed and deployed machine learning models for predictive analytics applications.",
      "Performed data preprocessing, feature engineering, and hyperparameter optimization.",
      "Built automated training pipelines using Python, TensorFlow, and scikit-learn."
    ],
    skills: ["Machine Learning", "TensorFlow", "Scikit-Learn", "Feature Engineering", "Predictive Analytics"]
  },
  {
    id: "malla-reddy",
    role: "Technical Trainer – Python Full Stack",
    company: "Malla Reddy College",
    location: "Hyderabad, India",
    period: "May 2024 – July 2024",
    startDate: "2024-05",
    endDate: "2024-07",
    bullets: [
      "Delivered structured Python Full Stack training covering core Python, HTML/CSS, JavaScript, and backend/frontend integration concepts.",
      "Designed hands-on coding exercises and mini-projects to reinforce full-stack development skills across the training program.",
      "Assessed student progress through assignments and practical evaluations, providing feedback to strengthen full-stack competency."
    ],
    skills: ["Python Full-Stack", "JavaScript", "Frontend Integration", "Assessment Design"]
  },
  {
    id: "arx-infotech",
    role: "Full Stack Intern",
    company: "ARX Infotech",
    period: "August 2023 – February 2024",
    startDate: "2023-08",
    endDate: "2024-02",
    bullets: [
      "Developed and maintained full-stack web applications using Python, Django, and Django REST Framework, handling both backend logic and API design.",
      "Built responsive front-end interfaces integrated with Django templates and REST APIs, ensuring seamless data flow between client and server.",
      "Collaborated with the development team on database design (MySQL), debugging, and deployment of Django-based applications in a live environment."
    ],
    skills: ["Django", "Django REST Framework", "MySQL", "API Architecture", "Responsive UI"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "classpulse",
    title: "ClassPulse",
    tagline: "Smart QR-based real-time attendance system",
    description: "Real-time attendance platform where students scan an auto-rotating QR code (every 15 seconds) so screenshots instantly expire, paired with server-side validation and live WebSocket teacher dashboard.",
    category: "realtime",
    categoryLabel: "Real-Time / WebSocket",
    stack: ["React", "Bootstrap 5", "Django", "Django REST Framework", "Django Channels (WebSocket)", "MySQL"],
    githubUrl: "https://github.com/Aman-0402/ClassPulse",
    highlights: [
      "Auto-rotating 15-second QR code prevents proxy screenshot sharing; all tokens cryptographically validated server-side.",
      "WebSocket-pushed live teacher dashboard via Django Channels streaming active scans and room statistics in sub-second latency.",
      "Suspicious activity detection engine catching duplicate scans, expired token submissions, and unverified device switches.",
      "Per-student attendance percentage analytics with instant XLSX, CSV, and PDF export pipelines."
    ],
    architectureNotes: [
      "Django Channels ASGI consumer for persistent teacher room connections",
      "Dynamic token generation with 15s TTL cached in memory",
      "Transactional scan insertion with duplicate IP/device footprint check"
    ],
    stats: [
      { label: "QR Rotation", value: "15s" },
      { label: "Latency", value: "<100ms" },
      { label: "Security", value: "Anti-Proxy" }
    ]
  },
  {
    id: "certibyt",
    title: "Certibyt",
    tagline: "Enterprise multi-tenant examination & certification SaaS",
    description: "Production SaaS platform supporting Super Admin, Org Admin, and Candidate portals with complete tenant isolation, online proctoring, webcam presence verification, and automated certificate issuance.",
    category: "saas",
    categoryLabel: "Enterprise SaaS / EdTech",
    stack: ["Django", "React", "Redux Toolkit", "MariaDB", "ReportLab", "JWT", "Framer Motion"],
    liveUrl: "https://certibyt.com",
    githubUrl: "https://github.com/Aman-0402/CertiVerse",
    highlights: [
      "Multi-tenant SaaS architecture offering dedicated isolation between organizations, candidates, and platform super admins.",
      "Browser proctoring engine with tab-switch detection, webcam presence monitoring, and per-attempt randomized question shuffling.",
      "Automated voucher commerce workflow with PDF certificate rendering via ReportLab and public instant verification without login.",
      "Engineered 186 automated unit and integration tests across 7 apps verifying RBAC, tenant data isolation, and checkout."
    ],
    architectureNotes: [
      "Dynamic schema/tenant routing with strict RBAC guards",
      "ReportLab vector PDF engine for cryptographic certificate generation",
      "186 pytest/Django test suite with full coverage of commerce and tenant rules"
    ],
    stats: [
      { label: "Automated Tests", value: "186" },
      { label: "Portals", value: "3 Roles" },
      { label: "Verification", value: "Public URL" }
    ]
  },
  {
    id: "consultme",
    title: "ConsultME",
    tagline: "Full-stack consultancy marketplace with live chat & escrow",
    description: "Multi-role marketplace connecting clients, freelancers, and consultants with real-time WebSocket messaging, automated calendar bookings, and an escrow payment architecture.",
    category: "marketplace",
    categoryLabel: "Marketplace / FinTech",
    stack: ["Django", "DRF", "React", "Redis", "Celery", "Django Channels", "MySQL", "JWT", "Framer Motion"],
    liveUrl: "https://consultmee.in",
    githubUrl: "https://github.com/Aman-0402/ConsultME",
    highlights: [
      "Multi-role marketplace with client, freelancer, consultant, and admin dashboards with JWT-authenticated protected routes.",
      "Real-time WebSocket chat backed by Django Channels and Redis message broker with automatic session-confirmation cards on payment.",
      "Escrow transaction system calculating platform fee, GST, and convenience surcharges — funds safely locked until milestone approval.",
      "Reschedule request engine with customizable template messaging, Django signal dispatches, and asynchronous Celery workers."
    ],
    architectureNotes: [
      "Redis Channel Layer for cross-worker WebSocket message broadcasting",
      "Two-phase escrow milestone release state machine",
      "Celery background queue for email confirmations and auto-reminders"
    ],
    stats: [
      { label: "Messaging", value: "Real-time" },
      { label: "Payment", value: "Escrow Logic" },
      { label: "Background", value: "Celery+Redis" }
    ]
  },
  {
    id: "urbanease",
    title: "UrbanEase",
    tagline: "Hyperlocal service marketplace connecting local pros",
    description: "Full-stack on-demand service marketplace pairing consumers with nearby service professionals using browser geolocation, Haversine proximity ranking, and a structured booking lifecycle.",
    category: "marketplace",
    categoryLabel: "Hyperlocal / On-Demand",
    stack: ["Django", "DRF", "React", "MySQL", "JWT", "Zustand", "Framer Motion"],
    githubUrl: "https://github.com/Aman-0402/UrbanEase",
    highlights: [
      "Hyperlocal discovery engine using browser Geolocation API and mathematical Haversine calculations for precise proximity sorting.",
      "Complete booking state machine: Pending → Confirmed → In-Progress → Completed → Cancelled with server audit logs.",
      "Payment orchestration structured for live Razorpay webhooks, provider payout ledger, and real-time Django signal notifications.",
      "Tailored dashboards for Customer, Provider, and Administrator with 6-month earnings charts and session countdowns."
    ],
    architectureNotes: [
      "Haversine SQL distance queries optimized with indexing",
      "Strict state-transition validation preventing illegal cancellation flows",
      "Zustand state store for cart and location persistence"
    ],
    stats: [
      { label: "Discovery", value: "Haversine" },
      { label: "Lifecycle", value: "5 States" },
      { label: "Analytics", value: "6mo Ledger" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "Code2",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap 5", "Framer Motion"]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    iconName: "Server",
    skills: ["Django", "Django REST Framework", "Django Channels (WebSockets)", "Node.js", "Express.js", "Flask", "Celery"]
  },
  {
    id: "database",
    title: "Databases & State",
    iconName: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB", "Prisma", "Redis", "Redux Toolkit", "Zustand"]
  },
  {
    id: "genai",
    title: "Generative AI & LLMs",
    iconName: "Sparkles",
    skills: [
      "Prompt Engineering",
      "Context Engineering",
      "API-based AI Systems",
      "LLM Integration (NVIDIA NIM, Claude API)",
      "Agentic AI Tools (Claude Code)",
      "AI-Assisted Development Workflows"
    ]
  },
  {
    id: "ai_data",
    title: "AI, ML & Data Science",
    iconName: "Brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP (Basics)",
      "Model Training & Evaluation",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib"
    ]
  },
  {
    id: "cloud_tools",
    title: "Cloud & Dev Platforms",
    iconName: "Cloud",
    skills: ["AWS", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", "cPanel", "Docker basics"]
  },
  {
    id: "curriculum",
    title: "L&D & Training Competencies",
    iconName: "GraduationCap",
    skills: [
      "Curriculum Design",
      "Instructional Design",
      "Technical Mentorship",
      "Assessment Design",
      "Presentation & Public Speaking",
      "Classroom & Lab Management"
    ]
  },
  {
    id: "core",
    title: "Core CS & Soft Skills",
    iconName: "Cpu",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Communication", "Problem-Solving", "Teamwork", "Leadership"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Sambalpur University Institute of Information Technology",
    location: "Sambalpur, Odisha",
    score: "7.86 / 10",
    scoreType: "CGPA"
  },
  {
    degree: "Intermediate / Class XII — CBSE",
    institution: "Guru Gobind Singh Public School",
    location: "Bokaro Steel City, Jharkhand",
    score: "76%",
    scoreType: "Percentage"
  },
  {
    degree: "Matriculation / Class X — CBSE",
    institution: "Guru Gobind Singh Public School",
    location: "Bokaro Steel City, Jharkhand",
    score: "10 / 10",
    scoreType: "CGPA"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certified Data Engineer",
    issuer: "Amazon Web Services (Official)",
    hasViewCertificate: true
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    hasViewCertificate: true
  },
  {
    title: "Statistics for Data Science",
    issuer: "IBM",
    hasViewCertificate: false
  },
  {
    title: "HTML, CSS & JavaScript",
    issuer: "Pearson",
    hasViewCertificate: false
  },
  {
    title: "Machine Learning with Python A-Z",
    issuer: "Udemy",
    hasViewCertificate: false
  },
  {
    title: "AI Essentials: Introduction to Artificial Intelligence",
    issuer: "Udemy",
    hasViewCertificate: true
  },
  {
    title: "AWS Essentials: A Complete Beginner's Guide",
    issuer: "Udemy",
    hasViewCertificate: true
  },
  {
    title: "JavaScript Programming: From Novice to Expert",
    issuer: "Udemy",
    hasViewCertificate: true
  },
  {
    title: "Information Security Fundamentals",
    issuer: "Udemy",
    hasViewCertificate: true
  },
  {
    title: "Oracle Agentic AI Certified",
    issuer: "Oracle",
    hasViewCertificate: true
  }
];

export const WORKSHOPS: WorkshopItem[] = [
  {
    title: "Vocational Industrial Training",
    organization: "SAIL Rourkela Steel Plant",
    location: "Rourkela",
    period: "May–Jun 2023 (1 month)",
    hasCertificate: true
  },
  {
    title: "National Workshop on Neural Networks & Deep Learning",
    organization: "SUIIT",
    location: "Burla, Odisha",
    period: "Feb 2023",
    hasCertificate: true
  },
  {
    title: "International Workshop on Recent Advancements in Electronics & Computer Intelligence (RAECI-2021)",
    organization: "RAECI",
    period: "Apr 2021",
    hasCertificate: true
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    metric: "2,000+ Students",
    title: "University & Corporate Technical Training",
    context: "Designed and delivered structured curricula across Full-Stack, Python, and Generative AI at Parul University, Allenhouse Institute, and Malla Reddy College.",
    tag: "Instructional Leadership"
  },
  {
    metric: "186 Automated Tests",
    title: "Enterprise Multi-Tenant SaaS Integrity",
    context: "Authored comprehensive test suite covering RBAC, tenant data isolation, voucher commerce, and proctoring engines for Certibyt SaaS platform.",
    tag: "Software Engineering"
  },
  {
    metric: "10 / 10 CGPA",
    title: "Perfect Matriculation Academic Record",
    context: "Achieved full CGPA 10/10 in CBSE Class X examinations at Guru Gobind Singh Public School, Bokaro Steel City.",
    tag: "Academic Excellence"
  },
  {
    metric: "Applied GenAI",
    title: "Industry-Aligned AI/ML Curriculum Engineering",
    context: "Engineered training modules in Prompt Engineering, Context Engineering, and Claude/NVIDIA API system integration for university engineering batches.",
    tag: "AI Innovation"
  }
];
