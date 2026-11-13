export type ProjectCategory = 'all' | 'digital' | 'trade';

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  kicker: string;
  period: string;
  title: string;
  organization: string;
  role: string;
  domainLabel: string;
  externalUrl?: string;
  badgeOverlay: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  tags: string[];
  caseStudy: {
    challenge: string;
    execution: string[];
    impact: string;
  };
}

export interface CompetencyItem {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  iconName: 'sitemap' | 'workflow' | 'ship' | 'flask';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  bullets: string[];
}

export interface TrainingProgram {
  provider: string;
  focus: string;
}

export interface ToolkitItem {
  id: string;
  name: string;
  subtitle: string;
  iconKey: 'figma' | 'jira' | 'analytics' | 'diagram' | 'code' | 'language';
}

export interface EcosystemAffiliate {
  id: string;
  name: string;
  subtitle: string;
  url?: string;
  targetSectionId?: string;
}

export const PROFILE_INFO = {
  monogram: 'MFA',
  shortBrand: 'FATHUDZIKRI',
  brandSubtitle: 'Business & IT Strategist',
  fullName: 'Muhammad Fathudzikri Aulia',
  degreeLine: 'B.IT Digital Transformation (IIUM)',
  location: 'Bogor / Sukabumi, ID',
  availability: 'Available for Roles & Advisory · 2025',
  headlineLead: 'Bridging',
  headlineAccent: 'Business Strategy',
  headlineEnd: '& Digital Systems.',
  rolesLine: 'Business Analyst · IT Project Manager · Cross-Border Operations Lead',
  whatsappNumber: '6281513687278',
  whatsappDisplay: '+62 815 1368 7278',
  corporateEmail: 'export@sukabumigreenstone.com',
  personalEmail: 'mfathudzikriaulia@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-fathudzikri-aulia-649898189/',
  instagramUrl: 'https://instagram.com/sukabumigreenstone',
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBEag_ejm7AMFvNZ9TPvAkQtM9QMPCZttI7ZL2ibJrGEUiqGx7Od9c2AlAPwjiFPpsphtAx6VGMt-q3r6uoNbGIdEtKKdV9EpuAnuLBHsRLjM1nWmZ7yiyXzrmkneVl6PJj47wfIOhip8EY7enFLuZ2diBpJuA2QOO8yzBQoOCI-oZXSoE61_55RBvb9ut6tSyvhXyJAw7pDTA3B7RFnuE8rgVEpiM6nRW3EnDSH-xyUDKZL2D35Eeu',
};

export const HERO_METRICS = [
  { value: '04', suffix: '+', label: 'Years Exp' },
  { value: 'B2B', suffix: '', label: 'Global Trade' },
  { value: 'SDLC', suffix: '', label: 'Agile & PRD Lead' },
];

