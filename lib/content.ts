// All site content lives here. Edit this file; components are data-driven.

export const site = {
  name: "Youssef Waheed",
  role: "Software Engineer",
  email: "youssefwaheed279@gmail.com",
  phone: "+20 101 893 1181",
  cv: "/Youssef_Waheed_CV.pdf",
  github: "https://github.com/Youssef-Waheed1",
  linkedin: "https://www.linkedin.com/in/youssef-waheed1",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
].filter((l) => l.href);

export const hero = {
  summary: "Software Engineer focused on full-stack development, backend systems, and application security.",
  detail:
    "I build secure, maintainable web applications and backend systems using modern technologies, with a strong interest in application security.",
};

export const about = [
  "Software Engineer with a strong foundation in full-stack development and application security, built through three years of self-driven study before graduating.",
  "Experienced with backend development using FastAPI, PostgreSQL, and Redis, alongside practical knowledge of web penetration testing and OWASP methodology.",
  "Focused on writing secure, maintainable, and well-structured software.",
];

export const experience = {
  title: "Full-Stack Software Engineer",
  type: "Freelance",
  period: "Oct 2025 — Present",
  project: "Saudi Equities Fintech Platform",
  description: "Built and contributed to a financial analysis platform focused on Saudi equities.",
  points: [
    "Built secure authentication using JWT and refresh token rotation.",
    "Implemented Redis-backed token blacklisting.",
    "Used Argon2 password hashing.",
    "Implemented account approval workflows and failed login tracking.",
    "Designed a multi-level caching layer with tiered TTLs using a read-through pattern.",
    "Built REST API endpoints for financial queries.",
    "Worked on RS ratings, technical screeners, XBRL parsing, and market breadth analysis.",
  ],
  tech: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "TypeScript", "JWT", "Argon2", "XBRL"],
};

export type Project = {
  name: string;
  description: string;
  features: string[];
  tech: string[];
  facts?: string[];
  github?: string;
  demo?: string;
};

export const featuredProject: Project = {
  name: "Saudi Equities Fintech Platform",
  description:
    "Financial analysis platform focused on Saudi equities, combining market data, financial analytics, screening, technical indicators, and XBRL-based financial information.",
  features: [
    "Secure authentication",
    "JWT + refresh token rotation",
    "Redis token blacklisting",
    "Argon2 password hashing",
    "Account approval workflows",
    "Failed login tracking",
    "Multi-level caching",
    "Financial REST APIs",
    "RS ratings",
    "Technical screeners",
    "XBRL parsing",
    "Market breadth analysis",
  ],
  tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "JWT", "XBRL"],
};

export const projects: Project[] = [
  {
    name: "E-commerce Platform",
    description:
      "An e-commerce application with product listings, cart functionality, checkout processing, and customer/order management.",
    features: [
      "Product listings",
      "Add to cart",
      "Checkout processing",
      "Customer, order, and shipping models",
      "Authenticated and guest purchases",
    ],
    tech: ["Python", "Django"],
    github: "https://github.com/Youssef-Waheed1/Ecommerce-Django",
  },
  {
    name: "Social Media Application",
    description: "A social media application with authentication, profiles, posts, likes, comments, and CRUD APIs.",
    features: ["JWT authentication", "Registration and login", "Profile management", "Posts, likes, and comments", "CRUD APIs"],
    tech: ["Node.js", "Express", "React", "MongoDB", "Mongoose", "JWT"],
    github: "https://github.com/Youssef-Waheed1/TawasolWithMe-Server",
  },
  {
    name: "Color Sorting System",
    description: "University embedded-systems project developed for automated color sorting.",
    features: ["Led software development", "Excellent grade", "2nd place at the university Scientific Conference"],
    tech: [],
    facts: ["University project", "2025"],
  },
];

export const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { category: "Backend", items: ["Python", "FastAPI", "Django", "Node.js", "Express", "REST APIs"] },
  { category: "Database & Infrastructure", items: ["PostgreSQL", "Redis", "MongoDB", "SQLAlchemy"] },
  {
    category: "Security",
    items: ["OWASP Top 10", "Web Penetration Testing", "Burp Suite", "Nmap", "Wireshark", "Metasploit", "OAuth2", "JWT", "Linux"],
  },
  { category: "Networking", items: ["CCNA", "TCP/IP", "Network Security"] },
];

export const security = {
  intro:
    "I approach backend development with security in mind, with practical experience around authentication, authorization, token management, password hashing, rate limiting concepts, and web application security.",
  items: ["Authentication", "JWT", "OAuth2", "OWASP", "Web Security", "Secure API Design", "Penetration Testing"],
};

export const education = {
  degree: "B.Sc. Computer Science & Physics",
  school: "Zagazig University, Egypt",
  period: "2021 — 2025",
};

export const training = {
  courses: [
    {
      name: "Udemy — React: The Complete Guide",
      url: "https://www.udemy.com/certificate/UC-ec3967a2-4cd9-4758-a1a2-a8cc175e53b8/",
    },
    {
      name: "Udemy — Node.js, Express & MongoDB",
      url: "https://www.udemy.com/certificate/UC-340f9dfd-5579-4606-b562-6fe65a139a03/",
    },
  ],
  selfStudy: ["OSCP", "CompTIA Security+", "CCNA", "Network+", "A+"],
};

export const contact = {
  heading: "Let's build something useful.",
  text: "I'm open to software engineering opportunities, backend development roles, and projects involving secure web applications.",
};
