"use client";
import ScrollReveal from "./ui/ScrollReveal";

const aiCards = [
  { icon: "⚡", title: "Autonomous Coding", desc: "AI-powered medical coding engines that read clinical notes and apply accurate ICD-10/CPT codes at 100× the speed of human coders." },
  { icon: "🔮", title: "Predictive Denial Prevention", desc: "Machine learning models trained on millions of historical claims identify high-risk submissions before they are filed — reducing denial rates to single digits." },
  { icon: "⚙️", title: "Intelligent Prior Auth", desc: "NLP-driven systems that auto-generate and submit prior authorization requests, reducing approval timelines from days to hours." },
  { icon: "🤖", title: "RPA & Workflow Automation", desc: "Robotic Process Automation handles eligibility verification, claim status checks, and ERA posting — freeing human talent for judgment-intensive work." },
  { icon: "💬", title: "Conversational Patient Billing", desc: "AI-powered tools that handle billing inquiries, payment plans, and balance resolution via chat and voice — improving collections and satisfaction simultaneously." },
  { icon: "📊", title: "Revenue Integrity Analytics", desc: "Platforms that continuously monitor charge capture, contractual adjustments, and payer performance — providing real-time revenue intelligence to CFOs." },
  { icon: "🧠", title: "NLP for Clinical Documentation", desc: "Natural Language Processing engines that extract structured billing data from unstructured clinical narratives — closing the documentation gap costing providers billions." },
  { icon: "📋", title: "Payer Contract Intelligence", desc: "AI systems that model, monitor, and audit payer contracts against actual reimbursements — ensuring providers collect every dollar they are contractually entitled to." },
  { icon: "🔗", title: "Interoperability Platforms", desc: "Next-generation integration layers connecting EHRs, practice management systems, clearinghouses, and payer portals into a unified, real-time data environment." },
];

export default function TechAI() {
  return (
    <section id="ai-rcm" style={{ background: "#F2F4F8", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
              <span style={{ fontSize: "8px" }}>◆</span> The Intelligence Revolution <span style={{ fontSize: "8px" }}>◆</span>
            </div>
            <h2 className="font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, color: "#142254", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Artificial Intelligence Is Rewriting the Rules of Revenue Cycle Management.
            </h2>
            <p style={{ fontSize: "16px", color: "#2D3748", lineHeight: 1.8 }}>
              For decades, RCM was defined by manual labor, institutional knowledge, and legacy software. The processes were slow, error-prone, and expensive. Then came the convergence of large language models, robotic process automation, predictive analytics, and cloud-native infrastructure — and the RCM landscape began to fundamentally shift.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative rounded-lg overflow-hidden mb-14" style={{ background: "#142254", padding: "36px 48px" }}>
            <div className="absolute left-0 top-0 bottom-0 w-[5px]" style={{ background: "#C4973C" }} />
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", fontStyle: "italic", color: "#fff", lineHeight: 1.55, paddingLeft: "20px" }}>
              &ldquo;AI is not a feature in RCM anymore. It is the foundation on which the next generation of revenue performance will be built.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {aiCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={0.04 * (i % 3)}>
              <div
                className="rounded-lg h-full"
                style={{ background: "#fff", padding: "28px 24px", boxShadow: "0 2px 16px rgba(20,34,84,0.06)", borderTop: "3px solid #C4973C", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(20,34,84,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(20,34,84,0.06)"; }}
              >
                <div className="rounded-lg flex items-center justify-center mb-4" style={{ width: "42px", height: "42px", background: "#142254", fontSize: "18px" }}>{c.icon}</div>
                <div className="font-bold mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", color: "#142254" }}>{c.title}</div>
                <p style={{ fontSize: "13px", color: "#6B7A99", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="rounded-b-md" style={{ background: "#F5EDD6", borderTop: "4px solid #C4973C", padding: "32px 36px" }}>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#142254", marginBottom: "12px" }}>From Reactive to Predictive</div>
            <p style={{ fontSize: "15px", color: "#0D1A3A", lineHeight: 1.78 }}>
              Traditional RCM is reactive — claims are filed, denials arrive weeks later, and billing teams scramble to recover lost revenue. AI-enabled RCM is predictive and preventive. It identifies risk before the claim leaves the building, optimizes the submission in real time, and closes the revenue loop in days rather than weeks. The organizations that adopt this model will gain a structural, sustainable competitive advantage in healthcare finance — and G&amp;C Capital is positioned to back them at the frontier.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
