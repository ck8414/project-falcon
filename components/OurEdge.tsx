import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const advantages = [
  {
    num: "01",
    title: "Domain Expertise That Goes Beyond the Balance Sheet",
    body: "Most capital providers can read a P&L. Very few can speak fluently about denial management workflows, DNFB optimization, clinical documentation improvement, or the nuances of payer contract modeling. Our team brings direct operating experience in the RCM space — the kind of contextual intelligence that transforms good capital into great partnership.",
  },
  {
    num: "02",
    title: "A Specialized Network in a Specialized Market",
    body: "RCM is a relationship-driven industry. Health system CFOs, revenue cycle directors, coding leaders, and payer executives operate within a tight, trusted network. G&C has cultivated meaningful relationships across this ecosystem — giving us proprietary deal flow, early access to market intelligence, and the ability to open doors for our portfolio companies that capital alone cannot unlock.",
  },
  {
    num: "03",
    title: "A Forward-Looking Lens on Technology Disruption",
    body: "We do not invest in yesterday's RCM. We have a deep understanding of the technology stack reshaping the industry — AI, NLP, RPA, interoperability, and cloud-native infrastructure. We identify companies and platforms at the intersection of operational need and technological innovation, before the broader market has recognized the opportunity.",
  },
  {
    num: "04",
    title: "Integrated Value Creation — Not Just Capital",
    body: "G&C Capital brings more than a term sheet. We are active contributors to the strategic, operational, and commercial development of our portfolio. Whether it is market positioning, leadership recruiting, payer and provider introductions, or scaling operations — we bring operational gravity alongside financial firepower.",
  },
  {
    num: "05",
    title: "Conviction-Driven, Focused Portfolio Approach",
    body: "We are not trying to be everything to everyone. We make deliberate, concentrated investments in areas where our expertise confers a genuine edge. Our conviction-driven approach means we know our investments deeply, support them actively, and hold ourselves accountable to outcomes — not just metrics.",
  },
  {
    num: "06",
    title: "Aligned Incentives, Transparent Partnership",
    body: "We believe in long-term alignment. Our model is built around partnership structures that create shared upside and shared accountability. Our portfolio companies know they have a committed partner whose interests are fully aligned with theirs — in the boardroom, in the market, and through every stage of growth.",
  },
];

export default function OurEdge() {
  return (
    <section id="our-edge" className="py-[60px] md:py-[120px]" style={{ background: "#0B1D51" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>OUR DIFFERENTIATION</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Why G&amp;C Capital Is Built Differently.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base md:text-lg max-w-2xl mb-16" style={{ color: "rgba(255,255,255,0.72)" }}>
            In a market crowded with generalist capital, G&amp;C Capital Holdings stands apart through focused expertise,
            deep relationships, and a differentiated perspective on value creation in the RCM ecosystem.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {advantages.map((adv, i) => (
            <ScrollReveal key={adv.num} delay={0.05 * (i % 2)}>
              <div
                className="p-7 rounded-lg transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(196,151,60,0.2)" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-2xl font-bold flex-shrink-0"
                    style={{ color: "#C4973C", fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {adv.num}
                  </span>
                  <div>
                    <h3
                      className="text-base font-bold mb-3 text-white"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {adv.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {adv.body}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing statement */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-lg p-8 md:p-12 text-center" style={{ background: "#F5EDD6" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: "#C4973C" }}>
              THE G&amp;C CAPITAL DIFFERENCE
            </p>
            <p
              className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              We are not tourists in healthcare finance. We are residents — with the expertise, relationships, and
              conviction to identify and support the companies that will define the future of Revenue Cycle Management.
              That is our edge, and it is not easily replicated.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
