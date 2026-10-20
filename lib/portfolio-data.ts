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
  category: "all" | "revenue" | "velocity" | "quality" | "recovery" | "efficiency"
  categoryLabel: string
  metric?: string
  metricLabel?: string
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
  category:
    | "Healthcare Finance"
    | "US Medical Billing"
    | "Accounting & EHR Systems"
    | "Accounting & Governance"
    | "Compliance & Regulatory"
    | "Financial Analytics"
  level: "Expert" | "Advanced"
  icon: string
  description: string
}

export const PERSONAL_INFO = {
  name: "Ramz Mustafa",
  firstName: "Ramz",
  lastName: "Mustafa",
  monogram: "RM",
  headline: "Healthcare Accountant & US Revenue Cycle Management (RCM) Specialist",
  title: "Healthcare Accountant & US Revenue Cycle Management (RCM) Specialist",
  shortTitle: "Senior Healthcare & Revenue Cycle Accountant",
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
  experienceYears: "5+ Years",
  annualBillingVolume: "$2M+ USD",
  systems: ["Kareo", "AdvancedMD", "Athenahealth", "QuickBooks"],
  focusAreas: [
    "US Healthcare Accounting",
    "Revenue Cycle Management",
    "US Medical Billing",
    "ERA/EOB Reconciliation",
    "Medical Accounts Receivable",
    "Financial Reporting",
    "Revenue Recognition",
    "US Healthcare Financial Compliance",
  ],
  summary:
    "Senior Healthcare Accountant with over five years of specialized experience in US medical billing accounting, Revenue Cycle Management (RCM), electronic remittance advice (ERA/EOB) reconciliation, contractual allowance posting, and HIPAA-compliant financial reporting. Experienced in managing multi-million-dollar billing portfolios for US healthcare providers, optimizing medical AR aging, and executing accrual accounting for commercial payors including Aetna, BCBS, Cigna, and UnitedHealthcare, as well as government payors Medicare and Medicaid.",
}

