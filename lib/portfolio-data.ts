export interface StatItem {
  id: string
  number: number
  suffix: string
  prefix?: string
  label: string
  sublabel: string
  decimals?: number
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  shortDesc: string
  fullDesc: string
  deliverables: string[]
  iconName: string
}

export interface AchievementItem {
  id: string
  title: string
  category: "all" | "cost" | "velocity" | "quality" | "risk"
  categoryLabel: string
  metric: string
  metricLabel: string
  company: string
  location: string
  period: string
  summary: string
  challenge: string
  execution: string
  verifiedImpact: string
  tags: string[]
}

export interface ExperienceItem {
  id: string
  period: string
  role: string
  company: string
  location: string
  type: string
  overview: string
  keyAchievements: string[]
  tools: string[]
}

export interface EducationItem {
  id: string
  period: string
  degree: string
  institution: string
  location: string
  field: string
  highlights: string[]
}

export interface SkillItem {
  name: string
  category: "ERP & Systems" | "Strategic Procurement" | "Supply Chain & Ops" | "Governance & Finance"
  level: "Advanced" | "Expert" | "Core Competency"
  icon: string
  description: string
}

export const PERSONAL_INFO = {
  name: "Ramz Mustafa",
  firstName: "Ramz",
  lastName: "Mustafa",
  monogram: "RM",
  headline: "Purchase Executive | Supply Chain & Procurement",
  title: "Strategic Procurement & Supply Chain Professional",
  subTitle: "I am Ramz Mustafa",
  location: "Sharjah, UAE",
  phone: "+971 54 574 0545",
  phoneFormatted: "+971 54 574 0545",
  email: "ramz12mustafa@gmail.com",
  linkedin: "https://www.linkedin.com/in/ramz-mustafa-99745022a",
  image: "/ramz-snap.png",
  logo: {
    horizontal: "/logo/Logo File.svg",
    horizontalPng: "/logo/Logo horizontal.png",
    whiteHorizontal: "/logo/Logo White Horizontal.png",
    emblem: "/logo/Logo slogan.svg",
    emblemPng: "/logo/Logo slogan.png",
    emblemWhite: "/logo/Logo slogan white.png",
  },
  summary:
    "Results-driven Senior Purchase Executive with over five years of hands-on experience in strategic sourcing, vendor negotiations, and end-to-end procurement in manufacturing and enterprise environments. Proven track record managing multi-million-dirham spend, driving annual cost reductions of up to 14%, optimizing SAP MM ERP workflows, enforcing three-way matching, and mitigating global supply chain risks.",
}

