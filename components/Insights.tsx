import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "AI & Automation",
    title: "The Denial Crisis: Why 27% Isn't Acceptable — And How AI Is Fixing It",
    excerpt: "An in-depth look at the denial epidemic in U.S. healthcare billing and the technology platforms closing the gap.",
    readTime: "8 min read",
  },
  {
    category: "Policy & Regulation",
    title: "Prior Authorization in 2026: Automation, Reform, and What It Means for Providers",
    excerpt: "As CMS continues pushing for prior auth reform, we explore what AI-powered workflows mean for the new regulatory landscape.",
    readTime: "6 min read",
  },
  {
    category: "Market Trends",
    title: "The RCM Staffing Paradox: Why Labor Shortages Are Accelerating Technology Adoption",
    excerpt: "Healthcare admin faces a talent crisis. We examine how forward-thinking health systems are turning constraint into competitive advantage.",
    readTime: "7 min read",
  },
];

const categories = ["All", "AI & Automation", "Policy & Regulation", "Market Trends", "Operations", "Technology"];

export default function Insights() {
  return (
    <section id="insights" className="py-[60px] md:py-[120px]" style={{ background: "#F2F4F8" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>OUR PERSPECTIVE</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl leading-tight"
              style={{ color: "#0D1A3A", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Perspectives on the Future of Healthcare Finance.
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#6B7A99" }}>
              G&amp;C Capital publishes regular insights on the forces shaping Revenue Cycle Management — from AI and
              automation to regulatory shifts and market consolidation.
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter (visual) */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-medium cursor-default transition-colors"
                style={{
                  background: i === 0 ? "#0B1D51" : "#fff",
                  color: i === 0 ? "#fff" : "#6B7A99",
                  border: "1px solid #e8eaf0",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {articles.map((article, i) => (
            <ScrollReveal key={article.title} delay={0.08 * i}>
              <div
                className="flex flex-col rounded-lg overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "#fff", border: "1px solid #e8eaf0" }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-[0.12em] font-semibold mb-4" style={{ color: "#C4973C" }}>
                    {article.category}
                  </span>
                  <h3
                    className="text-lg font-bold mb-3 leading-snug flex-1"
                    style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7A99" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#6B7A99" }}>{article.readTime}</span>
                    <button className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer" style={{ color: "#C4973C" }}>
                      Read Article <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer" style={{ color: "#C4973C" }}>
              View All Insights <ArrowRight size={15} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
