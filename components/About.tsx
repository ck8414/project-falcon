"use client";
import ScrollReveal from "./ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
                <span style={{ fontSize: "8px" }}>◆</span> Who We Are <span style={{ fontSize: "8px" }}>◆</span>
              </div>
              <h2 className="font-bold mb-7" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 800, color: "#142254", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                Purpose-Built for Healthcare&apos;s Financial Engine.
              </h2>
              <div className="mb-8 rounded-r-sm" style={{ borderLeft: "4px solid #C4973C", padding: "20px 28px", background: "#F5EDD6" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "19px", fontStyle: "italic", color: "#142254", lineHeight: 1.55 }}>
                  &ldquo;We are not generalists. We are specialists — singularly committed to the Revenue Cycle Management space.&rdquo;
                </p>
              </div>
              <div className="rounded" style={{ background: "#142254", border: "1px solid #C4973C", borderTop: "4px solid #C4973C", padding: "32px 36px" }}>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4973C", marginBottom: "14px" }}>Our Mission</div>
                <p style={{ fontSize: "15px", color: "#fff", lineHeight: 1.75 }}>To deploy intelligent capital and strategic expertise into the Revenue Cycle Management ecosystem — creating enduring value for our partners, portfolio companies, and the healthcare system at large.</p>
              </div>
            </div>
            {/* Right */}
            <div className="space-y-5">
              {[
                "G&C Capital Holdings LLC was founded on a simple but powerful conviction: the U.S. healthcare revenue cycle is undergoing its most consequential transformation in decades, and most of the capital market is not positioned to seize it.",
                "With deep domain expertise spanning healthcare operations, financial technology, and enterprise software, we are uniquely equipped to identify the companies and platforms that will define the next generation of RCM — and to provide them not just with capital, but with the strategic leverage to win.",
                "We are practitioners first. We understand the nuances of denial management, prior authorization workflows, payer-provider dynamics, and the regulatory landscape. We know where the friction lives — and where the opportunity hides.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "#2D3748" }} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Values strip */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "◈", title: "Domain Depth", desc: "Unmatched expertise in the RCM ecosystem — from front-end patient access to back-end collections and analytics." },
              { icon: "◈", title: "Capital with Purpose", desc: "We invest with intent. Every dollar we deploy is aligned to meaningful operational and financial transformation." },
              { icon: "◈", title: "Partnership First", desc: "We are active partners, not passive investors. Our network, knowledge, and experience compound alongside your growth." },
            ].map((v) => (
              <div key={v.title} className="rounded-md" style={{ background: "#F2F4F8", padding: "28px 24px", borderTop: "3px solid #C4973C" }}>
                <div style={{ fontSize: "22px", color: "#C4973C", marginBottom: "12px" }}>{v.icon}</div>
                <div className="font-bold mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "17px", color: "#142254" }}>{v.title}</div>
                <p style={{ fontSize: "13px", color: "#6B7A99", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
