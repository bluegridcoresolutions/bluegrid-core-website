import { useState } from "react";
import { faqs } from "../data";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="pt-28 pb-24 lg:py-32 px-2 sm:px-6 lg:px-8 xl:px-10 2xl:px-10">
      <div className="max-w-screen-2xl 2xl:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>FAQ</div>
          <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Common Questions</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Have a question not covered here? Reach out directly and a specialist will respond within one business day.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline">
            Ask a Question <ChevronDown size={13} className="rotate-[-90deg]" />
          </a>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-sm overflow-hidden transition-colors hover:border-border/80">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-medium text-foreground text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{f.q}</span>
                <ChevronDown size={16} className="text-muted-foreground shrink-0 transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}