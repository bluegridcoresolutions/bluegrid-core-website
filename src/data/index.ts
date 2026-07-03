import {
  Cloud, Phone, Shield, Brain, Settings,
  ArrowRight, Mail, Globe, Server, Code2, Database, Lock,
  Wifi, Cpu, BarChart3, HeadphonesIcon, HardDrive, Layers,
  Zap, Users, Building2, ShieldCheck, CheckCircle2, TrendingUp,
  Clock, Award, Star, ChevronDown, ExternalLink, Activity,
  Network, Eye, Lightbulb, Target, Fingerprint,
} from "lucide-react";

export const IMG = {
  hero:       "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=900&h=560&fit=crop&auto=format",
  heroBrain:  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=560&fit=crop&auto=format",
  aiRobot:    "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?w=800&h=500&fit=crop&auto=format",
  aiCircles:  "https://images.unsplash.com/photo-1770210217380-d78a69acdc77?w=800&h=500&fit=crop&auto=format",
  aiGlow:     "https://images.unsplash.com/photo-1770169272345-9636d5ef2681?w=800&h=500&fit=crop&auto=format",
  aiDeep:     "https://images.unsplash.com/photo-1717501218198-816a64915f81?w=800&h=500&fit=crop&auto=format",
  cloud:      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=800&h=500&fit=crop&auto=format",
  cloud2:     "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?w=800&h=500&fit=crop&auto=format",
  cyber:      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop&auto=format",
  cyber2:     "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&h=500&fit=crop&auto=format",
  network:    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&auto=format",
  wires:      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=800&h=500&fit=crop&auto=format",
  helpdesk:   "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&auto=format",
  support:    "https://images.unsplash.com/photo-1536148935331-408321065b18?w=800&h=500&fit=crop&auto=format",
};

