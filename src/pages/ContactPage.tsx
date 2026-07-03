import { branches, IMG } from "../data";
import { Mail, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="pt-28 pb-24 lg:py-32 border-t border-border bg-secondary/10 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
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
                <Mail size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</div>
                <div className="text-sm text-foreground group-hover:text-primary transition-colors">info@bluegridcoresolutions.co.za</div>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center">
                <Globe size={16} className="text-muted-foreground" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Website</div>
                <div className="text-sm text-muted-foreground">bluegridcoresolutions.co.za</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>We cover:</div>
          <div className="flex flex-wrap gap-2">
            {branches.map(b => (
              <span key={b.id} className="flex items-center gap-1.5 border border-border text-xs px-3 py-1.5 rounded-sm text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }} />
                {b.tag}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-sm overflow-hidden border border-border" style={{ height: 160 }}>
            <img src={IMG.cyber2} alt="IT professional working on cybersecurity" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-sm p-8">
          <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Send Us a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Full Name</label>
                <input type="text" placeholder="Jane Smith" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Company</label>
                <input type="text" placeholder="Acme Corporation" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email Address</label>
              <input type="email" placeholder="jane@acme.com" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Phone Number (optional)</label>
              <input type="tel" placeholder="+1 555 000 0000" className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] text-muted-foreground mb-2 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Area of Interest</label>
              <select className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none">
                <option value="">Select a branch...</option>
                {branches.map(b => <option key={b.id} value={b.id}>{b.name} — {b.tag}</option>)}
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
              <textarea rows={4} placeholder="Describe your project, requirements, or questions..." className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-1">
              Send Message <ArrowRight size={15} />
            </button>
            <p className="text-xs text-muted-foreground text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              We respond within 1 business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}