export const STATS_DATA: StatItem[] = [
  {
    id: "experience",
    number: 5,
    suffix: "+",
    label: "Years of",
    sublabel: "Specialized Experience",
  },
  {
    id: "billing-portfolio",
    number: 2,
    prefix: "$",
    suffix: "M+",
    label: "Annual Billing",
    sublabel: "Portfolio Managed",
  },
  {
    id: "reconciliation-accuracy",
    number: 98.5,
    suffix: "%",
    decimals: 1,
    label: "Reconciliation",
    sublabel: "Accuracy Rate",
  },
  {
    id: "posting-turnaround",
    number: 48,
    suffix: "h",
    label: "Payment Posting",
    sublabel: "Ledger Turnaround",
  },
]

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Healthcare Financial Accounting & Revenue Recognition",
    shortDesc:
      "Executing accrual-based accounting for US healthcare practices, managing gross revenue versus net realized revenue, and recording contractual adjustments and bad debt write-offs according to US GAAP.",
    fullDesc:
      "Executing accrual-based healthcare accounting for US practices, rigorously managing gross versus net realized revenue, posting contractual adjustments, and documenting bad debt write-offs in accordance with US GAAP to ensure reliable, audit-ready financial statements.",
    deliverables: [
      "Accrual-based healthcare accounting & GAAP compliance",
      "Gross-to-net realized revenue recognition",
      "Contractual allowance & bad debt write-off journal entries",
      "General ledger reconciliation for practice accounts",
    ],
    iconName: "Calculator",
  },
  {
    id: "02",
    number: "02",
    title: "ERA & EOB Payment Posting & Reconciliation",
    shortDesc:
      "Daily ledger posting of Electronic Remittance Advice (ERA) and Explanation of Benefits (EOB), balancing bank deposits against clearinghouse statements, and performing three-way reconciliations between patient accounts, EHRs, and general ledgers.",
    fullDesc:
      "Managing daily automated posting of 835 Electronic Remittance Advice (ERA) and line-item adjudication of Explanation of Benefits (EOB). Performing daily bank-to-clearinghouse balance checks and three-way matching between patient accounts, EHR/PM systems, and general ledgers.",
    deliverables: [
      "Daily Electronic Remittance Advice (ERA) automated posting",
      "Manual Explanation of Benefits (EOB) line-item adjudication",
      "Three-way reconciliation (Bank deposits, ERA clearinghouse, PM/EHR)",
      "Unapplied payment & patient copay balance resolution",
    ],
    iconName: "ReceiptText",
  },
  {
    id: "03",
    number: "03",
    title: "Medical Accounts Receivable (AR) & Aging Analysis",
    shortDesc:
      "Managing 30/60/90/120+ day insurance AR aging schedules, auditing underpaid or unpaid claims, and executing systematic recovery plans for outstanding commercial, Medicare, and Medicaid balances.",
    fullDesc:
      "Supervising insurance AR aging schedules across 30, 60, 90, and 120+ day buckets. Auditing unpaid, denied, and underpaid claims to execute disciplined recovery workflows that protect cash flow and minimize bad-debt write-offs.",
    deliverables: [
      "30/60/90/120+ day aged insurance AR recovery workflows",
      "Commercial, Medicare, and Medicaid payer balance auditing",
      "Patient responsibility ledger tracking and statement oversight",
      "Uncollected claims auditing & recovery strategy execution",
    ],
    iconName: "TrendingUp",
  },
  {
    id: "04",
    number: "04",
    title: "Denial Management & Claim Appeals Accounting",
    shortDesc:
      "Conducting financial variance and root-cause analysis on denied or rejected claims, tracking denial reason codes and CO/PR adjustments, and quantifying financial recoveries through formal payer appeals.",
    fullDesc:
      "Conducting in-depth financial variance and root-cause analysis on denied or rejected claims. Categorizing claim adjustment reason codes (CARC/RARC, CO/PR adjustments) and executing structured appeals to recover rightful practice revenues.",
    deliverables: [
      "Root-cause denial categorization (CO, PR, OA reason codes)",
      "Financial variance analysis on rejected and disputed claims",
      "Formal payer appeal submissions & recovery tracking",
      "Preventative billing controls reducing recurring denial patterns",
    ],
    iconName: "FileCheck2",
  },
  {
    id: "05",
    number: "05",
    title: "Contractual Allowance & Fee Schedule Auditing",
    shortDesc:
      "Auditing fee schedules against actual payer allowances, including PPO, HMO, and Medicare fee schedules, identifying underpayments, and reconciling contractual write-offs to protect practice net profit margins.",
    fullDesc:
      "Auditing actual payer remittances against contracted fee schedules for PPO, HMO, Medicare, and Medicaid plans. Identifying systemic underpayments, reclaiming lost revenue, and reconciling contractual write-offs against verified payer allowances.",
    deliverables: [
      "PPO, HMO, Medicare, and Medicaid fee schedule auditing",
      "Payer underpayment detection & discrepancy recovery",
      "Contractual write-off validation vs. negotiated payer allowances",
      "Practice net margin protection and fee schedule benchmarking",
    ],
    iconName: "ClipboardCheck",
  },
  {
    id: "06",
    number: "06",
    title: "Financial Reporting & US Healthcare Compliance",
    shortDesc:
      "Preparing monthly financial statements and practice KPI dashboards covering Days in AR, Clean Claim Rate, and Net Collection Rate, while adhering to HIPAA requirements and applicable US healthcare financial rules.",
    fullDesc:
      "Preparing monthly executive financial statements and practice KPI dashboards detailing Days in AR, Clean Claim Rate, and Net Collection Rate. Ensuring complete compliance with HIPAA standards and US healthcare financial regulations.",
    deliverables: [
      "Practice KPI dashboards (Days in AR, Clean Claim Rate, Net Collection Rate)",
      "Month-end financial close & executive revenue reports",
      "Strict HIPAA compliance & healthcare financial data protection",
      "Audit-ready billing documentation and financial controls",
    ],
    iconName: "ShieldCheck",
  },
]

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "rev-growth-12",
    title: "Year-over-Year Collection Growth",
    category: "revenue",
    categoryLabel: "Revenue Optimization",
    metric: "+12%",
    metricLabel: "YoY Collection Growth",
    company: "ZeroEight Operations / US Medical Billing",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Unlocked a 12% year-over-year increase in net insurance collections through rigorous fee schedule audits, underpayment recovery, and accrual reconciliation.",
    challenge:
      "Healthcare client practices faced undetected revenue leakage stemming from payer fee schedule underpayments, delayed payment adjustments, and unrecovered balance write-offs.",
    execution:
      "Audited commercial and government payer fee schedules, identified systemic underpayments, enforced strict accrual accounting reconciliations, and established systematic underpayment appeals.",
    verifiedImpact:
      "Unlocked a confirmed 12% year-over-year increase in net insurance collections across multi-million-dollar healthcare client portfolios.",
    tags: ["Collection Growth", "Fee Schedule Audits", "Underpayment Recovery", "Revenue Recognition"],
  },
  {
    id: "posting-velocity-48h",
    title: "Payment Posting Turnaround",
    category: "velocity",
    categoryLabel: "Process Velocity",
    metric: "48h",
    metricLabel: "Posting Turnaround",
    company: "ZeroEight Operations / US Medical Billing",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Accelerated ERA/EOB payment posting and bank reconciliation turnaround from five business days to under 48 hours.",
    challenge:
      "Manual remittance handling and delayed clearinghouse verification created a 5-day posting backlog, obscuring patient AR visibility and delaying monthly ledger closures.",
    execution:
      "Implemented automated Electronic Remittance Advice (ERA) batch workflows, restructured daily bank-to-clearinghouse balance checks, and standardized manual EOB exception handling.",
    verifiedImpact:
      "Compressed payment posting and ledger reconciliation turnaround from 5 full business days down to under 48 hours.",
    tags: ["ERA/EOB Posting", "Bank Reconciliation", "Process Velocity", "Kareo / AdvancedMD"],
  },
  {
    id: "reconciliation-accuracy-98",
    title: "Reconciliation Accuracy",
    category: "quality",
    categoryLabel: "Quality & Compliance",
    metric: "98.5%",
    metricLabel: "Reconciliation Accuracy",
    company: "ZeroEight Operations / US Medical Billing",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Maintained a 98.5% financial reconciliation accuracy rate across high-volume clearinghouse submissions and ledger postings, with zero HIPAA compliance findings as stated in the source document.",
    challenge:
      "High claim volumes across multiple commercial and government payers created complex reconciliation trails susceptible to posting discrepancies and compliance risks.",
    execution:
      "Enforced strict three-way balancing between bank deposits, clearinghouse remittances, and practice management general ledgers with rigorous HIPAA compliance protocols.",
    verifiedImpact:
      "Maintained a sustained 98.5% financial reconciliation accuracy rate across high-volume clearinghouse submissions and ledger postings with zero HIPAA findings.",
    tags: ["98.5% Accuracy", "HIPAA Compliance", "Clearinghouse", "Financial Reconciliations"],
  },
  {
    id: "billing-errors-22",
    title: "Billing & Ledger Errors",
    category: "quality",
    categoryLabel: "Discrepancy Reduction",
    metric: "−22%",
    metricLabel: "Fewer Ledger Errors",
    company: "ZeroEight Operations / US Medical Billing",
    location: "Sharjah, UAE",
    period: "2022 – Present",
    summary:
      "Reduced payment reconciliation errors and posting disputes by 22% using automated three-way matching between EHR encounters, claim files, and ERA deposits.",
    challenge:
      "Variances between EHR patient encounters, submitted 837 claim files, and 835 ERA payment deposits generated ledger disputes and distorted revenue reporting.",
    execution:
      "Established automated three-way matching protocols connecting EHR clinical encounters, clearinghouse transaction reports, and general ledger deposit batches.",
    verifiedImpact:
      "Reduced payment reconciliation errors and posting disputes by 22%, ensuring completely audit-ready general ledgers.",
    tags: ["Three-Way Matching", "Discrepancy Reduction", "EHR Reconciliation", "Audit Readiness"],
  },
  {
    id: "ar-days-35",
    title: "Days in Accounts Receivable",
    category: "recovery",
    categoryLabel: "AR Recovery",
    metric: "−35%",
    metricLabel: "Days in AR Reduction",
    company: "DUPAK Healthcare Solutions",
    location: "Lahore, Pakistan",
    period: "2019 – 2022",
    summary:
      "Reduced average Days in Accounts Receivable by 35% through structured follow-ups on aged insurance claims exceeding 90 days.",
    challenge:
      "Aged insurance accounts receivable beyond 90 and 120 days tied up practice working capital and inflated bad-debt risk.",
    execution:
      "Segmented aging reports by payer class and denial type, executed systematic follow-up cadences, and initiated formal appeals on improperly adjusted claims.",
    verifiedImpact:
      "Reduced average Days in Accounts Receivable by 35% through structured follow-ups on aged insurance claims exceeding 90 days.",
    tags: ["Days in AR", "Aged Claims Recovery", "Medicare & Commercial", "Cash Flow Optimization"],
  },
  {
    id: "admin-workflow-opt",
    title: "Administrative Workflow Optimization",
    category: "efficiency",
    categoryLabel: "Workflow Optimization",
    metricLabel: "Process Efficiency",
    company: "DUPAK Healthcare Solutions",
    location: "Lahore, Pakistan",
    period: "2019 – 2022",
    summary:
      "Streamlined patient statement delivery and collections posting workflows, reducing manual processing overhead and administrative operating expenses.",
    challenge:
      "Manual patient balance statement generation and disconnected payment logging created substantial administrative overhead and delayed patient collections.",
    execution:
      "Re-engineered patient balance billing workflows, digitized statement delivery schedules, and streamlined unapplied patient payment allocation.",
    verifiedImpact:
      "Substantially decreased administrative processing overhead and accelerated patient copay/deductible collections without unverified claims.",
    tags: ["Workflow Automation", "Patient Billing", "Administrative Efficiency", "Collections Workflow"],
  },
]

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "zeroeight-healthcare",
    period: "July 2022 – Present",
    role: "Senior Healthcare & Revenue Cycle Accountant",
    company: "ZeroEight Operations / US Medical Billing Division",
    location: "Sharjah, UAE",
    type: "Full-Time",
    overview:
      "Directing healthcare accounting operations, ERA payment reconciliations, medical AR aging, and financial reporting for US-based healthcare practices, multi-specialty clinics, and ambulatory providers.",
    keyAchievements: [
      "Managed monthly healthcare billing general ledgers and financial reconciliations for US client portfolios exceeding $2 million USD in annual billing volume.",
      "Reconciled daily bank deposits against ERA/EOB remittances from Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid.",
      "Oversaw contractual allowance postings, fee schedule adjustments, and accrual revenue recognition in accordance with US GAAP.",
      "Accelerated clearinghouse-to-ledger payment turnaround times from five business days to under 48 hours.",
      "Achieved 98.5% reconciliation accuracy across high-volume claims and patient ledger postings.",
      "Conducted monthly AR aging audits and root-cause analysis on claim denials, reducing billing discrepancies by 22%.",
      "Engineered automated three-way matching workflows syncing EHR clinical encounters, clearinghouse ERA reports, and bank deposits.",
    ],
    tools: [
      "US Medical Billing Accounting",
      "ERA/EOB Posting",
      "Kareo",
      "AdvancedMD",
      "Athenahealth",
      "QuickBooks",
      "Days in AR",
      "HIPAA Compliance",
    ],
  },
  {
    id: "dupak-healthcare",
    period: "August 2019 – April 2022",
    role: "Staff Accountant (Medical Billing & AR)",
    company: "DUPAK Healthcare Solutions",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    overview:
      "Managed accounts payable and receivable, insurance payment posting, bank reconciliations, and patient account audits for medical billing operations.",
    keyAchievements: [
      "Processed daily ERA payment files, posted patient copays and deductibles, and performed bank-to-ledger reconciliations.",
      "Analyzed insurance aging reports and identified unpaid or underpaid claims, helping recover 35% of overdue 90+ day AR balances.",
      "Prepared monthly practice financial reports covering gross charges, net collections, contractual write-offs, and bad debt adjustments.",
      "Audited patient billing accounts for CPT, ICD-10, and HCPCS coding cross-checks and resolved ledger discrepancy tickets.",
      "Administered multi-payer adjudication review across Medicare, Medicaid, and private commercial insurance payors.",
    ],
    tools: [
      "Oracle Financials",
      "QuickBooks",
      "Medical AR Reconciliation",
      "Contractual Adjustments",
      "EHR Systems",
      "Patient Billing",
      "Fee Schedule Auditing",
    ],
  },
  {
    id: "dupak-junior",
    period: "January 2019 – July 2019",
    role: "Junior Revenue & Billing Associate",
    company: "DUPAK Healthcare Operations",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    overview:
      "Supported daily ledger reconciliation, patient copay balancing, and remittance verification during EHR system implementations and billing workflow digital transitions.",
    keyAchievements: [
      "Audited daily deposit batches and verified clearinghouse electronic transmission logs against commercial bank statements.",
      "Verified patient responsibility copays, deductibles, and secondary payer claims line-by-line across outpatient encounters.",
      "Maintained complete HIPAA-compliant digital archiving of remittance advice, payment receipts, and billing correspondence.",
      "Assisted senior accountants in preparing monthly gross billing schedules and practice collections summaries.",
    ],
    tools: [
      "EHR Data Verification",
      "Remittance Auditing",
      "Bank Reconciliation",
      "Patient Ledgers",
      "HIPAA Guidelines",
    ],
  },
]

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bba",
    period: "2014 – 2018",
    degree: "Bachelor of Business Administration (BBA HONS)",
    institution: "University of the Punjab",
    location: "Lahore, Pakistan",
    field: "Business Administration & Quantitative Finance",
    highlights: [
      "Comprehensive coursework in Financial Accounting, Operations Management, Quantitative Decision Making, Corporate Law, and Strategic Planning.",
      "Graduated with honors in 2018; built foundational analytical rigor and enterprise corporate governance training.",
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
      "Rigorous foundations in scientific inquiry, empirical data analysis, and systematic problem solving.",
      "Graduated with strong academic standing.",
    ],
  },
  {
    id: "hipaa-compliance",
    period: "2021",
    degree: "US Healthcare Financial Compliance & HIPAA Certification",
    institution: "Healthcare Financial & Compliance Training Institute",
    location: "Online / Professional Certification",
    field: "HIPAA Security Rule & Healthcare Financial Ethics",
    highlights: [
      "Comprehensive training on HIPAA Privacy and Security Rules, electronic protected health information (ePHI) safeguarding, and EDI transmission security.",
      "Mastery of US GAAP revenue recognition standards (ASC 606) specifically applied to healthcare contractual adjustments and realized collections.",
    ],
  },
  {
    id: "rcm-billing",
    period: "2022",
    degree: "Advanced US Medical Billing & EHR/PM Systems Specialization",
    institution: "Medical Billing & RCM Academy",
    location: "Professional Specialization",
    field: "Kareo, AdvancedMD, Athenahealth & QuickBooks GL",
    highlights: [
      "Hands-on technical specialization in medical practice management software, Electronic Remittance Advice (835 ERA auto-posting), and 837 claim balancing.",
      "Advanced certification in three-way ledger matching, denial appeals workflows, and practice KPI analytics.",
    ],
  },
]

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "US Healthcare Accounting & GAAP",
    category: "Healthcare Finance",
    level: "Expert",
    icon: "Calculator",
    description: "Accrual accounting, gross-to-net realized revenue, and contractual adjustment postings",
  },
  {
    name: "ERA/EOB Payment Posting & Reconciliations",
    category: "US Medical Billing",
    level: "Expert",
    icon: "ReceiptText",
    description: "835 ERA auto-posting, EOB line-item adjustments, and clearinghouse balancing",
  },
  {
    name: "Medical Accounts Receivable (AR Aging)",
    category: "Healthcare Finance",
    level: "Expert",
    icon: "TrendingUp",
    description: "30/60/90/120+ day insurance AR recovery and cash flow predictability",
  },
  {
    name: "Contractual Allowances & Write-off Audits",
    category: "Healthcare Finance",
    level: "Expert",
    icon: "ClipboardCheck",
    description: "Fee schedule auditing, underpayment recovery, and contractual write-off reconciliation",
  },
  {
    name: "Kareo / AdvancedMD / Athenahealth / QuickBooks",
    category: "Accounting & EHR Systems",
    level: "Expert",
    icon: "Database",
    description: "Medical practice management platforms, EHR billing ledgers, and QuickBooks GL",
  },
  {
    name: "US Payer Rules (Medicare, Medicaid, BCBS, Commercial)",
    category: "US Medical Billing",
    level: "Expert",
    icon: "Building2",
    description: "Adjudication guidelines for Medicare, Medicaid, Aetna, Cigna, and UnitedHealthcare",
  },
  {
    name: "Denial Management & Claims Financial Recovery",
    category: "US Medical Billing",
    level: "Advanced",
    icon: "FileCheck2",
    description: "CARC/RARC denial reason code analysis, CO/PR variances, and formal payer appeals",
  },
  {
    name: "CPT, ICD-10 & HCPCS Financial Understanding",
    category: "US Medical Billing",
    level: "Advanced",
    icon: "FileSpreadsheet",
    description: "Financial cross-checks of medical procedure, diagnostic, and supply billing codes",
  },
  {
    name: "Three-Way Ledger Matching (Bank / ERA / EHR)",
    category: "Accounting & Governance",
    level: "Expert",
    icon: "CheckCircle2",
    description: "Synchronization of bank deposits, clearinghouse reports, and PM/EHR patient ledgers",
  },
  {
    name: "HIPAA Compliance & Financial Security",
    category: "Compliance & Regulatory",
    level: "Advanced",
    icon: "ShieldCheck",
    description: "PHI data protection, audit readiness, and strict US healthcare financial compliance",
  },
  {
    name: "Practice KPIs (Days in AR, Net Collection Rate)",
    category: "Financial Analytics",
    level: "Expert",
    icon: "PieChart",
    description: "KPI tracking across Days in AR, Clean Claim Rate, and Net Realized Collection Rate",
  },
  {
    name: "Month-End Financial Close & Budget Variance",
    category: "Healthcare Finance",
    level: "Expert",
    icon: "Layers",
    description: "Healthcare general ledger close, balance sheet reconciliation, and variance analysis",
  },
  {
    name: "Gross-to-Net Revenue Modeling",
    category: "Healthcare Finance",
    level: "Expert",
    icon: "TrendingUp",
    description: "Accurate realization modeling, bad debt reserves, and payer allowance forecasts",
  },
  {
    name: "Patient Responsibility & Co-Pay Ledgers",
    category: "US Medical Billing",
    level: "Expert",
    icon: "ReceiptText",
    description: "Copay, coinsurance, and deductible balancing with automated electronic statements",
  },
  {
    name: "Clearinghouse EDI 835 & 837 Transmission",
    category: "Accounting & EHR Systems",
    level: "Expert",
    icon: "Layers",
    description: "Electronic data interchange batch transmission, 999 acknowledgement, and 277 CA logs",
  },
  {
    name: "Commercial Payer Portal Adjudication",
    category: "US Medical Billing",
    level: "Expert",
    icon: "Building2",
    description: "Availity, Navinet, and direct payer portal claim status verification and payment traces",
  },
  {
    name: "Healthcare Cash Flow & Working Capital",
    category: "Financial Analytics",
    level: "Expert",
    icon: "Calculator",
    description: "Revenue velocity acceleration, unapplied cash reduction, and liquidity optimization",
  },
  {
    name: "Audit-Ready Financial Controls & SOPs",
    category: "Accounting & Governance",
    level: "Advanced",
    icon: "ShieldCheck",
    description: "Rigorous standard operating procedures, documentation integrity, and SOX-style controls",
  },
]
