import ScrollReveal from "./ui/ScrollReveal";

export default function Vision() {
  return (
    <section id="vision" className="py-[60px] md:py-[120px]" style={{ background: "#142254" }}>
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-8" style={{ color: "#C4973C" }}>
            OUR VISION
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-4xl mx-auto mb-12 leading-tight text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            To be the most trusted capital partner in the Revenue Cycle Management ecosystem — backing the companies
            that make healthcare work.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="w-16 h-px mx-auto mb-12"
            style={{ background: "#C4973C" }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="max-w-2xl mx-auto space-y-5 text-base md:text-lg leading-relaxed mb-14" style={{ color: "rgba(255,255,255,0.72)" }}>
            <p>
              Healthcare&apos;s financial infrastructure is at a turning point. The organizations that invest
              intelligently in this transformation — in the technology, the talent, and the operational models — will
              define the next era of healthcare services. G&amp;C Capital was created to be their partner at this pivotal
              moment.
            </p>
            <p>
              We believe that when capital is deployed with expertise, conviction, and genuine partnership, it does more
              than generate returns. It accelerates the transformation of an industry that touches every American life.
            </p>
            <p>That is why we exist. That is what we are building.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-sm font-semibold tracking-widest" style={{ color: "#C4973C" }}>
            — G&amp;C Capital Holdings LLC
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
