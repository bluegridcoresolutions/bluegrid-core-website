import { useState } from "react";
import {
  Search, Lightbulb, Zap, CheckCircle, RefreshCw,
  ArrowRight, X, Send, ClipboardList, Users, Shield, BarChart3,
  Layers, Clock3, Check
} from "lucide-react";

export default function ProcessPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectScope: "",
    timeline: "",
    budget: "",
    services: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Project Initiation Data:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          projectScope: "",
          timeline: "",
          budget: "",
          services: [],
          message: "",
        });
      }, 2000);
    }, 1500);
  };

  const steps = [
    {
      id: 1,
      icon: ClipboardList,
      title: "Initiate Project",
      tag: "Kickoff",
      desc: "Tell us about your needs – we'll listen, ask the right questions, and get to the heart of what you really require.",
      action: true,
    },
    {
      id: 2,
      icon: Search,
      title: "Discovery & Assessment",
      tag: "Week 1",
      desc: "We map your current infrastructure, pain points, and strategic goals to build a complete picture before any solution is proposed.",
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Solution Architecture",
      tag: "Week 2",
      desc: "Cross-branch specialists design a tailored architecture that aligns with your business objectives and technical constraints.",
    },
    {
      id: 4,
      icon: BarChart3,
      title: "Design & Scoping",
      tag: "Week 2-3",
      desc: "We document the full scope, timeline, and cost – with clear deliverables and acceptance criteria – so there are no surprises.",
    },
    {
      id: 5,
      icon: Zap,
      title: "Implementation & Integration",
      tag: "Build phase",
      desc: "Dedicated leads execute with defined milestones, stakeholder checkpoints, and zero-disruption deployment practices.",
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "Testing & Validation",
      tag: "Pre-launch",
      desc: "Rigorous quality assurance, user acceptance testing, and security validation ensure the solution meets every requirement.",
    },
    {
      id: 7,
      icon: RefreshCw,
      title: "Ongoing Support & Evolution",
      tag: "Ongoing",
      desc: "Post-deployment monitoring, managed maintenance, regular reviews, and continuous improvement – we grow with you.",
    },
  ];

  const comparisons = [
    { standard: "Vague requirements, assumptions", bluegrid: "Detailed discovery & documented scope" },
    { standard: "One-size-fits-all solution", bluegrid: "Tailored architecture from five branches" },
    { standard: "Surprises in cost and timeline", bluegrid: "Fixed scope with transparent pricing" },
    { standard: "Hand-over and disappear", bluegrid: "Ongoing support and evolution" },
    { standard: "Security as an afterthought", bluegrid: "Security embedded from day one" },
    { standard: "Delays due to siloed teams", bluegrid: "Cross-branch collaboration from the start" },
  ];

  const heroStats = [
    { icon: Layers, label: "5 branches, one team" },
    { icon: ClipboardList, label: "7-stage engagement" },
    { icon: Clock3, label: "1 business-day response" },
  ];

  const principles = [
    {
      icon: Shield,
      title: "Security-first",
      desc: "Every engagement embeds security review from day one, not bolted on at the end.",
    },
    {
      icon: Layers,
      title: "Cross-branch expertise",
      desc: "Cloud, security, comms, AI, and managed IT specialists work as one team on your project.",
    },
    {
      icon: ClipboardList,
      title: "Fixed scope, fair price",
      desc: "Deliverables and cost are documented upfront, so there are no surprises mid-project.",
    },
    {
      icon: RefreshCw,
      title: "Built to evolve",
      desc: "We stay on as a partner post-launch, with ongoing reviews and continuous improvement.",
    },
  ];

  const formSections = [
    { label: "Contact", icon: Users },
    { label: "Project", icon: ClipboardList },
    { label: "Scope & Services", icon: Shield },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 pb-10 lg:pt-32 lg:pb-14 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 bg-secondary/10 border-b border-border">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Engagement Model
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              How We Work
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A structured, transparent journey from your first enquiry to a long-term partnership that evolves with your business.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3 text-sm"
            >
              Start Your Project <ArrowRight size={14} />
            </button>
          </div>

          {/* Quick stats strip */}
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x sm:divide-border">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 sm:px-6 first:sm:pl-0">
                <stat.icon size={16} className="text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-mono">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-12 lg:py-14 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 border-b border-border">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {principles.map((item, idx) => (
              <div key={idx} className="bg-background p-5 lg:p-6">
                <item.icon size={18} className="text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-12 lg:py-16 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              The Journey
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Seven stages, one point of contact
            </h2>
          </div>

          <div className="relative">
            {/* Center line, always centered regardless of screen width */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`relative flex items-start gap-0 mb-8 sm:mb-10 last:mb-0 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Marker */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border-2 shrink-0 ${
                      step.action
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-card border-border text-muted-foreground"
                    }`}
                  >
                    <step.icon size={14} className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" />
                  </div>

                  {/* Spacer to push marker to center */}
                  <div className="w-1/2 shrink-0" />

                  {/* Content */}
                  <div
                    className={`w-1/2 shrink-0 ${
                      isEven ? "pr-4 sm:pr-8 lg:pr-10" : "pl-4 sm:pl-8 lg:pl-10"
                    }`}
                  >
                    <div
                      className={`bg-card border border-border rounded-sm p-3 sm:p-4 lg:p-5 hover:border-primary/30 transition-colors duration-200 ${
                        isEven ? "text-right" : "text-left"
                      }`}
                    >
                    <div
                      className={`flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap ${
                        isEven ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span
                        className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap ${
                          step.action ? "bg-primary/10 text-primary" : "text-muted-foreground/60"
                        }`}
                      >
                        {step.tag}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-muted-foreground/40 font-mono whitespace-nowrap">
                        {step.id.toString().padStart(2, "0")}/{steps.length.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-base font-semibold text-foreground mb-1 sm:mb-1.5 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                    {step.action && (
                      <button
                        onClick={() => setShowModal(true)}
                        className={`mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-primary hover:text-primary/80 transition-colors ${
                          isEven ? "flex-row-reverse" : ""
                        }`}
                      >
                        Start Your Project <ArrowRight size={12} />
                      </button>
                    )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full descriptions below, for readability on small screens where card text is hidden */}
          <div className="sm:hidden mt-10 space-y-6 max-w-lg mx-auto">
            {steps.map((step) => (
              <div key={step.id} className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{step.title}: </span>
                {step.desc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON SECTION ── */}
      <section className="py-12 lg:py-16 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 border-t border-border bg-secondary/5">
        <div className="max-w-screen-2xl 2xl:max-w-full mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              What Makes a Great Project
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Standard Approach vs. <span className="text-primary">BlueGrid Way</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              We don't just complete projects – we transform them into long-term successes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card border border-border rounded-sm overflow-hidden">
            {/* Column headers */}
            <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] items-center px-6 py-3 border-b border-border bg-secondary/10">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Typical Project</span>
              <span className="w-8" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">BlueGrid Approach</span>
            </div>

            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-0 px-6 py-4 ${
                  idx !== comparisons.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm text-muted-foreground/70 line-through decoration-muted-foreground/30">
                  {item.standard}
                </span>
                <span className="hidden sm:flex w-8 justify-center text-muted-foreground/40">
                  <ArrowRight size={14} />
                </span>
                <span className="flex items-start gap-2 text-sm text-foreground font-medium">
                  <Check size={14} className="text-primary shrink-0 mt-0.5" />
                  {item.bluegrid}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3 text-sm"
            >
              Start Your Project <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECT FORM MODAL ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => !submitted && setShowModal(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center py-16 px-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Project Initiated!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thank you! Our team will review your project details and get back to you within one business day.
                </p>
              </div>
            ) : (
              <>
                {/* Sticky header */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-6 lg:px-10 py-5 border-b border-border bg-background/95 backdrop-blur-sm">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Step 1
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Start Your Project
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="px-6 lg:px-10 py-6 space-y-8">
                  {/* Contact section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Users size={14} className="text-primary" />
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {formSections[0].label}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="e.g. John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="+27 82 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                          placeholder="Your Company Name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project section */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <ClipboardList size={14} className="text-primary" />
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {formSections[1].label}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                        >
                          <option value="">Select a branch or category…</option>
                          <option value="cloud">Cloud & Digital (BlueGrid Digitals)</option>
                          <option value="comms">Communications (BlueGrid Connect)</option>
                          <option value="security">Cybersecurity (BlueGrid Security)</option>
                          <option value="ai">Artificial Intelligence (BlueGrid AI)</option>
                          <option value="managed">Managed IT (BlueGrid Managed)</option>
                          <option value="multi">Multi-Branch Engagement</option>
                          <option value="other">Other / General Enquiry</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            Expected Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                          >
                            <option value="">Select…</option>
                            <option value="immediate">Immediate (within 2 weeks)</option>
                            <option value="1-3months">1–3 months</option>
                            <option value="3-6months">3–6 months</option>
                            <option value="6+months">6+ months</option>
                            <option value="ongoing">Ongoing / retainer</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            Estimated Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                          >
                            <option value="">Select a range…</option>
                            <option value="<5k">Under R5,000</option>
                            <option value="5-25k">R5,000 – R25,000</option>
                            <option value="25-100k">R25,000 – R100,000</option>
                            <option value="100k+">R100,000+</option>
                            <option value="retainer">Ongoing retainer</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scope & services section */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield size={14} className="text-primary" />
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {formSections[2].label}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Project Scope / Brief *
                        </label>
                        <textarea
                          name="projectScope"
                          value={formData.projectScope}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                          placeholder="Describe your project, goals, challenges, and any specific requirements…"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Services of Interest (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-secondary/10 border border-border rounded-sm p-4">
                          {[
                            "Cloud Architecture",
                            "Website Development",
                            "Azure Deployment",
                            "DevOps / CI/CD",
                            "VoIP / UCaaS",
                            "Call Center Solutions",
                            "Penetration Testing",
                            "Security Audits",
                            "SOC 2 / ISO 27001",
                            "AI / ML Model Dev",
                            "Data Analytics",
                            "Process Automation",
                            "IT Helpdesk",
                            "Hardware Procurement",
                            "Patch Management",
                          ].map((service) => (
                            <label key={service} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.services.includes(service)}
                                onChange={() => handleCheckboxChange(service)}
                                className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
                              />
                              <span className="text-muted-foreground text-xs">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={2}
                          className="w-full bg-background border border-border rounded-sm px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                          placeholder="Any other details, attachments, or references…"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting…</span>
                    ) : (
                      <>
                        Submit Project <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}