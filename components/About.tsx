import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const values = [
  {
    title: "Domain Depth",
    body: "Unmatched expertise in the RCM ecosystem — from frontend patient access to backend collections and analytics.",
  },
  {
    title: "Capital with Purpose",
    body: "We invest with intent. Every dollar we deploy is aligned to meaningful operational and financial transformation.",
  },
  {
    title: "Partnership First",
    body: "We are active partners, not passive investors. Our network, knowledge, and experience compound alongside your growth.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: "#F2F4F8", padding: "120px 0" }} className="py-[60px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>WHO WE ARE</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mb-12 leading-tight"
            style={{ color: "#0D1A3A", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Purpose-Built for Healthcare&apos;s Financial Engine. We are not generalists. We are
            specialists — singularly committed to the Revenue Cycle Management space.
          </h2>
        </ScrollReveal>

        {/* Mission card */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-lg p-8 md:p-10 mb-14" style={{ background: "#0B1D51" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "#C4973C" }}>
              OUR MISSION
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 italic">
              To deploy intelligent capital and strategic expertise into the Revenue Cycle Management
              ecosystem — creating enduring value for our partners, portfolio companies, and the
              healthcare system at large.
            </p>
          </div>
        </ScrollReveal>

        {/* Body copy */}
        <ScrollReveal delay={0.25}>
          <div className="max-w-3xl mb-16 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "#0D1A3A" }}>
            <p>
              G&amp;C Capital Holdings LLC was founded on a simple but powerful conviction: the U.S.
              healthcare revenue cycle is undergoing its most consequential transformation in decades,
              and most of the capital market is not positioned to seize it.
            </p>
            <p>
              With deep domain expertise spanning healthcare operations, financial technology, and
              enterprise software, we are uniquely equipped to identify the companies and platforms
              that will define the next generation of RCM — and to provide them not just with capital,
              but with the strategic leverage to win.
            </p>
            <p>
              We are practitioners first. We understand the nuances of denial management, prior
              authorization workflows, payer-provider dynamics, and the regulatory landscape. We know
              where the friction lives — and where the opportunity hides.
            </p>
          </div>
        </ScrollReveal>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={0.1 * i}>
              <div
                className="p-8 rounded-lg border-t-2 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "#fff", borderTopColor: "#C4973C" }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>
                  {v.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
