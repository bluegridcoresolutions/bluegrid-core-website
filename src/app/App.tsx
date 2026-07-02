import { useState } from "react";
import {
  Menu, X, ArrowRight, Cloud, Phone, Shield, Brain, Settings,
  ChevronRight, Mail, Globe, Server, Code2, Database, Lock,
  Wifi, Cpu, BarChart3, HeadphonesIcon, HardDrive, Layers,
  Zap, Users, Building2, ShieldCheck, CheckCircle2, TrendingUp,
  Clock, Award, Star, ChevronDown, ExternalLink, Activity,
  Network, Eye, Lightbulb, Target, Fingerprint,
  Search
} from "lucide-react";

// ── Images ────────────────────────────────────────────────────────────────────
const IMG = {
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

// ── Data ──────────────────────────────────────────────────────────────────────
const branches = [
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

const process = [
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

const reasons = [
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

const faqs = [
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

const testimonials = [
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

const capabilities = [
  "Azure Cloud", "VoIP Systems", "Penetration Testing", "Machine Learning",
  "IT Helpdesk", "DevOps", "SOC 2 Compliance", "Data Analytics",
  "Call Centers", "Endpoint Security", "Website Development", "AI Automation",
  "Hardware Procurement", "DNS Management", "ISO 27001", "Remote Monitoring",
  "UCaaS", "NLP & Chatbots", "Infrastructure as Code", "MLOps",
  "Incident Response", "Business Intelligence", "Patch Management", "PBX Systems",
  "Red Team Testing", "Power BI", "Microsoft 365", "Zero Trust Architecture",
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState(branches[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 h-16 flex items-center justify-between">
          {/* Logo – left */}
          <a href="#" className="flex items-center shrink-0">
            <img src="/logo-full-dark.svg" alt="BlueGrid Core" className="h-8 sm:h-10 w-auto" />
          </a>

          {/* Search bar – center */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4 lg:mx-8 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-secondary/20 border border-border rounded-sm px-4 py-1.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors pl-9"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
          </div>

          {/* Right side: links + Get in Touch */}
          <div className="hidden lg:flex items-center gap-6">
            {[["About","#about"],["Branches","#branches"],["Services","#services"],["Process","#process"],["Why Us","#why"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h])=>(
              <a key={l} href={h} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">{l}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors">
              Get in Touch <ArrowRight size={14}/>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden text-muted-foreground hover:text-foreground" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 py-4 flex flex-col gap-4">
            {[["About","#about"],["Branches","#branches"],["Services","#services"],["Process","#process"],["Why Us","#why"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h])=>(
              <a key={l} href={h} className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={()=>setMenuOpen(false)}>{l}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors w-fit" onClick={()=>setMenuOpen(false)}>
              Get in Touch <ArrowRight size={14}/>
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="about" className="relative pt-28 lg:pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(26,108,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,108,240,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}/>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{
          background: "radial-gradient(ellipse at top, rgba(26,108,240,0.18) 0%, transparent 65%)",
        }}/>

        <div className="relative max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20 lg:pb-28">
          <div>
            <div className="inline-flex items-center gap-2 border border-border rounded-sm px-3 py-1.5 mb-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"/>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Technology Holding Company · Est. 2026</span>
            </div>

            <h1 className="text-5xl lg:text-[64px] font-extrabold text-foreground leading-[1.04] tracking-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Enterprise Tech,{" "}
              <span className="relative">
                <span className="text-primary">Five Disciplines.</span>
              </span>{" "}
              <span className="text-foreground/60">One Partner.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              BlueGrid Core Solutions is a technology holding company delivering cloud, communications, cybersecurity,
              artificial intelligence, and managed IT services — unified under one accountable roof.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#branches" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3">
                Explore Our Branches <ArrowRight size={16}/>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200">
                Contact Us
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {branches.map(b=>(
                <span key={b.id} className="flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-sm px-3 py-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }}/>
                  {b.tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-sm overflow-hidden border border-border" style={{ height: "420px" }}>
              <img src={IMG.hero} alt="AI technology abstract sphere with neural network" className="w-full h-full object-cover"/>
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,17,31,0.3) 0%, rgba(26,108,240,0.12) 100%)" }}/>
            </div>

            <div className="absolute -bottom-5 -left-6 bg-card/95 backdrop-blur-sm border border-border rounded-sm p-4 shadow-xl flex items-center gap-3" style={{ minWidth: 200 }}>
              <div className="w-9 h-9 rounded-sm bg-green-500/20 flex items-center justify-center shrink-0">
                <Activity size={16} className="text-green-400"/>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>All Systems</div>
                <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>Operational ✓</div>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-primary rounded-sm px-4 py-3 shadow-xl">
              <div className="text-3xl font-black text-white leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>5</div>
              <div className="text-[10px] text-blue-200 uppercase tracking-wider mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Branches</div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-5 bg-card/95 backdrop-blur-sm border border-border rounded-sm p-3 shadow-xl">
              <div className="flex flex-col gap-2">
                {branches.map(b=>(
                  <div key={b.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: b.color }}/>
                    <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{b.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 pb-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-b-0 border-border rounded-t-sm overflow-hidden">
            {[
              { v:"5", l:"Specialized Branches", icon: Layers },
              { v:"24/7", l:"Managed Support Coverage", icon: Clock },
              { v:"< 4h", l:"Critical Incident SLA", icon: Zap },
              { v:"2026", l:"Founded", icon: Award },
            ].map(m=>(
              <div key={m.l} className="bg-card px-6 py-5 flex items-center gap-4">
                <m.icon size={18} className="text-primary shrink-0"/>
                <div>
                  <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.v}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{m.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section className="py-14 border-y border-border bg-secondary/20">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Our Mission
          </div>
          <p className="text-xl lg:text-2xl font-light text-foreground leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            "To deliver cutting-edge technology solutions that power businesses forward through{" "}
            <span className="text-primary font-semibold">innovation</span>,{" "}
            <span className="text-accent font-semibold">security</span>, and{" "}
            <span className="font-semibold">reliability</span>."
          </p>
        </div>
      </section>

      {/* ── AI SHOWCASE ── */}
      <section className="py-24 lg:py-32 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 max-w-screen-2xl 2xl:max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Powered by Intelligence
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              AI at the Heart of{" "}
              <span className="text-primary">Everything We Build</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Across all five branches, BlueGrid integrates artificial intelligence as a foundational capability —
              not a bolt-on. From AI-assisted threat detection in Security, intelligent call routing in Connect,
              to fully custom ML models in our dedicated AI branch, intelligence is embedded at every layer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our BlueGrid AI division leads this effort — designing, training, and deploying production-grade machine learning
              systems that integrate directly with your workflows, infrastructure, and business logic.
            </p>
            <div className="flex flex-wrap gap-3">
              {["LLM Integration","Computer Vision","Predictive Analytics","Process Automation","NLP Pipelines","MLOps"].map(t=>(
                <span key={t} className="text-xs border border-primary/30 text-primary px-3 py-1.5 rounded-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-sm overflow-hidden border border-border" style={{ height: 220 }}>
              <img src={IMG.hero} alt="AI neural network sphere" className="w-full h-full object-cover"/>
            </div>
            <div className="rounded-sm overflow-hidden border border-border" style={{ height: 220 }}>
              <img src={IMG.aiCircles} alt="AI concentric rings logo" className="w-full h-full object-cover"/>
            </div>
            <div className="col-span-2 rounded-sm overflow-hidden border border-border" style={{ height: 180 }}>
              <img src={IMG.heroBrain} alt="AI circuit board with brain visualization" className="w-full h-full object-cover object-center"/>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANCHES ── */}
      <section id="branches" className="py-24 lg:py-32 border-t border-border bg-secondary/10 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Portfolio</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Our Branches</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Five specialized divisions, each staffed with domain experts and built to deliver at enterprise scale. Click to explore.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {branches.map(b=>{
              const Icon = b.icon;
              const active = activeBranch.id === b.id;
              return (
                <button key={b.id} onClick={()=>setActiveBranch(b)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm border transition-all duration-200 font-medium"
                  style={{
                    background: active ? `${b.color}18` : "transparent",
                    borderColor: active ? b.color : "rgba(255,255,255,0.08)",
                    color: active ? b.color : "#6b8aaa",
                  }}
                >
                  <Icon size={14}/> {b.name.split(" ")[1]}
                </button>
              );
            })}
          </div>

          <div className="border border-border rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-10 bg-card flex flex-col gap-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0" style={{ background: `${activeBranch.color}22` }}>
                  <activeBranch.icon size={22} style={{ color: activeBranch.color }}/>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: activeBranch.color }}>{activeBranch.tag}</div>
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>{activeBranch.name}</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{activeBranch.longDescription}</p>

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Services</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBranch.services.map(svc=>(
                    <div key={svc.label} className="flex items-center gap-3 border border-border rounded-sm px-4 py-2.5 hover:border-opacity-60 transition-colors" style={{ borderColor: `${activeBranch.color}25` }}>
                      <svc.icon size={13} style={{ color: activeBranch.color }} className="shrink-0"/>
                      <span className="text-sm text-foreground/80">{svc.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeBranch.highlights.map(h=>(
                  <span key={h} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm" style={{ background: `${activeBranch.color}14`, color: activeBranch.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    <CheckCircle2 size={11}/> {h}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 self-start font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 hover:gap-3" style={{ background: activeBranch.color, color: "#fff" }}>
                Enquire About {activeBranch.name} <ArrowRight size={14}/>
              </a>
            </div>

            <div className="lg:col-span-2 relative min-h-[300px] bg-secondary">
              <img src={activeBranch.image} alt={activeBranch.imageAlt} className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${activeBranch.color}28 0%, rgba(6,17,31,0.55) 100%)` }}/>
              <div className="absolute bottom-5 left-5 border border-white/10 rounded-sm px-4 py-2 backdrop-blur-sm bg-black/30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="text-xs text-white/60 uppercase tracking-widest">Branch {activeBranch.id} / 05</span>
              </div>
            </div>
          </div>

          <div id="services" className="grid grid-cols-1 md:grid-cols-5 gap-px border border-t-0 border-border rounded-b-sm overflow-hidden mt-0">
            {branches.map(b=>{
              const Icon = b.icon;
              const active = activeBranch.id === b.id;
              return (
                <button key={b.id} onClick={()=>setActiveBranch(b)} className="bg-card p-5 text-left group transition-all duration-200 relative focus:outline-none" style={{ background: active ? "#0f2340" : undefined }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: b.color, opacity: active ? 1 : 0 }}/>
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-3" style={{ background: active ? `${b.color}22` : "rgba(255,255,255,0.04)" }}>
                    <Icon size={15} style={{ color: active ? b.color : "#6b8aaa" }}/>
                  </div>
                  <div className="text-[9px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: active ? b.color : "#3a5270" }}>{b.tag}</div>
                  <div className="text-xs font-semibold text-foreground leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{b.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH AI IMAGE BREAK ── */}
      <div className="relative h-72 lg:h-96 overflow-hidden border-y border-border">
        <img src={IMG.aiDeep} alt="Google DeepMind AI blue-green structure" className="w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,17,31,0.85) 0%, rgba(6,17,31,0.3) 50%, rgba(6,17,31,0.85) 100%)" }}/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 max-w-screen-2xl 2xl:max-w-full w-full mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>BlueGrid Core Solutions</div>
            <p className="text-2xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Five branches. One vision. Technology that works for your business.
            </p>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 lg:py-32 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 bg-secondary/10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="max-w-xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Engagement Model</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>How We Work</h2>
            <p className="text-muted-foreground text-base leading-relaxed">A structured, transparent approach from first conversation to long-term partnership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p,i)=>(
              <div key={p.step} className="bg-card border border-border rounded-sm p-7 flex flex-col gap-5 relative hover:border-primary/30 transition-colors duration-200 group">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <p.icon size={18} className="text-primary"/>
                  </div>
                  <span className="text-5xl font-black leading-none select-none" style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(26,108,240,0.10)" }}>{p.step}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-border"/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BLUEGRID ── */}
      <section id="why" className="py-24 lg:py-32 border-t border-border px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Differentiators</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why choose <span className="text-primary">BlueGrid</span>?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-10 max-w-md">
                We built BlueGrid Core Solutions to be the single technology partner for organizations that demand
                depth, accountability, and real innovation — not consultant-speak.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-sm overflow-hidden border border-border" style={{ height: 160 }}>
                  <img src={IMG.aiGlow} alt="AI glowing orange letters" className="w-full h-full object-cover"/>
                </div>
                <div className="rounded-sm overflow-hidden border border-border" style={{ height: 160 }}>
                  <img src={IMG.cloud2} alt="3D cloud computing digital visualization" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {reasons.map((r,i)=>(
                <div key={r.label} className="bg-card border border-border rounded-sm px-6 py-5 hover:border-primary/30 transition-colors duration-200 group">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <r.icon size={16} className="text-primary"/>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{r.label}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-sm bg-primary/10 text-primary" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.stat}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/10 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Client Outcomes</div>
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t,i)=>{
              const branch = branches.find(b=>b.id===t.branch)!;
              return (
                <div key={i} className="bg-card border border-border rounded-sm p-7 flex flex-col gap-5 hover:border-opacity-40 transition-colors" style={{ borderColor: `${t.color}30` }}>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_,si)=><Star key={si} size={13} className="fill-current" style={{ color: t.color }}/>)}
                  </div>
                  <p className="text-foreground/85 leading-relaxed text-sm flex-1">"{t.quote}"</p>
                  <div className="border-t border-border pt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ background: `${t.color}20` }}>
                      <branch.icon size={14} style={{ color: t.color }}/>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.org}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES CLOUD ── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Capabilities Across All Branches
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {capabilities.map(cap=>(
              <span key={cap} className="border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-sm hover:border-primary/40 hover:text-foreground transition-colors cursor-default" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECOND AI IMAGE BREAK ── */}
      <div className="relative h-64 lg:h-80 overflow-hidden border-y border-border">
        <img src={IMG.aiRobot} alt="White AI robot on black background" className="w-full h-full object-cover object-top"/>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,17,31,0.92) 0%, rgba(6,17,31,0.5) 50%, rgba(6,17,31,0.92) 100%)" }}/>
        <div className="absolute inset-0 flex items-center px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
          <div className="max-w-screen-2xl 2xl:max-w-full mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, label: "Proven ROI", body: "Every engagement is measured against defined KPIs and business outcomes." },
              { icon: Network, label: "Cross-Branch Synergy", body: "Unified planning across disciplines eliminates vendor coordination overhead." },
              { icon: Fingerprint, label: "Tailored Always", body: "No templates. No off-the-shelf answers. Everything is designed for your context." },
            ].map(item=>(
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary"/>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</div>
                  <div className="text-sm text-white/60 leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 lg:py-32 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>FAQ</div>
            <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Common Questions</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have a question not covered here? Reach out directly and a specialist will respond within one business day.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline">
              Ask a Question <ExternalLink size={13}/>
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2">
            {faqs.map((f,i)=>(
              <div key={i} className="bg-card border border-border rounded-sm overflow-hidden transition-colors hover:border-border/80">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={()=>setOpenFaq(openFaq===i ? null : i)}
                >
                  <span className="font-medium text-foreground text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{f.q}</span>
                  <ChevronDown size={16} className="text-muted-foreground shrink-0 transition-transform duration-200" style={{ transform: openFaq===i ? "rotate(180deg)" : "none" }}/>
                </button>
                {openFaq===i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 lg:py-32 border-t border-border bg-secondary/10 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Get in Touch</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Ready to work with us?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Whether you need cloud infrastructure, a managed IT team, enterprise communications,
              cybersecurity, or AI-powered automation — we're ready to scope a tailored solution.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <a href="mailto:bluegridcoresolutions@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Mail size={16} className="text-muted-foreground group-hover:text-primary transition-colors"/>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</div>
                  <div className="text-sm text-foreground group-hover:text-primary transition-colors">info@bluegridcoresolutions.co.za</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center">
                  <Globe size={16} className="text-muted-foreground"/>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Website</div>
                  <div className="text-sm text-muted-foreground">Coming soon</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>We cover:</div>
            <div className="flex flex-wrap gap-2">
              {branches.map(b=>(
                <span key={b.id} className="flex items-center gap-1.5 border border-border text-xs px-3 py-1.5 rounded-sm text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }}/>
                  {b.tag}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-sm overflow-hidden border border-border" style={{ height: 160 }}>
              <img src={IMG.cyber2} alt="IT professional working on cybersecurity" className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="bg-card border border-border rounded-sm p-8">
            <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Send Us a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={e=>e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Full Name</label>
                  <input type="text" placeholder="Jane Smith" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"/>
                </div>
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Company</label>
                  <input type="text" placeholder="Acme Corporation" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"/>
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email Address</label>
                <input type="email" placeholder="jane@acme.com" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"/>
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Phone Number (optional)</label>
                <input type="tel" placeholder="+1 555 000 0000" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"/>
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Area of Interest</label>
                <select className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none">
                  <option value="">Select a branch...</option>
                  {branches.map(b=><option key={b.id} value={b.id}>{b.name} — {b.tag}</option>)}
                  <option value="multi">Multiple Branches</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Estimated Budget Range</label>
                <select className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none">
                  <option value="">Select a range...</option>
                  <option>Under R5,000</option>
                  <option>R5,000 – R25,000</option>
                  <option>R25,000 – R100,000</option>
                  <option>R100,000+</option>
                  <option>Ongoing Retainer</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                <textarea rows={4} placeholder="Describe your project, requirements, or questions..." className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors resize-none"/>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-1">
                Send Message <ArrowRight size={15}/>
              </button>
              <p className="text-xs text-muted-foreground text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                We respond within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER (FIXED) ── */}
      <footer className="border-t border-border bg-secondary/20 pt-14 pb-8 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 relative">
        {/* Subtle top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-full-dark.svg" alt="BlueGrid Core" className="h-8 sm:h-10 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
                Enterprise technology holding company. Five branches. One partner. Complete coverage.
              </p>
            </div>

            {/* Services (two‑line) */}
            <div>
              <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Services</h4>
              <ul className="flex flex-col gap-3">
                {branches.map(b => (
                  <li key={b.id}>
                    <a href="#branches" className="group flex flex-col hover:translate-x-1 transition-transform">
                      <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }} />
                        {b.tag}
                      </span>
                      <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">{b.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company (two‑line with descriptions) */}
            <div>
              <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Company</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#about" className="group flex flex-col hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Careers</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">Join our team</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="group flex flex-col hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Our Mission</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">What drives us</span>
                  </a>
                </li>
                <li>
                  <a href="#branches" className="group flex flex-col hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Case Studies</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">Client success stories</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="group flex flex-col hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Leadership Team</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">Meet our experts</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="group flex flex-col hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Partners & Alliances</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">Our network</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources (single‑line) */}
            <div>
              <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Resources</h4>
              <ul className="flex flex-col gap-2">
                {["Documentation","Service Status","Security Practices", "API Reference", "White Papers & Reports", " Webinars & Events", "Support Portal"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">· {item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact (two‑line) */}
            <div>
              <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Contact</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Head Office</div>
                  <div className="text-xs text-muted-foreground/70">Durban, South Africa</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Support Hours</div>
                  <div className="text-xs text-muted-foreground/70">24/7 Global Monitoring</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Sales Enquiries</div>
                  <a href="mailto:sales@bluegridcoresolutions.co.za" className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">sales@bluegridcoresolutions.co.za</a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">Technical Support</div>
                  <ul className="none">
                    <li>
                      <a href="mailto:support@bluegridcoresolutions.co.za" className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">support@bluegridcoresolutions.co.za</a>
                    </li>
                    <li>
                      <a href="mailto:info@bluegridcoresolutions.co.za" className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">info@bluegridcoresolutions.co.za</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal (single‑line) */}
            <div>
              <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Legal</h4>
              <ul className="flex flex-col gap-2">
                {["Privacy Policy","Security Policy","Cookie Policy","Terms of Service","Service Level Agreement","Responsible Disclosure "].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">· {item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              © 2026 BlueGrid Core Solutions. All rights reserved.
            </span>
            <span className="text-xs text-muted-foreground/70" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Built with security, scalability, and intelligence.
            </span>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              ↑ Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}