export const ECOSYSTEM_AFFILIATES: EcosystemAffiliate[] = [
  {
    id: 'nusagri',
    name: 'CV NUSAGRI',
    subtitle: 'Pet Litter & Minerals R&D',
    url: 'https://www.cv.nusagri.com',
  },
  {
    id: 'greenstone',
    name: 'SUKABUMI GREENSTONE',
    subtitle: 'Architectural Export',
    url: 'https://www.sukabumigreenstone.com',
  },
  {
    id: 'stonehub',
    name: 'STONE HUB ID',
    subtitle: 'Natural Stone Tiles Expansion',
    url: 'https://www.stonehubindonesia.com',
  },
  {
    id: 'aspenku',
    name: 'ASPENKU',
    subtitle: 'National Export Platform',
    targetSectionId: 'works',
  },
  {
    id: 'iium',
    name: 'IIUM ALUMNI',
    subtitle: 'B.IT Digital Transformation',
    targetSectionId: 'experience',
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    number: '01',
    title: 'Business Analysis & PRD/SRS',
    description:
      'Formulating institutional Product Requirements Documents (PRD), Software Requirements Specifications (SRS), User Stories, ERD, and UML process diagrams that translate business vision into flawless developer execution.',
    capabilities: ['PRD & SRS', 'UML / ERD', 'User Stories', 'Wireframing'],
    iconName: 'sitemap',
  },
  {
    number: '02',
    title: 'Digital Transformation & IT PM',
    description:
      'End-to-end SDLC lifecycle management utilizing Agile, Scrum, and Kanban methodologies. Facilitating sprint rituals, backlog grooming, risk registers, and synchronizing commercial stakeholders with engineering teams.',
    capabilities: ['Agile / Scrum', 'Jira & Trello', 'SDLC Governance', 'Sprint Planning'],
    iconName: 'workflow',
  },
  {
    number: '03',
    title: 'International Business & Export',
    description:
      'B2B international market expansion, buyer lead generation, overseas contract negotiations, export cost calculation (Incoterms FOB/CIF), container logistics, customs compliance, and supply chain stewardship.',
    capabilities: ['Global B2B Sales', 'FOB / CIF Quotations', 'Cross-Border Ops', 'Supply Chain'],
    iconName: 'ship',
  },
  {
    number: '04',
    title: 'Product Development & R&D',
    description:
      'Innovating natural mineral products (activated zeolite & volcanic pumice pet litter) and export-grade Sukabumi Greenstone architectural tiles. Overseeing lab specs, moisture testing, and scalable factory manufacturing.',
    capabilities: ['Pet Litter R&D', 'Zeolite / Pumice', 'Greenstone Specs', 'Quality Control'],
    iconName: 'flask',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cv-nusagri',
    category: 'trade',
    kicker: 'Commercial Export Ops',
    period: '2022 – Present',
    title: 'Business Development Manager & Product R&D — CV Nusagri',
    organization: 'CV Nusagri',
    role: 'Business Development Manager',
    domainLabel: 'cv.nusagri.com',
    externalUrl: 'https://www.cv.nusagri.com',
    badgeOverlay: 'Mineral Product R&D',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTMleLOKRYfTrBPUBytpLslTfaSJYbPtHuPOyvjgU9wMQIWFvHEub2o3a-vig7emH-v_M_Vdp2y-j43xKLzZnUnxwXowtHfYZ9au3_NBpjTRMQNBQ4rLe_W_IFYK2wMAlU-fdF1th41rhVcyNLZF8OtmWFFein_J_jwVuRtrgGm4qQxC3zzzqNdaK-szDf_H7YpNkh1eyCWp0h-NEFtSvJwJmFTcsdDz_Ub76OvfDDztTTjfgyjYU2',
    imageAlt: 'Zeolite Pellet Pet Litter R&D at CV Nusagri',
    summary:
      'Lead operational coordination for a pet litter business supplying an international multinational consumer goods company. Oversee inventory monitoring, production planning, quality control (QC), and customer claim resolution while driving product development to expand the pet litter portfolio.',
    tags: ['B2B Export', 'Pet Litter R&D', 'Supply Chain', 'Incoterms (FOB/CIF)'],
    caseStudy: {
      challenge:
        'Transitioning raw Indonesian volcanic minerals (zeolite and pumice) into standardized, export-ready B2B pet litter SKUs capable of passing strict international buyer absorption and dust-free tolerances.',
      execution: [
        'Managed international buyer communication, technical specification sheets, FOB/CIF pricing models, and export container scheduling.',
        'Coordinated closely with factory production lines on granule sizing, moisture calibration, packaging specs, and trial batch evaluation.',
        'Connected commercial buyer feedback directly into operational and R&D process improvements.',
      ],
      impact:
        'Established a scalable export-ready product portfolio with standardized quality checkpoints and recurring international buyer pipelines.',
    },
  },
  {
    id: 'sukabumi-greenstone',
    category: 'trade',
    kicker: 'Global Natural Stone',
    period: 'Venture',
    title: 'International Trade Specialist & Commercial Lead — Sukabumi Greenstone',
    organization: 'Sukabumi Greenstone',
    role: 'International Trade & Commercial Lead',
    domainLabel: 'sukabumigreenstone.com',
    externalUrl: 'https://www.sukabumigreenstone.com',
    badgeOverlay: 'Luxury Resort Specification',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjgrm0NV6M1dyY34ZQPgAyYgEl1lWXgB396uMjZR0RtH3sDr3oF09F0QN5VNOvhVjVVRKW_QxKgaOkGUsP_0M02L6Pmnqm4OFMUwC6m3tDf13pBGH3_E8uag4dem5WhPlbxMjfGQF3Cvi_HDnBQzO5bxDgMQun3-mbhiMgjGgW57wfdG2OTvKVzUT-e_PtQsoeI7kxZ-eicfGrtACSMIiOaX_GanaDJPgMRSPe7tz0xEgo8tsTq8yz',
    imageAlt: 'Sukabumi Greenstone Luxury Pool and Architectural Application',
    summary:
      'Spearheaded global B2B digital acquisition channels and overseas buyer relationships for natural green quartzite (Pedra Hijau). Structured international supply contracts, technical quality grading, and ocean freight logistics for luxury resort projects worldwide.',
    tags: ['Architectural Quartzite', 'Global Procurement', 'B2B Digital Commerce'],
    caseStudy: {
      challenge:
        'International hospitality developers and architects require dependable dimensional grading, transparent FOB/CIF container lead times, and verified quarry provenance before committing to bulk stone orders.',
      execution: [
        'Built digital storefront credibility and outbound B2B lead pipelines targeting resort contractors, pool builders, and stone importers.',
        'Standardized crating, moisture-safe palletization, and pre-shipment quality grading inspections.',
        'Structured multi-currency export quotations and port-to-port shipping documentation.',
      ],
      impact:
        'Positioned Sukabumi Greenstone as a trusted direct-from-origin architectural stone supplier for global hospitality developments.',
    },
  },
  {
    id: 'aspenku',
    category: 'digital',
    kicker: 'Digital Infrastructure',
    period: '2020 – 2022',
    title: 'Lead Business Analyst — ASPENKU (National Export Platform)',
    organization: 'ASPENKU',
    role: 'Business Analyst',
    domainLabel: 'Enterprise App',
    badgeOverlay: 'National Export Platform',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCB05KyjGypTai7TwArjY2VkDcKmZ3YtVq__CiBq8hpIxUHBcfYknTS4qx6fYznUYxZSRKIw19DGSSjM-2_CJMvLkEygl14OeYtJ4Tn_0satGmrZ9nhdHAs7-juNX6Sli6F_1q2mf29PXSNPXbPN9L_73ZlRs7cJlacslMh0Hg3G9vQQ8E7yQA2s49oOBsvuS7WZQQ_YGqL8Cjzd5fOya6_IjbuQJwGt3LYoXCQ2F47tDmqhB-h23SF',
    imageAlt: 'ASPENKU Indonesian Exporter Marketplace Interface',
    summary:
      'Collaborated with the IT team as Business Analyst translating complex national export workflows into detailed PRD, SRS, ERD models, and Figma wireframes. Bridged business stakeholders and software engineers to clarify and document application features.',
    tags: ['PRD & SRS', 'UML & ERD', 'SDLC Governance', 'Figma Wireframing'],
    caseStudy: {
      challenge:
        'Aligning Indonesian SME export business processes, verification workflows, and cross-border marketplace rules into clear, unambiguous engineering specifications.',
      execution: [
        'Authored structured Product Requirements Documents (PRD) and Software Requirements Specifications (SRS) with measurable Acceptance Criteria.',
        'Designed interactive Figma wireframes, User Stories, Use Case Diagrams, and Entity Relationship Diagrams (ERD) to guide backend and frontend sprints.',
        'Acted as the continuous communication bridge between commercial leadership and the software development squad throughout the SDLC.',
      ],
      impact:
        'Eliminated specification ambiguity during feature rollout and accelerated alignment between business stakeholders and engineering delivery.',
    },
  },
  {
    id: 'stone-hub-indonesia',
    category: 'trade',
    kicker: 'Commodity Platform',
    period: 'Venture',
    title: 'Export Manager — Stone Hub Indonesia',
    organization: 'Stone Hub Indonesia',
    role: 'Export Manager',
    domainLabel: 'stonehubindonesia.com',
    externalUrl: 'https://www.stonehubindonesia.com',
    badgeOverlay: 'Field Aggregation & QC',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0LtrzxM0P33zeYpiXf0T3VT09IQycC8CRf-rQdB7OHQtTtCKFtJSDQ4hPZ5BqcanFXW1OeTrL3O0G74hA92q1ZMbk1Ii600PjU9Eco5-y1bLV4UavX7WjucVYL6RCKr0qZ2WdM_gS0vu0-mRKliL8Qf37WgH86obIHJmcZOxWqRvXnlow0qcpR0LcIYPQpKptlcjXq0SILQpZNrN3ub9iBQWoVxX8mwY_DKwO6aFrbzfZkhCjYoGY',
    imageAlt: 'Field operations and natural stone aggregation in Indonesia',
    summary:
      'Lead international business development, buyer acquisition, commercial negotiations, and export quotations for Stonehub Indonesia. Coordinate end-to-end export operations—including production, quality control, logistics, and shipments—while expanding into new market segments and product categories.',
    tags: ['Digital Catalog', 'B2B Sourcing', 'Quality Standardization'],
    caseStudy: {
      challenge:
        'Fragmented regional quarries often lack unified digital catalogs, consistent export thickness tolerances, and single-point commercial accountability for overseas buyers.',
      execution: [
        'Architected a unified digital stone catalog categorizing volcanic, quartzite, and limestone SKUs with export-grade finish specs.',
        'Integrated multi-quarry field aggregation and quality control protocols into a cohesive commercial sourcing workflow.',
        'Streamlined buyer RFQ intake and sample dispatch coordination.',
      ],
      impact:
        'Enabled international contractors to source curated Indonesian natural stone lines through one standardized commercial interface.',
    },
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-nusagri',
    role: 'Business Development Manager',
    company: 'CV Nusagri',
    location: 'Sukabumi / Bogor, West Java',
    period: '2022 – Present',
    isCurrent: true,
    bullets: [
      "Support business development activities and commercial initiatives across the company's product portfolio.",
      'Manage international buyer communication, commercial discussions, quotations, and export order coordination.',
      'Coordinate with internal teams and external stakeholders on production requirements, product specifications, and shipment arrangements.',
      'Contribute to product development initiatives, including zeolite- and pumice-based pet litter products, product trials, and process improvement.',
    ],
  },
  {
    id: 'exp-aspenku',
    role: 'Business Analyst',
    company: 'ASPENKU (Aplikasi Sarana Penunjang Ekspor Nasional untuk Indonesiaku)',
    location: 'Indonesia',
    period: 'Nov 2020 – Nov 2022',
    isCurrent: false,
    bullets: [
      'Collaborated with the IT team to analyze application features and translate business requirements into technical requirements.',
      'Prepared Product Requirements Documents (PRD) and Software Requirements Specifications (SRS).',
      'Acted as a communication bridge between business requirements and the technical development team.',
      'Developed feature wireframes to communicate application structure, user flows, and interface requirements throughout development.',
    ],
  },
];

