import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ArticleNav from "./ArticleNav";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Navbar />

      {/* Hero header */}
      <div style={{ background: article.gradient, paddingTop: "80px", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: "linear-gradient(#C4973C 1px, transparent 1px), linear-gradient(90deg, #C4973C 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[900px] mx-auto relative" style={{ padding: "60px 48px 72px" }}>
          {/* Back link */}
          <Link
            href="/insights"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", marginBottom: "40px" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to All Insights
          </Link>

          {/* Category badge */}
          <div style={{ marginBottom: "20px" }}>
            <span style={{ display: "inline-block", background: "#C4973C", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "2px" }}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: "800px", marginBottom: "28px" }}>
            {article.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px" }}>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>Published</span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>G&amp;C Capital Research</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ background: "#fff" }}>
        <div className="max-w-[740px] mx-auto" style={{ padding: "72px 48px 80px" }}>
          {/* Lead excerpt */}
          <p style={{ fontSize: "19px", lineHeight: 1.75, color: "#142254", fontWeight: 500, borderLeft: "3px solid #C4973C", paddingLeft: "24px", marginBottom: "48px", fontStyle: "italic" }}>
            {article.excerpt}
          </p>

          {/* Article content */}
          {article.content.trim().split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(22px, 2.5vw, 28px)", fontWeight: 800, color: "#142254", marginTop: "56px", marginBottom: "18px", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.includes("**")) {
              const parts = block.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} style={{ fontSize: "17px", lineHeight: 1.85, color: "#374151", marginBottom: "22px" }}>
                  {parts.map((part, j) =>
                    j % 2 === 1
                      ? <strong key={j} style={{ color: "#142254", fontWeight: 700 }}>{part}</strong>
                      : part
                  )}
                </p>
              );
            }
            return <p key={i} style={{ fontSize: "17px", lineHeight: 1.85, color: "#374151", marginBottom: "22px" }}>{block}</p>;
          })}

          {/* Gold divider */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #D4C08A, transparent)", margin: "64px 0 48px" }} />

          {/* Navigation + CTA — client component handles hover states */}
          <ArticleNav
            prevSlug={prevArticle?.slug ?? null}
            prevTitle={prevArticle?.title ?? null}
            nextSlug={nextArticle?.slug ?? null}
            nextTitle={nextArticle?.title ?? null}
          />

          {/* CTA card */}
          <div style={{ marginTop: "60px", background: "linear-gradient(135deg, #0D1A3A 0%, #142254 100%)", borderRadius: "8px", padding: "40px", borderLeft: "4px solid #C4973C" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C", marginBottom: "14px" }}>Get In Touch</div>
            <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "12px", lineHeight: 1.25 }}>
              Interested in the RCM opportunity?
            </h3>
            <p style={{ fontSize: "15px", color: "#9AAAC8", lineHeight: 1.65, marginBottom: "24px", maxWidth: "480px" }}>
              G&amp;C Capital partners with healthcare technology companies, health systems, and investors at the frontier of revenue cycle innovation.
            </p>
            <Link
              href="/#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C4973C", color: "#fff", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "13px 26px", borderRadius: "3px", textDecoration: "none" }}
            >
              Connect With Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
