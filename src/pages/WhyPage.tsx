import {
  Flag,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Handshake,
  Award,
  CheckCircle,
  Clock,
  Users as UsersIcon,
} from "lucide-react";

// ----- DATA DEFINED INLINE -----
const reasons = [
  {
    label: "Our Mission",
    stat: "Since 2016",
    icon: Flag,
    body: "We exist to make technology a strategic force for your business. No fluff, no hype – just engineering that delivers measurable outcomes.",
  },
  {
    label: "Integrity First",
    stat: "Zero Compromise",
    icon: Shield,
    body: "We operate with full transparency and ethical responsibility. You'll never find hidden fees, vague contracts, or finger-pointing – just honest partnership.",
  },
  {
    label: "Practical Innovation",
    stat: "Always Current",
    icon: Sparkles,
    body: "We track the frontier so you don't have to – but we only deploy what's proven to drive real business value, not shiny objects.",
  },
  {
    label: "100% Client-Centric",
    stat: "Fully Custom",
    icon: Users,
    body: "Your context is unique. Every solution we deliver is scoped, designed, and built around your specific KPIs – no off-the-shelf templates.",
  },
  {
    label: "Enterprise Reliability",
    stat: "99.9% SLA",
    icon: TrendingUp,
    body: "Our engineering standards meet the benchmarks of mission-critical operations. We treat every project as if your business depends on it – because it does.",
  },
  {
    label: "One Team",
    stat: "Accountable",
    icon: Handshake,
    body: "We act as your extended team. We share knowledge, take ownership, and celebrate your wins as our own – because your success is our success.",
  },
];

const stats = [
  { label: "Years in Business", value: "9+", icon: Award },
  { label: "Projects Delivered", value: "200+", icon: CheckCircle },
  { label: "Average Uptime", value: "99.9%", icon: Clock },
  { label: "Client Satisfaction", value: "4.9/5", icon: UsersIcon },
];

const team = [
  {
    name: "John Doe",
    role: "CEO & Co-Founder",
    bio: "20+ years in enterprise tech. Passionate about solving complex problems with simple solutions.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Former VP of Engineering at Fortune 500. Expert in cloud architecture and AI.",
  },
  {
    name: "Mike Johnson",
    role: "Head of Security",
    bio: "Cybersecurity specialist with deep experience in financial services and compliance.",
  },
];

// ----- SHARED DECORATIVE PRIMITIVES -----
function Corners({ intensity = "border-primary/25 group-hover:border-primary/70" }: { intensity?: string }) {
  const base = `pointer-events-none absolute w-3 h-3 border-0 transition-colors duration-300 ${intensity}`;
  return (
    <>
      <span className={`${base} -top-px -left-px border-t border-l`} />
      <span className={`${base} -top-px -right-px border-t border-r`} />
      <span className={`${base} -bottom-px -left-px border-b border-l`} />
      <span className={`${base} -bottom-px -right-px border-b border-r`} />
    </>
  );
}

const gridBackground = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)",
  backgroundSize: "28px 28px",
};

// ----- INLINE TYPES HERE -----
function FramedImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="group relative border border-border overflow-hidden" style={{ height: 220 }}>
      <img src={src} alt={alt} className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500" />
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      <Corners intensity="border-primary/50" />
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-background/85 backdrop-blur-sm border-t border-border text-[10px] tracking-[0.15em] uppercase text-foreground/80"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </div>
    </div>
  );
}

// ----- COMPONENT -----
export default function WhyPage() {
  return (
    <section className="relative pt-28 pb-24 lg:py-32 border-t border-border px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
      <div className="absolute inset-0 opacity-[0.4]" style={gridBackground} />
      <div className="relative max-w-screen-2xl 2xl:max-w-full mx-auto">

        {/* HERO / DIFFERENTIATORS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-primary" />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Differentiators
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why choose <span className="text-primary">BlueGrid</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-10 max-w-md">
              We built BlueGrid Core Solutions to be the single technology partner for organizations that demand
              depth, accountability, and real innovation — not consultant-speak.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <FramedImage
                src="https://images.unsplash.com/photo-1675602488512-bdd631490fcb?w=500&h=500&fit=crop"
                alt="Macro photograph of a blue circuit board"
                label="Fig. 01 — Signal Path"
              />
              <FramedImage
                src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500&h=500&fit=crop"
                alt="Close-up of illuminated circuit board wiring"
                label="Fig. 02 — Core Array"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {reasons.map(r => (
              <div key={r.label} className="group relative bg-card border border-border px-6 py-5 hover:border-primary/40 transition-colors duration-200">
                <Corners />
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <r.icon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {r.label}
                      </h4>
                      <span className="text-[11px] px-2 py-0.5 border border-primary/25 text-primary/90 whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {r.stat}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR STORY */}
        <div className="border-t border-border pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-6 h-px bg-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Our Story
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Built by engineers, for <span className="text-primary">real impact</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2016 by a group of engineers who were tired of overcomplicated solutions and empty promises, BlueGrid was born from a simple belief:
                technology should be a transparent, reliable, and powerful partner for your business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're a global team of 50+ specialists across five countries, united by one mission –
                to deliver deep engineering, genuine accountability, and measurable results.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-3 divide-x divide-border border border-border">
              {[
                { value: "2016", label: "Founded" },
                { value: "50+", label: "Experts" },
                { value: "5", label: "Countries" },
              ].map((m) => (
                <div key={m.label} className="relative p-6 text-center">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-primary/50" />
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="border-t border-border py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border border border-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="relative p-6 text-center">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-primary/50" />
                <div className="flex justify-center mb-2">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div className="border-t border-border pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Leadership
              </span>
              <span className="inline-block w-6 h-px bg-primary" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The people behind <span className="text-primary">BlueGrid</span>
            </h3>
            <p className="text-muted-foreground mt-4">
              We're a team of passionate technologists who believe in partnership, not just contracts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group relative bg-card border border-border p-6 text-center hover:border-primary/40 transition-colors">
                <Corners />
                <div className="relative w-16 h-16 border border-primary/30 bg-primary/5 mx-auto mb-4 flex items-center justify-center text-primary text-2xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {member.name}
                </h4>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}