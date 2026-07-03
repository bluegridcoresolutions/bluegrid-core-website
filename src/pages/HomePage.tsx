import { IMG, branches, testimonials, capabilities } from "../data";
import { ArrowRight, Layers, Clock, Zap, Award, Activity, Star, CheckCircle2, TrendingUp, Network, Fingerprint } from "lucide-react";

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* ── HERO ── */}
      <section className="relative pt-28 lg:pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(26,108,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,108,240,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" style={{
          background: "radial-gradient(ellipse at top, rgba(26,108,240,0.18) 0%, transparent 65%)",
        }} />

        <div className="relative max-w-screen-2xl 2xl:max-w-full mx-auto px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20 lg:pb-28">
          <div>
            <div className="inline-flex items-center gap-2 border border-border rounded-sm px-3 py-1.5 mb-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
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
                Explore Our Branches <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200">
                Contact Us
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {branches.map(b => (
                <span key={b.id} className="flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-sm px-3 py-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }} />
                  {b.tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-sm overflow-hidden border border-border" style={{ height: "420px" }}>
              <img src={IMG.hero} alt="AI technology abstract sphere with neural network" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,17,31,0.3) 0%, rgba(26,108,240,0.12) 100%)" }} />
            </div>

            <div className="absolute -bottom-5 -left-6 bg-card/95 backdrop-blur-sm border border-border rounded-sm p-4 shadow-xl flex items-center gap-3" style={{ minWidth: 200 }}>
              <div className="w-9 h-9 rounded-sm bg-green-500/20 flex items-center justify-center shrink-0">
                <Activity size={16} className="text-green-400" />
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
                {branches.map(b => (
                  <div key={b.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: b.color }} />
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
              { v: "5", l: "Specialized Branches", icon: Layers },
              { v: "24/7", l: "Managed Support Coverage", icon: Clock },
              { v: "< 4h", l: "Critical Incident SLA", icon: Zap },
              { v: "2026", l: "Founded", icon: Award },
            ].map(m => (
              <div key={m.l} className="bg-card px-6 py-5 flex items-center gap-4">
                <m.icon size={18} className="text-primary shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.v}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{m.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
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
              {["LLM Integration", "Computer Vision", "Predictive Analytics", "Process Automation", "NLP Pipelines", "MLOps"].map(t => (
                <span key={t} className="text-xs border border-primary/30 text-primary px-3 py-1.5 rounded-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-sm overflow-hidden border border-border" style={{ height: 220 }}>
              <img src={IMG.hero} alt="AI neural network sphere" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-sm overflow-hidden border border-border" style={{ height: 220 }}>
              <img src={IMG.aiCircles} alt="AI concentric rings logo" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 rounded-sm overflow-hidden border border-border" style={{ height: 180 }}>
              <img src={IMG.heroBrain} alt="AI circuit board with brain visualization" className="w-full h-full object-cover object-center" />
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
            {testimonials.map((t, i) => {
              const branch = branches.find(b => b.id === t.branch)!;
              return (
                <div key={i} className="bg-card border border-border rounded-sm p-7 flex flex-col gap-5 hover:border-opacity-40 transition-colors" style={{ borderColor: `${t.color}30` }}>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, si) => <Star key={si} size={13} className="fill-current" style={{ color: t.color }} />)}
                  </div>
                  <p className="text-foreground/85 leading-relaxed text-sm flex-1">"{t.quote}"</p>
                  <div className="border-t border-border pt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0" style={{ background: `${t.color}20` }}>
                      <branch.icon size={14} style={{ color: t.color }} />
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
            {capabilities.map(cap => (
              <span key={cap} className="border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-sm hover:border-primary/40 hover:text-foreground transition-colors cursor-default" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI BREAK ── */}
      <div className="relative h-72 lg:h-96 overflow-hidden border-y border-border">
        <img src={IMG.aiDeep} alt="Google DeepMind AI blue-green structure" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,17,31,0.85) 0%, rgba(6,17,31,0.3) 50%, rgba(6,17,31,0.85) 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 max-w-screen-2xl 2xl:max-w-full w-full mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>BlueGrid Core Solutions</div>
            <p className="text-2xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Five branches. One vision. Technology that works for your business.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECOND AI BREAK ── */}
      <div className="relative h-64 lg:h-80 overflow-hidden border-y border-border">
        <img src={IMG.aiRobot} alt="White AI robot on black background" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,17,31,0.92) 0%, rgba(6,17,31,0.5) 50%, rgba(6,17,31,0.92) 100%)" }} />
        <div className="absolute inset-0 flex items-center px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
          <div className="max-w-screen-2xl 2xl:max-w-full mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, label: "Proven ROI", body: "Every engagement is measured against defined KPIs and business outcomes." },
              { icon: Network, label: "Cross-Branch Synergy", body: "Unified planning across disciplines eliminates vendor coordination overhead." },
              { icon: Fingerprint, label: "Tailored Always", body: "No templates. No off-the-shelf answers. Everything is designed for your context." },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
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
    </main>
  );
}