export const branches = [
  {
    id: "01",
    name: "BlueGrid Digitals",
    tag: "IT / Cloud",
    icon: Cloud,
    color: "#1a6cf0",
    description:
      "Full-stack cloud architecture and web delivery — from domain registration to enterprise Azure deployments — built for organizations that demand uptime, speed, and security by default.",
    longDescription:
      "BlueGrid Digitals is the cloud and digital arm of our portfolio, delivering complete web presence and infrastructure solutions. We architect, deploy, and maintain environments on Microsoft Azure and hybrid cloud setups that scale with your business — while keeping your domain, DNS, and web delivery stack under one managed roof.",
    services: [
      { icon: Globe, label: "Website Design & Development" },
      { icon: Server, label: "Azure Cloud Deployments" },
      { icon: Code2, label: "Custom Software Solutions" },
      { icon: Database, label: "Domain & DNS Management" },
      { icon: Layers, label: "Infrastructure as Code (IaC)" },
      { icon: Zap, label: "DevOps & CI/CD Pipelines" },
    ],
    highlights: ["Azure Certified", "99.9% Uptime SLA", "Hybrid Cloud Ready"],
    image: IMG.cloud,
    imageAlt: "3D render of cloud computing concept",
  },
  {
    id: "02",
    name: "BlueGrid Connect",
    tag: "Communications",
    icon: Phone,
    color: "#00d4ff",
    description:
      "Enterprise-grade VoIP, call center infrastructure, and unified communications that connect your teams, your clients, and your operations — reliably and at scale.",
    longDescription:
      "BlueGrid Connect designs and manages the communication backbone of modern organizations. From high-availability VoIP deployments to fully managed call center platforms with analytics and reporting, we ensure every conversation — internal or external — happens with clarity and continuity.",
    services: [
      { icon: Wifi, label: "VoIP System Setup & Management" },
      { icon: HeadphonesIcon, label: "Call Center Platforms" },
      { icon: Phone, label: "Unified Communications (UCaaS)" },
      { icon: Users, label: "Team Collaboration Tooling" },
      { icon: BarChart3, label: "Call Analytics & Reporting" },
      { icon: Settings, label: "PBX Configuration & Support" },
    ],
    highlights: ["Multi-Site VoIP", "Call Recording", "CRM Integration"],
    image: IMG.wires,
    imageAlt: "Enterprise network cables and infrastructure",
  },
  {
    id: "03",
    name: "BlueGrid Security",
    tag: "Cybersecurity",
    icon: Shield,
    color: "#f04e1a",
    description:
      "Offensive and defensive cybersecurity — penetration testing, compliance frameworks, and real-time threat monitoring — to keep your data and reputation intact.",
    longDescription:
      "BlueGrid Security operates across the full security lifecycle: we assess your vulnerabilities before adversaries do, build the controls that protect your most sensitive data, and maintain the monitoring posture that detects threats before they escalate. From SOC 2 readiness to active red-team engagements, we cover it all.",
    services: [
      { icon: ShieldCheck, label: "Penetration Testing" },
      { icon: Lock, label: "Data Encryption & DLP" },
      { icon: Shield, label: "SOC 2 & ISO 27001 Compliance" },
      { icon: Cpu, label: "Endpoint Detection & Response" },
      { icon: Eye, label: "Security Audits & Risk Reports" },
      { icon: Zap, label: "Incident Response Planning" },
    ],
    highlights: ["Red Team Ops", "SOC 2 Certified", "24/7 Threat Watch"],
    image: IMG.cyber,
    imageAlt: "Matrix-style cybersecurity code on screen",
  },
  {
    id: "04",
    name: "BlueGrid AI",
    tag: "Artificial Intelligence",
    icon: Brain,
    color: "#8b5cf6",
    description:
      "Machine learning pipelines, intelligent automation, and data analytics engineered to turn your raw data into competitive advantage — without the complexity.",
    longDescription:
      "BlueGrid AI bridges the gap between cutting-edge AI research and practical business implementation. Our engineers design and deploy custom ML models, NLP systems, and automation workflows that integrate directly into your existing processes — delivering measurable ROI, not experimental demos.",
    services: [
      { icon: Brain, label: "Custom ML Model Development" },
      { icon: Zap, label: "Process Automation & RPA" },
      { icon: BarChart3, label: "Predictive Analytics" },
      { icon: Database, label: "Data Pipeline Engineering" },
      { icon: Code2, label: "NLP & Conversational AI" },
      { icon: Cpu, label: "AI Infrastructure & MLOps" },
    ],
    highlights: ["LLM Integration", "Real-Time Inference", "Custom Datasets"],
    image: IMG.heroBrain,
    imageAlt: "AI circuit board brain visualization",
  },
  {
    id: "05",
    name: "BlueGrid Managed",
    tag: "Managed Services",
    icon: Settings,
    color: "#10b981",
    description:
      "Fully managed IT operations — proactive helpdesk, infrastructure monitoring, and hardware procurement — so your team focuses on work, not tech problems.",
    longDescription:
      "BlueGrid Managed is the operational backbone for organizations that want enterprise IT without the overhead of an in-house department. We handle every layer: reactive helpdesk tickets, proactive infrastructure health checks, hardware sourcing, and lifecycle management — all under defined SLAs and with a dedicated account team.",
    services: [
      { icon: HeadphonesIcon, label: "24/7 IT Helpdesk Support" },
      { icon: HardDrive, label: "Hardware Procurement" },
      { icon: Settings, label: "Patch & Update Management" },
      { icon: Server, label: "Remote Infrastructure Monitoring" },
      { icon: Users, label: "Onboarding & Offboarding IT" },
      { icon: BarChart3, label: "SLA Reporting & Reviews" },
    ],
    highlights: ["< 4h Response SLA", "Named Account Manager", "Asset Tracking"],
    image: IMG.helpdesk,
    imageAlt: "IT professional at helpdesk workstation",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    icon: Target,
    body: "Structured sessions to map your current infrastructure, compliance requirements, pain points, and strategic objectives — producing a clear picture before any solution is proposed.",
  },
  {
    step: "02",
    title: "Solution Design",
    icon: Lightbulb,
    body: "Cross-branch specialists collaborate to architect a tailored solution — fully documented, scoped, and costed before any implementation begins. No surprises.",
  },
  {
    step: "03",
    title: "Implementation",
    icon: Zap,
    body: "Dedicated project leads execute rollout with defined milestones, stakeholder checkpoints, and zero-disruption deployment practices. You're kept in the loop at every stage.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    icon: Activity,
    body: "Post-deployment: continuous monitoring, managed maintenance, a named account contact, and regular review sessions. Long-term partnership, not one-and-done delivery.",
  },
];

