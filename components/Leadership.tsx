"use client";
import ScrollReveal from "./ui/ScrollReveal";

const leaders = [
  {
    initials: "GS",
    name: "Gautam Srivastava",
    title: "Co-Founder / Managing Partner",
    bio: "Gautam brings over a decade of experience at the intersection of healthcare operations and investment strategy, with deep expertise across revenue cycle management, health system finance, and enterprise technology. At G&C Capital, he leads investment origination, portfolio strategy, and firm operations.",
  },
  {
    initials: "CK",
    name: "Chaithra Kumar",
    title: "Co-Founder / Managing Partner",
    bio: "Chaithra combines deep technical expertise in healthcare technology with a sharp commercial lens developed across enterprise software and digital health ventures. At G&C Capital, she leads technology diligence, strategic partnership development, and the firm's thought leadership efforts.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl">
          {leaders.map((l, i) => (
            <ScrollReveal key={l.name} delay={0.1 * i}>
              <div
                className="rounded-xl text-center"
                style={{ background: "#fff", padding: "36px 28px", boxShadow: "0 2px 16px rgba(20,34,84,0.07)", borderBottom: "3px solid transparent", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(20,34,84,0.13)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#C4973C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(20,34,84,0.07)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; }}
              >
                <div className="flex items-center justify-center rounded-full mx-auto mb-5 font-bold" style={{ width: "100px", height: "100px", background: "#142254", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "32px", fontWeight: 800, color: "#C4973C", border: "3px solid #D4C08A" }}>
                  {l.initials}
                </div>
                <div className="font-bold mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "20px", color: "#142254" }}>{l.name}</div>
                <div className="mb-3" style={{ fontSize: "12px", color: "#C4973C", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l.title}</div>
                <p style={{ fontSize: "13px", color: "#6B7A99", lineHeight: 1.65 }}>{l.bio}</p>
                <a href="#" className="inline-flex items-center gap-1.5 mt-4" style={{ fontSize: "12px", color: "#142254", fontWeight: 600, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C4973C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#142254")}
                >
                  🔗 LinkedIn Profile
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
