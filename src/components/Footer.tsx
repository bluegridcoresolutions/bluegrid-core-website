import { branches } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 pt-14 pb-8 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10 relative">
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

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Services</h4>
            <ul className="flex flex-col gap-3">
              {branches.map((b) => (
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

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Company</h4>
            <ul className="flex flex-col gap-3">
              {["Careers", "Our Mission", "Case Studies", "Leadership Team", "Partners & Alliances"].map((item) => (
                <li key={item}>
                  <a href="#about" className="group flex flex-col hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">{item}</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">
                      {item === "Careers" ? "Join our team" : 
                       item === "Our Mission" ? "What drives us" :
                       item === "Case Studies" ? "Client success stories" :
                       item === "Leadership Team" ? "Meet our experts" : "Our network"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Resources</h4>
            <ul className="flex flex-col gap-2">
              {["Documentation", "Service Status", "Security Practices", "API Reference", "White Papers & Reports", "Webinars & Events", "Support Portal"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">· {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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
                <a href="mailto:sales@bluegridcoresolutions.co.za" className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">Click for Sales Enquiries</a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-semibold">Technical Support</div>
                <ul className="none">
                  <li>
                    <a href="mailto:support@bluegridcoresolutions.co.za" className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">Click for Support Mail</a>
                  </li>
                  <li>
                    <a href="mailto:info@bluegridcoresolutions.co.za" className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors">Click for Information Mail</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-4 relative after:block after:w-6 after:h-[2px] after:bg-primary/40 after:mt-1">Legal</h4>
            <ul className="flex flex-col gap-2">
              {["Privacy Policy", "Security Policy", "Cookie Policy", "Terms of Service", "Service Level Agreement", "Responsible Disclosure"].map((item) => (
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
  );
}