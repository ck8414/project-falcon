import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const useCases = [
  { title: "Autonomous Coding", body: "AI-powered medical coding engines that read clinical notes, apply appropriate ICD-10/CPT codes, and flag risk areas with greater accuracy than human coders — at 100× the speed." },
  { title: "Predictive Denial Prevention", body: "Machine learning models trained on millions of historical claims identify high-risk submissions before they are filed, enabling proactive correction and dramatically reducing denial rates." },
  { title: "Intelligent Prior Auth", body: "NLP-driven systems that auto-generate and submit prior authorization requests, monitor payer portals in real time, and flag urgency — reducing approval timelines from days to hours." },
  { title: "RPA & Workflow Automation", body: "Robotic Process Automation handles repetitive, rules-based tasks like eligibility verification, claim status checks, and ERA posting — freeing human talent for judgment-intensive work." },
  { title: "Conversational Patient Billing", body: "AI-powered patient communication tools that intelligently handle billing inquiries, payment plan negotiations, and balance resolution via chat, text, and voice." },
  { title: "Revenue Integrity Analytics", body: "Advanced analytics platforms that continuously monitor charge capture, contractual adjustments, payer performance, and clinical documentation gaps — providing CFOs with real-time revenue intelligence." },
  { title: "NLP for Clinical Documentation", body: "Natural Language Processing engines that extract structured billing data from unstructured clinical narratives — closing the documentation gap that costs providers billions annually in undercoded encounters." },
  { title: "Payer Contract Intelligence", body: "AI systems that model, monitor, and audit payer contracts against actual reimbursements — ensuring providers collect every dollar they are contractually entitled to." },
  { title: "Interoperability Platforms", body: "Next-generation integration layers that connect EHRs, practice management systems, clearinghouses, and payer portals into a unified, real-time data environment." },
];

export default function TechAI() {
  return (
    <section id="ai-rcm" className="py-[60px] md:py-[120px]" style={{ background: "#F2F4F8" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>THE INTELLIGENCE REVOLUTION</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mb-10 leading-tight"
            style={{ color: "#0D1A3A", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Artificial Intelligence Is Rewriting the Rules of Revenue Cycle Management.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mb-14 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "#0D1A3A" }}>
            <p>
              For decades, RCM was defined by manual labor, institutional knowledge, and legacy software. The processes
              were slow, error-prone, and expensive. Then came the convergence of large language models, robotic process
              automation, predictive analytics, and cloud-native infrastructure — and the RCM landscape began to
              fundamentally shift.
            </p>
            <p>
              We are now in the early innings of an AI-powered transformation that will compress revenue cycle timelines
              from weeks to hours, reduce denial rates from industry averages of 27% to single digits, and unlock
              billions in previously unrealized reimbursement.
            </p>
            <p className="font-semibold italic" style={{ color: "#0B1D51" }}>
              AI is not a feature in RCM anymore. It is the foundation on which the next generation of revenue
              performance will be built.
            </p>
          </div>
        </ScrollReveal>

        {/* 9 use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.title} delay={0.05 * (i % 3)}>
              <div
                className="p-6 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "#fff", border: "1px solid #e8eaf0" }}
              >
                <div className="w-8 h-0.5 mb-4" style={{ background: "#C4973C" }} />
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {uc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{uc.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Velocity callout */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-lg p-8 md:p-12" style={{ background: "#0B1D51" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "#C4973C" }}>
              THE VELOCITY ADVANTAGE
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-5 text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              FROM REACTIVE TO PREDICTIVE
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
              Traditional RCM is reactive — claims are filed, denials arrive weeks later, and billing teams scramble to
              recover lost revenue. AI-enabled RCM is predictive and preventive. It identifies risk before the claim
              leaves the building, optimizes the submission in real time, and closes the revenue loop in days rather than
              weeks. The organizations that adopt this model will gain a structural, sustainable competitive advantage in
              healthcare finance — and G&amp;C Capital is positioned to back them at the frontier.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
