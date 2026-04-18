import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import { ExternalLink } from "lucide-react";

const leaders = [
  {
    name: "Gautam Srivastava",
    title: "Co-Founder / Managing Partner",
    bio: "Gautam brings over a decade of experience at the intersection of healthcare operations and investment strategy, with deep expertise across revenue cycle management, health system finance, and enterprise technology. His career has spanned operational leadership roles in large-scale RCM environments and strategic advisory engagements with health systems navigating complex financial transformations. At G&C Capital, Gautam leads investment origination, portfolio strategy, and firm operations — channeling his conviction that intelligent, specialized capital can meaningfully accelerate RCM innovation.",
  },
  {
    name: "Chaithra Kumar",
    title: "Co-Founder / Managing Partner",
    bio: "Chaithra combines deep technical expertise in healthcare technology with a sharp commercial lens developed across enterprise software and digital health ventures. Her background encompasses product strategy, technology architecture evaluation, and market development for platforms operating in the clinical and financial layers of healthcare. At G&C Capital, Chaithra leads technology diligence, strategic partnership development, and the firm's thought leadership efforts — ensuring that every investment decision is grounded in a rigorous understanding of the technology landscape reshaping RCM.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-[60px] md:py-[120px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>THE TEAM</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#0D1A3A", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Experienced. Focused. Committed.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base md:text-lg max-w-2xl mb-16 leading-relaxed" style={{ color: "#6B7A99" }}>
            Our team combines deep RCM domain expertise with financial acumen and operational leadership — the
            combination that matters most in a specialized market.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={0.1 * i}>
              <div
                className="p-8 md:p-10 rounded-lg"
                style={{ background: "#F2F4F8", border: "1px solid #e8eaf0" }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6"
                  style={{ background: "#0B1D51", color: "#C4973C", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {leader.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {leader.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.12em] font-semibold mb-5" style={{ color: "#C4973C" }}>
                  {leader.title}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7A99" }}>
                  {leader.bio}
                </p>
                <button
                  className="inline-flex items-center gap-2 text-xs font-semibold cursor-pointer"
                  style={{ color: "#0B1D51" }}
                >
                  <ExternalLink size={14} /> Connect on LinkedIn
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
