import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const steps = [
  { num: "①", title: "Identify", body: "We source and rigorously evaluate opportunities in the RCM ecosystem — targeting companies at the intersection of operational need, technological innovation, and market timing." },
  { num: "②", title: "Underwrite", body: "Our diligence goes beyond financials. We assess clinical workflow integration, payer-provider dynamics, technology architecture, regulatory risk, and long-term defensibility." },
  { num: "③", title: "Partner", body: "We enter each relationship as an active, engaged partner — contributing strategic guidance, operational expertise, market access, and leadership support alongside our capital." },
  { num: "④", title: "Accelerate", body: "We work alongside our portfolio to accelerate revenue growth, operational efficiency, and market positioning — leveraging our network, knowledge, and resources." },
  { num: "⑤", title: "Scale", body: "We support our companies through each stage of growth — from early-stage platform development to enterprise-scale deployment — with the capital and strategic guidance to sustain momentum." },
  { num: "⑥", title: "Create Legacy", body: "We are building companies and outcomes that endure. Our horizon is not the next quarter — it is the next decade. We invest to create lasting impact in healthcare finance." },
];

export default function Approach() {
  return (
    <section id="approach" className="py-[60px] md:py-[120px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>HOW WE WORK</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mb-8 leading-tight"
            style={{ color: "#0D1A3A", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Thoughtful Capital. Active Partnership. Enduring Value.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base md:text-lg max-w-2xl mb-16 leading-relaxed" style={{ color: "#6B7A99" }}>
            Our approach to value creation is rooted in conviction, collaboration, and deep sector knowledge. We do not
            deploy capital passively — we deploy it purposefully.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={0.07 * (i % 3)}>
              <div
                className="p-7 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "#F2F4F8" }}
              >
                <div className="text-3xl mb-4" style={{ color: "#C4973C" }}>{step.num}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#142254", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="border-l-4 pl-6 max-w-2xl" style={{ borderColor: "#C4973C" }}>
            <p
              className="text-lg md:text-xl italic"
              style={{ color: "#142254", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              &ldquo;Great companies in RCM are built on operational truth, not financial engineering. Our job is to find
              them early and help them win.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