export const EDUCATION_INFO = {
  degreeType: "Bachelor's Degree",
  institution: 'International Islamic University Malaysia (IIUM)',
  degreeTitle: 'Bachelor of Information Technology (B.IT)',
  major: 'Digital Transformation',
  description:
    'Focused on enterprise IT strategy, systems analysis, database design, and agile technology adoption.',
};

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  { provider: 'BINAR Academy', focus: 'Product Management' },
  { provider: 'PACMANN', focus: 'Non-Degree Data & Analytics Program' },
  { provider: 'freeCodeCamp', focus: 'Full-Stack Development' },
  { provider: 'Google Digital Garage', focus: 'Digital Strategy & Marketing' },
  { provider: 'HubSpot Academy', focus: 'Inbound & Commercial Growth' },
  { provider: 'MySkill', focus: 'Applied Business & Tech Skills' },
];

export const TECHNICAL_TOOLKIT: ToolkitItem[] = [
  {
    id: 'figma',
    name: 'Figma · FigJam',
    subtitle: 'Wireframes & User Flows',
    iconKey: 'figma',
  },
  {
    id: 'jira',
    name: 'Jira · Trello · Notion',
    subtitle: 'Scrum & Backlog Ops',
    iconKey: 'jira',
  },
  {
    id: 'powerbi',
    name: 'Power BI · MS Excel',
    subtitle: 'Data & Export Costing',
    iconKey: 'analytics',
  },
  {
    id: 'drawio',
    name: 'Draw.io · Lucidchart',
    subtitle: 'UML · ERD · Use Cases',
    iconKey: 'diagram',
  },
  {
    id: 'dev',
    name: 'HTML/CSS · JS · React · SQL',
    subtitle: 'Python · Node.js · Git',
    iconKey: 'code',
  },
  {
    id: 'lang',
    name: 'Bilingual',
    subtitle: 'English & Indonesian',
    iconKey: 'language',
  },
];
