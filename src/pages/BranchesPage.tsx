import { useState } from "react";
import { branches } from "../data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BranchesPage() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section className="pt-28 pb-24 lg:py-32 border-b border-border bg-secondary/10 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
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
          {branches.map(b => {
            const Icon = b.icon;
            const active = activeBranch.id === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBranch(b)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm border transition-all duration-200 font-medium"
                style={{
                  background: active ? `${b.color}18` : "transparent",
                  borderColor: active ? b.color : "rgba(255,255,255,0.08)",
                  color: active ? b.color : "#6b8aaa",
                }}
              >
                <Icon size={14} /> {b.name.split(" ")[1]}
              </button>
            );
          })}
        </div>

        <div className="border border-border rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 p-8 lg:p-10 bg-card flex flex-col gap-7">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0" style={{ background: `${activeBranch.color}22` }}>
                <activeBranch.icon size={22} style={{ color: activeBranch.color }} />
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
                {activeBranch.services.map(svc => (
                  <div key={svc.label} className="flex items-center gap-3 border border-border rounded-sm px-4 py-2.5 hover:border-opacity-60 transition-colors" style={{ borderColor: `${activeBranch.color}25` }}>
                    <svc.icon size={13} style={{ color: activeBranch.color }} className="shrink-0" />
                    <span className="text-sm text-foreground/80">{svc.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeBranch.highlights.map(h => (
                <span key={h} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm" style={{ background: `${activeBranch.color}14`, color: activeBranch.color, fontFamily: "'JetBrains Mono', monospace" }}>
                  <CheckCircle2 size={11} /> {h}
                </span>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 self-start font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 hover:gap-3" style={{ background: activeBranch.color, color: "#fff" }}>
              Enquire About {activeBranch.name} <ArrowRight size={14} />
            </a>
          </div>

          <div className="lg:col-span-2 relative min-h-[300px] bg-secondary">
            <img src={activeBranch.image} alt={activeBranch.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${activeBranch.color}28 0%, rgba(6,17,31,0.55) 100%)` }} />
            <div className="absolute bottom-5 left-5 border border-white/10 rounded-sm px-4 py-2 backdrop-blur-sm bg-black/30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span className="text-xs text-white/60 uppercase tracking-widest">Branch {activeBranch.id} / 05</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px border border-t-0 border-border rounded-b-sm overflow-hidden mt-0">
          {branches.map(b => {
            const Icon = b.icon;
            const active = activeBranch.id === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBranch(b)}
                className="bg-card p-5 text-left group transition-all duration-200 relative focus:outline-none"
                style={{ background: active ? "#0f2340" : undefined }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: b.color, opacity: active ? 1 : 0 }} />
                <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-3" style={{ background: active ? `${b.color}22` : "rgba(255,255,255,0.04)" }}>
                  <Icon size={15} style={{ color: active ? b.color : "#6b8aaa" }} />
                </div>
                <div className="text-[9px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: active ? b.color : "#3a5270" }}>{b.tag}</div>
                <div className="text-xs font-semibold text-foreground leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{b.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}