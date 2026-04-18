"use client";
import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: "$250B+", label: "Global RCM Market Size (2026E)" },
  { value: "$640B+", label: "Annual Healthcare Admin Waste" },
  { value: "27%", label: "Average Claim Denial Rate" },
  { value: "11–16%", label: "Revenue Lost Pre-Collection" },
];

const rcmSteps = [
  ["Patient Registration & Insurance Verification", "Denial Management & Appeals"],
  ["Prior Authorization & Eligibility Confirmation", "Payment Posting & Reconciliation"],
  ["Clinical Documentation & Coding (ICD-10, CPT)", "Patient Billing, Collections & Balance Resolution"],
  ["Claims Submission & Payer Adjudication", "Analytics, Reporting & Compliance"],
];

const whyNow = [
  { title: "Payer Complexity", desc: "The proliferation of insurance products, value-based care contracts, and prior authorization requirements is straining legacy billing infrastructure." },
  { title: "Regulatory Pressure", desc: "CMS mandates, No Surprises Act provisions, and price transparency rules are forcing providers to upgrade their revenue operations or pay the price." },
  { title: "Labor Shortages", desc: "Healthcare administration faces acute staffing shortages, driving urgent demand for automation and intelligent workflow tools." },
  { title: "Margin Compression", desc: "Thin operating margins are making revenue integrity and cycle optimization a C-suite imperative, not an afterthought." },
  { title: "Technology Maturity", desc: "AI, NLP, and automation have finally reached the reliability and scale needed to meaningfully displace manual processes across the revenue cycle." },
  { title: "Consolidation Wave", desc: "Health system consolidation is accelerating the need for RCM platforms that can operate at enterprise scale across complex, distributed networks." },
];

export default function RCMOpportunity() {
  return (
    <section id="rcm-opportunity" style={{ background: "#142254", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          {/* Banner */}
          <div className="rounded-md text-center mb-15" style={{ background: "linear-gradient(90deg, rgba(196,151,60,0.12), rgba(196,151,60,0.05))", border: "1px solid rgba(196,151,60,0.25)", padding: "28px 40px", marginBottom: "60px" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#fff" }}>
              The <span style={{ color: "#C4973C" }}>$250 Billion</span> Opportunity Hiding in Plain Sight
            </p>
          </div>

          <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
            <span style={{ fontSize: "8px" }}>◆</span> The RCM Landscape <span style={{ fontSize: "8px" }}>◆</span>
          </div>
          <h2 className="font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Revenue Cycle Management:<br />The Pulse of U.S. Healthcare Finance.
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#9AAAC8", marginBottom: "20px" }}>Healthcare in America generates over $4.5 trillion in annual spending — yet an estimated $262 billion is lost every year to billing errors, claim denials, administrative inefficiencies, and fragmented workflows. RCM is the complex, multi-stage process that governs how healthcare providers capture, manage, and collect every dollar they are owed.</p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#9AAAC8", marginBottom: "52px" }}>RCM sits at the intersection of clinical operations, financial performance, regulatory compliance, and patient experience. It is the financial backbone of every health system, hospital, physician group, and specialty practice in the country. And it is profoundly broken — which means it is profoundly opportunity-rich.</p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-14 rounded-md overflow-hidden" style={{ background: "rgba(196,151,60,0.15)", border: "1px solid rgba(196,151,60,0.2)" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center" style={{ background: "linear-gradient(145deg, #0D1A3A, #142254)", padding: "36px 24px" }}>
                <AnimatedCounter value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3 className="text-white font-bold mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px" }}>What Is Revenue Cycle Management?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-12">
            {rcmSteps.flat().map((step) => (
              <div key={step} className="flex items-start gap-6 relative" style={{ fontSize: "15px", color: "#9AAAC8", paddingLeft: "24px", lineHeight: 1.55 }}>
                <span className="absolute left-0 top-[5px]" style={{ color: "#C4973C", fontSize: "8px" }}>◆</span>
                {step}
              </div>
            ))}
          </div>
          <div style={{ borderLeft: "4px solid #C4973C", padding: "20px 28px", marginBottom: "52px" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "21px", fontStyle: "italic", color: "#fff", lineHeight: 1.5 }}>
              &ldquo;Every touchpoint in this process is a potential revenue leak — and a potential innovation opportunity.&rdquo;
            </p>
          </div>

          <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px" }}>Why RCM, Why Now?</h3>
          <p style={{ fontSize: "16px", color: "#9AAAC8", marginBottom: "28px", lineHeight: 1.8 }}>Several structural forces are converging to make the RCM space the most compelling investment theme in healthcare services:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyNow.map((item) => (
              <div key={item.title} className="rounded-md transition-all duration-250 cursor-default" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(154,170,200,0.12)", padding: "28px 24px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(196,151,60,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,151,60,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(154,170,200,0.12)"; }}
              >
                <span style={{ fontSize: "20px", color: "#C4973C", display: "block", marginBottom: "12px" }}>▲</span>
                <div className="font-bold mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", color: "#fff" }}>{item.title}</div>
                <p style={{ fontSize: "13px", color: "#9AAAC8", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
