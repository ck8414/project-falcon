"use client";
import ScrollReveal from "./ui/ScrollReveal";

const edges = [
  { num: "01", title: "Domain Expertise Beyond the Balance Sheet", desc: "Most capital providers can read a P&L. Very few can speak fluently about denial management workflows, DNFB optimization, clinical documentation improvement, or the nuances of payer contract modeling. Our team brings direct operating experience in the RCM space." },
  { num: "02", title: "A Specialized Network in a Specialized Market", desc: "RCM is a relationship-driven industry. G&C has cultivated meaningful relationships across health system CFOs, revenue cycle directors, and payer executives — giving us proprietary deal flow and early access to market intelligence." },
  { num: "03", title: "A Forward-Looking Lens on Technology", desc: "We do not invest in yesterday's RCM. We have a deep understanding of the technology stack reshaping the industry — AI, NLP, RPA, interoperability — identifying companies at the intersection of operational need and technological innovation." },
  { num: "04", title: "Integrated Value Creation", desc: "G&C Capital brings more than a term sheet. We are active contributors to strategic, operational, and commercial development — contributing market positioning, leadership recruiting, payer introductions, and operational gravity alongside financial firepower." },
  { num: "05", title: "Conviction-Driven, Focused Portfolio", desc: "We make deliberate, concentrated investments in areas where our expertise confers a genuine edge. Our conviction-driven approach means we know our investments deeply, support them actively, and hold ourselves accountable to outcomes." },
  { num: "06", title: "Aligned Incentives, Transparent Partnership", desc: "Our model is built around partnership structures that create shared upside and shared accountability. Our portfolio companies know they have a committed partner whose interests are fully aligned — in the boardroom, in the market, through every stage of growth." },
];

export default function OurEdge() {
  return (
    <section id="our-edge" style={{ background: "#fff", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <div className="max-w-[640px] mb-14">
            <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
              <span style={{ fontSize: "8px" }}>◆</span> Our Differentiation <span style={{ fontSize: "8px" }}>◆</span>
            </div>
            <h2 className="font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, color: "#142254", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Why G&amp;C Capital Is Built Differently.
            </h2>
            <p style={{ fontSize: "17px", color: "#6B7A99", lineHeight: 1.75 }}>In a market crowded with generalist capital, G&amp;C Capital Holdings stands apart through focused expertise, deep relationships, and a differentiated perspective on value creation in the RCM ecosystem.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ marginTop: "52px" }}>
            {edges.map((e, i) => (
              <div
                key={e.num}
                className="relative transition-colors duration-200 cursor-default"
                style={{
                  padding: "36px 40px",
                  borderBottom: i < edges.length - 2 ? "1px solid #EEF0F6" : "none",
                  borderRight: i % 2 === 0 ? "1px solid #EEF0F6" : "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F2F4F8")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "56px", fontWeight: 900, color: "#142254", opacity: 0.06, lineHeight: 1, display: "block", marginBottom: "-16px" }}>{e.num}</span>
                <div className="font-bold flex items-center gap-2 mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "19px", color: "#142254" }}>
                  <span style={{ color: "#C4973C", fontSize: "16px" }}>◆</span> {e.title}
                </div>
                <p style={{ fontSize: "14px", color: "#2D3748", lineHeight: 1.75 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-md flex items-center gap-8 mt-14" style={{ background: "#142254", padding: "36px 48px" }}>
            <span style={{ fontSize: "36px", color: "#C4973C", flexShrink: 0 }}>◈</span>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "18px", fontStyle: "italic", color: "#fff", lineHeight: 1.6 }}>
              &ldquo;We are not tourists in healthcare finance. We are residents — with the expertise, relationships, and conviction to identify and support the companies that will define the future of Revenue Cycle Management. <strong style={{ color: "#C4973C", fontStyle: "normal" }}>That is our edge, and it is not easily replicated.</strong>&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
