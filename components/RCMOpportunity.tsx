import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: "$250B+", label: "Global RCM Market Size (2026E)" },
  { value: "$640B+", label: "Annual Healthcare Admin Waste" },
  { value: "27%", label: "Average Claim Denial Rate" },
  { value: "16%", label: "Revenue Lost Pre-Collection" },
];

const rcmSteps = [
  "Patient Registration & Insurance Verification",
  "Prior Authorization & Eligibility Confirmation",
  "Clinical Documentation & Coding (ICD-10, CPT, HCC)",
  "Claims Submission & Payer Adjudication",
  "Denial Management & Appeals",
  "Payment Posting & Reconciliation",
  "Patient Billing, Collections & Balance Resolution",
  "Analytics, Reporting & Compliance",
];

const whyNow = [
  { title: "Payer Complexity", body: "The proliferation of insurance products, value-based care contracts, and prior authorization requirements is straining legacy billing infrastructure." },
  { title: "Regulatory Pressure", body: "CMS mandates, No Surprises Act provisions, and price transparency rules are forcing providers to upgrade their revenue operations." },
  { title: "Labor Shortages", body: "Healthcare administration faces acute staffing shortages, driving urgent demand for automation and intelligent workflow tools." },
  { title: "Margin Compression", body: "Thin operating margins across health systems are making revenue integrity and cycle optimization a C-suite imperative." },
  { title: "Technology Maturity", body: "AI, NLP, and automation have finally reached the reliability and scale needed to meaningfully displace manual processes." },
  { title: "Consolidation Wave", body: "Health system consolidation is accelerating the need for RCM platforms that can operate at enterprise scale." },
];

export default function RCMOpportunity() {
  return (
    <section id="rcm-opportunity" className="py-[60px] md:py-[120px]" style={{ background: "#142254" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>THE RCM LANDSCAPE</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mb-10 leading-tight text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Revenue Cycle Management: The Pulse of U.S. Healthcare Finance.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mb-14 text-base md:text-lg leading-relaxed space-y-5" style={{ color: "rgba(255,255,255,0.75)" }}>
            <p>
              Healthcare in America generates over $4.5 trillion in annual spending — yet an estimated $262 billion
              is lost every year to billing errors, claim denials, administrative inefficiencies, and fragmented
              workflows. Revenue Cycle Management (RCM) is the complex, multi-stage process that governs how
              healthcare providers capture, manage, and collect every dollar they are owed.
            </p>
            <p>
              RCM sits at the intersection of clinical operations, financial performance, regulatory compliance, and
              patient experience. It is the financial backbone of every health system, hospital, physician group, and
              specialty practice in the country. And it is profoundly broken — which means it is profoundly opportunity-rich.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 p-8 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.05 * i}>
              <AnimatedCounter value={s.value} label={s.label} />
            </ScrollReveal>
          ))}
        </div>

        {/* What is RCM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          <ScrollReveal delay={0.1}>
            <div>
              <h3
                className="text-2xl font-bold mb-6 text-white"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What Is Revenue Cycle Management?
              </h3>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                The revenue cycle encompasses every step from a patient&apos;s first appointment request to the final payment posting:
              </p>
              <ul className="space-y-3">
                {rcmSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#C4973C" }} />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic" style={{ color: "#C4973C" }}>
                &ldquo;Every touchpoint in this process is a potential revenue leak — and a potential innovation opportunity.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3
                className="text-2xl font-bold mb-6 text-white"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Why RCM, Why Now?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyNow.map((item) => (
                  <div key={item.title} className="p-5 rounded-lg" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: "#C4973C" }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
