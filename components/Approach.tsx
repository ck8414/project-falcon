"use client";
import ScrollReveal from "./ui/ScrollReveal";

const steps = [
  { num: "1", title: "Identify", desc: "We source and rigorously evaluate opportunities in the RCM ecosystem — targeting companies at the intersection of operational need, technological innovation, and market timing." },
  { num: "2", title: "Underwrite", desc: "Our diligence goes beyond financials. We assess clinical workflow integration, payer-provider dynamics, technology architecture, regulatory risk, and long-term defensibility." },
  { num: "3", title: "Partner", desc: "We enter each relationship as an active, engaged partner — contributing strategic guidance, operational expertise, market access, and leadership support alongside our capital." },
  { num: "4", title: "Accelerate", desc: "We work alongside our portfolio to accelerate revenue growth, operational efficiency, and market positioning — leveraging our network, knowledge, and resources at every turn." },
  { num: "5", title: "Scale", desc: "We support our companies through each stage of growth — from early-stage platform development to enterprise-scale deployment — with the capital and guidance to sustain momentum." },
  { num: "6", title: "Create Legacy", desc: "We are building companies and outcomes that endure. Our horizon is not the next quarter — it is the next decade. We invest to create lasting impact in healthcare finance." },
];

export default function Approach() {
  return (
    <section id="approach" style={{ background: "#F2F4F8", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <div className="max-w-[680px] mb-16">
            <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
              <span style={{ fontSize: "8px" }}>◆</span> How We Work <span style={{ fontSize: "8px" }}>◆</span>
            </div>
            <h2 className="font-bold mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, color: "#142254", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Thoughtful Capital. Active Partnership. Enduring Value.
            </h2>
            <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.75 }}>Our approach to value creation is rooted in conviction, collaboration, and deep sector knowledge. We do not deploy capital passively — we deploy it purposefully.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.07 * (i % 3)}>
              <div
                className="relative rounded-lg overflow-hidden h-full"
                style={{ background: "#fff", padding: "32px 28px", boxShadow: "0 2px 16px rgba(20,34,84,0.06)", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(20,34,84,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(20,34,84,0.06)"; }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#C4973C" }} />
                <div className="flex items-center justify-center rounded-full font-bold mb-5" style={{ width: "44px", height: "44px", background: "#142254", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "18px", fontWeight: 800, color: "#C4973C" }}>{s.num}</div>
                <div className="font-bold mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "20px", color: "#142254" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: "#6B7A99", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="rounded-r-md" style={{ borderLeft: "4px solid #C4973C", padding: "22px 32px", background: "rgba(196,151,60,0.06)" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "20px", fontStyle: "italic", color: "#142254", lineHeight: 1.55 }}>
              &ldquo;Great companies in RCM are built on operational truth, not financial engineering. Our job is to find them early and help them win.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