export const STATS_DATA: StatItem[] = [
  {
    id: "experience",
    number: 5,
    suffix: "+",
    label: "Years of",
    sublabel: "Experience",
  },
  {
    id: "spend",
    number: 2,
    prefix: "AED ",
    suffix: "M+",
    label: "Annual Spend",
    sublabel: "Managed",
  },
  {
    id: "vendors",
    number: 45,
    suffix: "+",
    label: "Primary Vendors",
    sublabel: "Under SLA",
  },
  {
    id: "savings",
    number: 12,
    suffix: "%",
    label: "Average YoY",
    sublabel: "Cost Reduction",
  },
]

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Strategic Sourcing & RFQ/RFP",
    shortDesc:
      "End-to-end supplier identification, competitive bidding, cost modeling, and strategic sourcing for raw materials and industrial equipment.",
    fullDesc:
      "Conducting exhaustive market research, total cost of ownership (TCO) analyses, and competitive RFQ/RFP lifecycle execution to secure superior commercial terms without sacrificing material specifications.",
    deliverables: [
      "Rigorous supplier qualification & pre-screening",
      "Comprehensive RFP/RFQ tender evaluations",
      "Benchmark pricing & total cost of ownership models",
      "Category sourcing strategy for raw materials",
    ],
    iconName: "Search",
  },
  {
    id: "02",
    number: "02",
    title: "Contract Negotiation & SLAs",
    shortDesc:
      "Commercial terms optimization, multi-million-dollar vendor contracts, payment terms negotiation, and stringent service level agreements.",
    fullDesc:
      "Leading aggressive yet collaborative negotiations across 45+ primary vendors to secure favorable payment credit windows, price concessions, and enforceable quality warranties that protect enterprise margins.",
    deliverables: [
      "Master service agreements (MSAs) & commercial terms",
      "Credit terms expansion & cash flow optimization",
      "Performance penalty clauses & delivery guarantees",
      "Annual rate lock & volume discount structures",
    ],
    iconName: "FileCheck2",
  },
  {
    id: "03",
    number: "03",
    title: "Vendor & Supplier Management",
    shortDesc:
      "Managing portfolios of 45+ primary vendors, supplier tiering, dual-sourcing contingency strategies, and proactive risk mitigation.",
    fullDesc:
      "Building resilient long-term supplier partnerships with active KPI scorecarding, quarterly performance reviews, and proactive risk audits that preserve supply chain continuity.",
    deliverables: [
      "Vendor scorecarding & tier classification",
      "Dual-sourcing contingency frameworks",
      "Quarterly vendor reviews & SLA governance",
      "Supplier risk assessment & compliance monitoring",
    ],
    iconName: "Users2",
  },
  {
    id: "04",
    number: "04",
    title: "Procurement Process Optimization",
    shortDesc:
      "Streamlining purchase requisitions, PO lifecycle approvals, and cycle time acceleration from five days down to 48 hours.",
    fullDesc:
      "Eliminating administrative bottlenecks, redesigning requisition-to-procure routing, and standardizing procurement workflows to achieve 60% faster turnaround time on critical equipment orders.",
    deliverables: [
      "Procure-to-Pay (P2P) cycle re-engineering",
      "Turnaround reduction from 5 days to 48 hours",
      "Delegation of authority (DOA) matrix compliance",
      "Automated notification & expediting workflows",
    ],
    iconName: "Zap",
  },
  {
    id: "05",
    number: "05",
    title: "ERP & Three-Way Matching",
    shortDesc:
      "Hands-on execution in SAP MM & Oracle ERP, automated purchase order workflows, and three-way matching reducing invoice discrepancies by 22%.",
    fullDesc:
      "Overseeing end-to-end ERP transactional integrity across Purchase Orders, Goods Receipts (GR), and Invoices (IR), cutting finance disputes and ensuring 100% audit readiness.",
    deliverables: [
      "SAP MM Purchase Order & Goods Receipt configuration",
      "Three-way matching enforcement (PO-GR-IR)",
      "22% reduction in vendor billing disputes",
      "Real-time spend tracking & commitment reporting",
    ],
    iconName: "Database",
  },
  {
    id: "06",
    number: "06",
    title: "Inventory Control & JIT Sourcing",
    shortDesc:
      "Optimizing buffer stocks, safety thresholds, holding-cost reduction, and JIT procurement frameworks delivering measurable cash-flow efficiency.",
    fullDesc:
      "Aligning manufacturing production schedules with supplier delivery cadences, decreasing non-moving inventory and capturing PKR 100,000 in annual warehouse holding-cost savings.",
    deliverables: [
      "Just-in-Time (JIT) delivery schedule alignment",
      "Safety stock calculation & reorder point tuning",
      "Reduction of dead capital in excess stock",
      "Continuous lead-time variance tracking",
    ],
    iconName: "Boxes",
  },
]

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "cost-reduction-12",
    title: "12% YoY Procurement Cost Reduction",
    category: "cost",
    categoryLabel: "Cost Optimization",
    metric: "12%",
    metricLabel: "YoY Cost Savings",
    company: "ZeroEight Group of Companies",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Achieved average 12% year-over-year cost savings across industrial raw materials and capital equipment through strategic vendor restructuring and volume consolidation.",
    challenge:
      "Rising raw material market volatility and fragmented purchase orders created margin pressure across high-volume manufacturing divisions.",
    execution:
      "Consolidated multi-department procurement into unified volume tenders, benchmarked international raw material indices, and renegotiated contracts with 45+ primary vendors.",
    verifiedImpact:
      "Consistently achieved 12% YoY procurement savings on >AED 2M spend budget while locking in price caps for critical manufacturing components.",
    tags: ["Spend Optimization", "Volume Rebates", "ZeroEight Group", "Raw Materials"],
  },
  {
    id: "po-velocity-48h",
    title: "PO Turnaround Accelerated to 48 Hours",
    category: "velocity",
    categoryLabel: "Process Velocity",
    metric: "48h",
    metricLabel: "PO Cycle Time",
    company: "ZeroEight Group of Companies",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Restructured enterprise purchase order lifecycle in SAP MM, compressing turnaround from 5 full business days down to under 48 hours.",
    challenge:
      "Manual purchase requisition routing and multi-tier approval bottlenecks delayed urgent replacement parts, risking production stoppages.",
    execution:
      "Redesigned the P2P approval hierarchy in SAP MM, established pre-approved supplier rate cards, and created digitized automated alert routing for department heads.",
    verifiedImpact:
      "Reduced average PO processing time from 120 hours (5 days) to under 48 hours (60% cycle acceleration) across all industrial equipment categories.",
    tags: ["SAP MM", "Workflow Velocity", "P2P Re-engineering", "Sharjah UAE"],
  },
  {
    id: "supplier-quality-98",
    title: "98.5% Vendor Quality Pass Rate",
    category: "quality",
    categoryLabel: "Quality & Compliance",
    metric: "98.5%",
    metricLabel: "Quality Pass Rate",
    company: "ZeroEight Group of Companies",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Instituted rigorous supplier pre-qualification scorecards and incoming inspection protocols, maintaining an industry-leading 98.5% quality pass rate.",
    challenge:
      "Substandard raw material deliveries from secondary vendors led to inspection rejections, factory line delays, and frequent credit note claims.",
    execution:
      "Formulated comprehensive vendor qualification criteria, mandated ISO compliance certifications, and linked monthly quality metrics directly to contract renewal eligibility.",
    verifiedImpact:
      "Elevated supplier compliance to a sustained 98.5% pass rate on incoming materials, drastically minimizing defective returns and production interruptions.",
    tags: ["Quality Audits", "SLA Governance", "Supplier Scorecards", "ZeroEight Group"],
  },
  {
    id: "invoice-matching-22",
    title: "22% Cut in Invoice Discrepancies",
    category: "quality",
    categoryLabel: "Quality & Compliance",
    metric: "-22%",
    metricLabel: "Fewer Invoicing Disputes",
    company: "ZeroEight Group of Companies",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Enforced systematic SAP MM three-way matching (PO-GR-Invoice), resolving reconciliation discrepancies by 22% between procurement and finance.",
    challenge:
      "Frequent variances between purchase order line amounts, warehouse receiving receipts, and vendor accounting invoices caused payment disputes and delays.",
    execution:
      "Implemented rigid tolerance limit validation in SAP MM, mandated delivery note cross-verification at goods receipt, and trained warehouse handlers on accurate item categorization.",
    verifiedImpact:
      "Reduced invoice reconciliation discrepancies by 22%, accelerated vendor payment releases, and established 100% audit-compliant financial records.",
    tags: ["Three-Way Matching", "SAP MM ERP", "Finance Reconciliation", "Audit Readiness"],
  },
  {
    id: "downtime-mitigation-35",
    title: "35% Factory Downtime Mitigation",
    category: "risk",
    categoryLabel: "Risk Mitigation",
    metric: "35%",
    metricLabel: "Downtime Reduction",
    company: "DUPAK INTERNATIONAL",
    location: "Lahore, Pakistan",
    period: "2019 – 2022",
    summary:
      "Pioneered alternative supplier sourcing strategies and localized backup vendors, cutting plant production downtime by 35% during critical supply disruptions.",
    challenge:
      "Single-source dependency for high-wear industrial spare parts left production lines vulnerable during international transit bottlenecks.",
    execution:
      "Conducted extensive technical supplier audits to identify certified regional precision machine shops, established standing reserve agreements, and pre-tested replacement parts.",
    verifiedImpact:
      "Slashed factory equipment downtime by 35%, ensuring uninterrupted plant productivity during severe global logistics crunches.",
    tags: ["Alternative Sourcing", "Supply Continuity", "DUPAK INTERNATIONAL", "Risk Audits"],
  },
  {
    id: "holding-savings-100k",
    title: "PKR 100,000 Holding-Cost Reduction",
    category: "cost",
    categoryLabel: "Cost Optimization",
    metric: "PKR 100k",
    metricLabel: "Annual Carrying Savings",
    company: "DUPAK INTERNATIONAL",
    location: "Lahore, Pakistan",
    period: "2019 – 2022",
    summary:
      "Transitioned inventory planning to a lean Just-In-Time (JIT) model, capturing PKR 100,000 in annual warehouse carrying-cost reductions.",
    challenge:
      "Excess raw material buffer stock occupied valuable floor space, tied up enterprise operating cash, and suffered occasional storage deterioration.",
    execution:
      "Analyzed historical consumption trends, calibrated reorder points to supplier delivery lead times, and scheduled phased weekly deliveries directly to production lines.",
    verifiedImpact:
      "Generated PKR 100,000 in confirmed annual holding-cost savings while simultaneously freeing working capital for urgent operational expenditures.",
    tags: ["JIT Inventory", "Carrying Costs", "DUPAK INTERNATIONAL", "Working Capital"],
  },
]

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "zeroeight",
    period: "July 2022 – Present",
    role: "Purchase Executive",
    company: "ZeroEight Group of Companies",
    location: "Sharjah, UAE",
    type: "Full-Time",
    overview:
      "Overseeing strategic procurement, high-value supplier contracts, and end-to-end supply chain execution for industrial machinery, technical equipment, and enterprise manufacturing raw materials.",
    keyAchievements: [
      "Directed annual procurement spend budget exceeding AED 2 Million across multiple business units.",
      "Spearheaded commercial negotiations with 45+ primary suppliers, securing an average 12% YoY reduction in procurement expenditures.",
      "Optimized SAP MM purchase order workflows, decreasing PO processing turnaround from 5 business days to under 48 hours.",
      "Maintained a 98.5% vendor quality pass rate via pre-qualification scoring, quality inspections, and SLA audits.",
      "Instituted systematic three-way matching (PO, GR, Invoice) in SAP MM, reducing billing disputes and discrepancy delays by 22%.",
      "Negotiated flexible commercial payment terms and volume rebates that bolstered corporate cash liquidity.",
    ],
    tools: ["SAP MM ERP", "SLA Governance", "Spend Analytics", "Three-Way Matching", "Vendor Auditing"],
  },
  {
    id: "dupak",
    period: "August 2019 – April 2022",
    role: "Purchaser",
    company: "DUPAK INTERNATIONAL",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    overview:
      "Led end-to-end purchasing operations, technical RFQ/RFP evaluations, vendor performance analysis, and inventory optimization for manufacturing operations.",
    keyAchievements: [
      "Analyzed competitive RFQs/RFPs and negotiated supplier quotes for high-precision components and consumables.",
      "Identified and vetted certified alternative suppliers, successfully mitigating production downtime by 35%.",
      "Implemented Just-In-Time (JIT) replenishment methodologies, realizing PKR 100,000 in annual warehouse holding savings.",
      "Conducted extensive market price benchmarking and vendor financial viability assessments prior to contract awards.",
      "Administered purchase requisitions, supplier expediting, and logistics tracking for timely factory delivery.",
    ],
    tools: ["Oracle ERP", "RFQ/RFP Lifecycle", "JIT Inventory", "Cost Modeling", "Supplier Risk"],
  },
]

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bba",
    period: "2014 – 2018",
    degree: "Bachelor of Business Administration (BBA HONS)",
    institution: "University of the Punjab",
    location: "Lahore, Pakistan",
    field: "Business Administration & Supply Chain",
    highlights: [
      "Comprehensive coursework in Operations Management, Commercial Law, Quantitative Decision Making, and Strategic Planning.",
      "Graduated with honors in 2018 with strong foundational analytical and corporate leadership training.",
    ],
  },
  {
    id: "fsc",
    period: "2015 – 2017",
    degree: "FSc Pre-Medical",
    institution: "Punjab Group of Colleges",
    location: "Lahore, Pakistan",
    field: "Pre-Medical Sciences",
    highlights: [
      "Rigorous foundations in analytical reasoning, empirical data analysis, and methodical problem solving.",
      "Graduated with strong academic standing.",
    ],
  },
]

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "SAP MM (ERP)",
    category: "ERP & Systems",
    level: "Expert",
    icon: "Database",
    description: "Purchase Orders, Goods Receipts, Master Data, Three-Way Matching & Workflows",
  },
  {
    name: "Oracle ERP",
    category: "ERP & Systems",
    level: "Advanced",
    icon: "Layers",
    description: "Procure-to-Pay transactional execution, requisitions, and inventory tracking",
  },
  {
    name: "Strategic Sourcing",
    category: "Strategic Procurement",
    level: "Expert",
    icon: "Search",
    description: "Market research, category management, total cost analysis & supplier discovery",
  },
  {
    name: "RFQ & RFP Lifecycle",
    category: "Strategic Procurement",
    level: "Expert",
    icon: "FileSpreadsheet",
    description: "Tender drafting, supplier bid evaluation, cost breakdown & award matrices",
  },
  {
    name: "Contract Negotiation",
    category: "Strategic Procurement",
    level: "Expert",
    icon: "Handshake",
    description: "Commercial pricing, credit windows, SLA warranties & liquidated damages",
  },
  {
    name: "Vendor Management",
    category: "Supply Chain & Ops",
    level: "Expert",
    icon: "Users",
    description: "45+ primary vendor portfolio oversight, supplier tiering & scorecard governance",
  },
  {
    name: "Cost Reduction Strategies",
    category: "Governance & Finance",
    level: "Expert",
    icon: "TrendingDown",
    description: "Proven track record delivering 12% YoY procurement savings on multi-million budgets",
  },
  {
    name: "Spend & Budget Analysis",
    category: "Governance & Finance",
    level: "Advanced",
    icon: "PieChart",
    description: "Tail spend rationalization, cost modeling, and variance reporting",
  },
  {
    name: "Inventory Control & JIT",
    category: "Supply Chain & Ops",
    level: "Advanced",
    icon: "Boxes",
    description: "Just-In-Time replenishment, safety stock tuning, and carrying cost reduction",
  },
  {
    name: "Supplier Risk & Audits",
    category: "Supply Chain & Ops",
    level: "Advanced",
    icon: "ShieldCheck",
    description: "Vendor factory audits, compliance vetting, and dual-sourcing contingency",
  },
  {
    name: "PO Lifecycle Velocity",
    category: "Strategic Procurement",
    level: "Expert",
    icon: "Clock",
    description: "Slashing approval bottlenecks to achieve 48-hour procurement turnarounds",
  },
  {
    name: "Three-Way Matching",
    category: "Governance & Finance",
    level: "Expert",
    icon: "CheckCircle2",
    description: "Rigorous PO-GR-Invoice synchronization cutting dispute rates by 22%",
  },
]
