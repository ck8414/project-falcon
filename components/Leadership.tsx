"use client";
import ScrollReveal from "./ui/ScrollReveal";

const leaders = [
  {
    initials: "GS",
    name: "Gautam Srivastava",
    title: "Co-Founder & Managing Partner",
    bio: "Gautam Srivastava brings over two decades of experience at the intersection of healthcare operations, financial services, and enterprise transformation — having led large-scale programs at Optum, Deloitte, and TCS for some of the most complex payer and provider organizations in the country. As a Director-level executive, he has overseen $100M+ digital and operational transformation engagements for Fortune 100 clients, with deep hands-on expertise spanning the full revenue cycle: claims, payer adjudication, denial management, prior authorization, and billing lifecycle operations. At G&C Capital, Gautam leads investment strategy, deal origination and evaluation, and portfolio operations — applying a rare combination of RCM domain depth, financial modeling discipline, and operational credibility that few capital providers in this space can match.",
  },
  {
    initials: "CK",
    name: "Chaithra Kumar",
    title: "Co-Founder & Managing Partner",
    bio: "Chaithra Kumar is a seasoned technology executive and capital allocator whose career spans some of the most operationally demanding enterprises in the world — Apple, Southwest Airlines, and Kohl's — where he drove enterprise technology strategy across large-scale, complex organizations. A disciplined real estate investor with more than 600 units acquired, managed, and optimized across his portfolio, he brings a demonstrated track record of deploying capital intelligently and creating value through rigorous post-close execution. At G&C Capital, Chaithra leads deal structuring, capital strategy, and M&A execution — combining a Silicon Valley-caliber technology lens with the instincts of a proven investor to drive diligence, integration, and long-term performance across the firm's RCM acquisition portfolio.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" style={{ background: "#F2F4F8", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <div className="max-w-[600px] mb-14">
            <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
              <span style={{ fontSize: "8px" }}>◆</span> The Team <span style={{ fontSize: "8px" }}>◆</span>
            </div>
            <h2 className="font-bold mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, color: "#142254", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Experienced. Focused. Committed.
            </h2>
            <p style={{ fontSize: "17px", color: "#6B7A99", lineHeight: 1.75 }}>Our team combines deep RCM domain expertise with financial acumen and operational leadership — the combination that matters most in a specialized market.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((l, i) => (
            <ScrollReveal key={l.name} delay={0.1 * i}>
              <div
                className="rounded-xl text-center"
                style={{ background: "#fff", padding: "44px 36px", boxShadow: "0 2px 16px rgba(20,34,84,0.07)", borderBottom: "3px solid transparent", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(20,34,84,0.13)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#C4973C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(20,34,84,0.07)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; }}
              >
                <div className="flex items-center justify-center rounded-full mx-auto mb-5 font-bold" style={{ width: "100px", height: "100px", background: "#142254", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "32px", fontWeight: 800, color: "#C4973C", border: "3px solid #D4C08A" }}>
                  {l.initials}
                </div>
                <div className="font-bold mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "20px", color: "#142254" }}>{l.name}</div>
                <div className="mb-3" style={{ fontSize: "12px", color: "#C4973C", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l.title}</div>
                <p className="text-left" style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 1.8 }}>{l.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