export const reasons = [
  {
    label: "Full Spectrum Coverage",
    body: "Five specialized branches across every technology domain — cloud, comms, security, AI, and managed services — under one accountable holding company.",
    icon: Layers,
    stat: "5 Branches",
  },
  {
    label: "Enterprise-Grade Standards",
    body: "Every solution is engineered to the reliability, security, and scalability benchmarks that mission-critical operations demand.",
    icon: Building2,
    stat: "99.9% SLA",
  },
  {
    label: "Client-Centric Delivery",
    body: "No off-the-shelf templates. Every engagement is scoped, designed, and delivered around your specific business context and KPIs.",
    icon: Users,
    stat: "100% Custom",
  },
  {
    label: "Innovation at the Core",
    body: "We track the technology frontier so you don't have to — deploying only what's proven to drive measurable business results.",
    icon: Zap,
    stat: "Always Current",
  },
];

export const faqs = [
  {
    q: "Can BlueGrid handle multi-branch engagements simultaneously?",
    a: "Yes. Many of our clients engage two or more branches concurrently — for example, pairing BlueGrid Digitals for cloud infrastructure with BlueGrid Security for compliance and penetration testing. Our internal coordination model ensures seamless delivery across branches.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across financial services, healthcare, retail, logistics, professional services, and public sector. Our solutions are adapted to your sector's regulatory and operational context, not applied generically.",
  },
  {
    q: "Do you offer fixed-price or retainer engagements?",
    a: "Both. Project-scoped work (deployments, audits, custom AI builds) is quoted as fixed-price. Ongoing services like managed IT, security monitoring, and helpdesk are offered on monthly retainer with defined SLAs.",
  },
  {
    q: "How quickly can BlueGrid Managed respond to a critical incident?",
    a: "Our standard SLA for P1 (critical) incidents is under 4 hours. Premium clients on our Priority tier receive a 1-hour response commitment with a dedicated on-call engineer.",
  },
  {
    q: "Is BlueGrid AI suitable for companies that don't yet have a data team?",
    a: "Absolutely. BlueGrid AI includes data engineering as part of our scope — we help you establish the data pipelines, labelling, and infrastructure needed before any model work begins. We meet you where you are.",
  },
];

export const testimonials = [
  {
    quote: "BlueGrid Digitals migrated our entire infrastructure to Azure in under six weeks, with zero downtime. Their project management was exceptional.",
    name: "Operations Director",
    org: "Regional Financial Services Firm",
    branch: "01",
    color: "#1a6cf0",
  },
  {
    quote: "The penetration test from BlueGrid Security uncovered three critical gaps our internal team had missed. The remediation roadmap they provided was actionable and clear.",
    name: "Chief Information Security Officer",
    org: "Healthcare Technology Company",
    branch: "03",
    color: "#f04e1a",
  },
  {
    quote: "We deployed a custom AI forecasting model with BlueGrid AI that cut our inventory costs by 18%. From scoping to production in 10 weeks.",
    name: "Head of Data",
    org: "National Logistics Operator",
    branch: "04",
    color: "#8b5cf6",
  },
];

export const capabilities = [
  "Azure Cloud", "VoIP Systems", "Penetration Testing", "Machine Learning",
  "IT Helpdesk", "DevOps", "SOC 2 Compliance", "Data Analytics",
  "Call Centers", "Endpoint Security", "Website Development", "AI Automation",
  "Hardware Procurement", "DNS Management", "ISO 27001", "Remote Monitoring",
  "UCaaS", "NLP & Chatbots", "Infrastructure as Code", "MLOps",
  "Incident Response", "Business Intelligence", "Patch Management", "PBX Systems",
  "Red Team Testing", "Power BI", "Microsoft 365", "Zero Trust Architecture",
];