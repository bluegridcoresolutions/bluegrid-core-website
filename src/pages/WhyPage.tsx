import { reasons, IMG } from "../data";

export default function WhyPage() {
  return (
    <section className="pt-28 pb-24 lg:py-32 border-t border-border px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
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
                <img src={IMG.aiGlow} alt="AI glowing orange letters" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-sm overflow-hidden border border-border" style={{ height: 160 }}>
                <img src={IMG.cloud2} alt="3D cloud computing digital visualization" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {reasons.map(r => (
              <div key={r.label} className="bg-card border border-border rounded-sm px-6 py-5 hover:border-primary/30 transition-colors duration-200 group">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <r.icon size={16} className="text-primary" />
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
  );
}