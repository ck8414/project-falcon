"use client";
import ScrollReveal from "./ui/ScrollReveal";

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #080F22 0%, #0D1A3A 40%, #142254 100%)", padding: "120px 0" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(196,151,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,151,60,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-12">
        <div className="text-center max-w-[800px] mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-8" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
              <span style={{ fontSize: "8px" }}>◆</span> Our Vision <span style={{ fontSize: "8px" }}>◆</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              To be the most trusted capital partner<br />
              in the Revenue Cycle Management ecosystem —<br />
              <span style={{ color: "#C4973C" }}>backing the companies that make healthcare work.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mx-auto my-9" style={{ width: "80px", height: "2px", background: "#C4973C", opacity: 0.6 }} />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-5 mb-12 mx-auto max-w-[680px]">
              {[
                "Healthcare's financial infrastructure is at a turning point. The organizations that invest intelligently in this transformation — in the technology, the talent, and the operational models — will define the next era of healthcare services.",
                "G&C Capital was created to be their partner at this pivotal moment. We believe that when capital is deployed with expertise, conviction, and genuine partnership, it does more than generate returns. It accelerates the transformation of an industry that touches every American life.",
                "That is why we exist. That is what we are building.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: "17px", color: "#9AAAC8", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "18px", fontStyle: "italic", color: "#C4973C", letterSpacing: "0.01em" }}>
              — G&amp;C Capital Holdings LLC
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
