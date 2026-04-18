"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { articles, categories } from "@/lib/articles";

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="2" width="28" height="28" rx="2" transform="rotate(45 22 2)" fill="#142254" stroke="#C4973C" strokeWidth="1.5"/>
      <rect x="22" y="7" width="20" height="20" rx="1" transform="rotate(45 22 7)" fill="none" stroke="#C4973C" strokeWidth="0.75" opacity="0.5"/>
      <text x="22" y="27" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize="11" fontWeight="800" fill="#C4973C">GC</text>
    </svg>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", background: "#F2F4F8" }}>
      <Navbar />

      {/* Page header */}
      <div style={{ background: "linear-gradient(145deg,#080F22 0%,#0D1A3A 50%,#142254 100%)", paddingTop: "80px", position: "relative", overflow: "hidden" }}>
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04, backgroundImage: "linear-gradient(#C4973C 1px, transparent 1px), linear-gradient(90deg, #C4973C 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12" style={{ padding: "72px 48px 80px" }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8" style={{ fontSize: "12px", color: "#9AAAC8", letterSpacing: "0.04em" }}>
            <Link href="/" style={{ color: "#9AAAC8", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4973C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9AAAC8")}>Home</Link>
            <span style={{ color: "rgba(154,170,200,0.4)" }}>/</span>
            <span style={{ color: "#C4973C" }}>Insights</span>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4973C" }}>
            <span className="inline-block w-6 h-px" style={{ background: "#C4973C" }} />
            Our Perspective
            <span className="inline-block w-6 h-px" style={{ background: "#C4973C" }} />
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "720px" }}>
            Perspectives on the<br />
            <span style={{ color: "#C4973C" }}>Future of Healthcare Finance.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "#9AAAC8", lineHeight: 1.75, maxWidth: "560px" }}>
            Original research, market analysis, and strategic insights from the G&amp;C Capital team on the evolving RCM ecosystem.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-10 pt-10" style={{ borderTop: "1px solid rgba(196,151,60,0.2)" }}>
            {[
              { value: `${articles.length}`, label: "Articles Published" },
              { value: categories.length - 1 + "", label: "Coverage Areas" },
              { value: "Weekly", label: "New Insights" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "28px", fontWeight: 800, color: "#C4973C", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "11px", color: "#9AAAC8", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + content */}
      <div className="max-w-[1200px] mx-auto" style={{ padding: "64px 48px 100px" }}>
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#6B7A99", letterSpacing: "0.12em", textTransform: "uppercase", marginRight: "8px" }}>Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="cursor-pointer"
              style={{
                fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em",
                padding: "8px 18px", borderRadius: "24px", transition: "all 0.2s",
                background: activeCategory === cat ? "#142254" : "#fff",
                color: activeCategory === cat ? "#fff" : "#6B7A99",
                border: activeCategory === cat ? "1.5px solid #142254" : "1.5px solid #DDE2EF",
                boxShadow: activeCategory === cat ? "0 4px 12px rgba(20,34,84,0.2)" : "none",
              }}
              onMouseEnter={(e) => { if (activeCategory !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "#C4973C"; (e.currentTarget as HTMLElement).style.color = "#142254"; }}}
              onMouseLeave={(e) => { if (activeCategory !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "#DDE2EF"; (e.currentTarget as HTMLElement).style.color = "#6B7A99"; }}}
            >
              {cat}
              {cat !== "All" && (
                <span style={{ marginLeft: "6px", fontSize: "10px", opacity: 0.6 }}>
                  ({articles.filter(a => a.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-8" style={{ fontSize: "13px", color: "#6B7A99" }}>
          Showing <strong style={{ color: "#142254" }}>{filtered.length}</strong> {filtered.length === 1 ? "article" : "articles"}
          {activeCategory !== "All" && <> in <strong style={{ color: "#C4973C" }}>{activeCategory}</strong></>}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <div
              key={article.slug}
              className="cursor-pointer flex flex-col"
              style={{ background: "#fff", border: "1px solid #EEF0F6", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 12px rgba(20,34,84,0.06)", transition: "all 0.25s" }}
              onClick={() => router.push(`/insights/${article.slug}`)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(20,34,84,0.14)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,151,60,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(20,34,84,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "#EEF0F6"; }}
            >
              {/* Card image header */}
              <div className="relative flex items-center justify-center" style={{ height: "164px", background: article.gradient, flexShrink: 0 }}>
                <span style={{ fontSize: "52px", opacity: 0.15 }}>{article.icon}</span>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between" style={{ padding: "12px 20px 14px" }}>
                  <span style={{ display: "inline-block", background: "#C4973C", color: "#fff", fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "2px" }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", letterSpacing: "0.04em" }}>{article.readTime}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1" style={{ padding: "24px" }}>
                <div style={{ fontSize: "11px", color: "#9AAAC8", letterSpacing: "0.04em", marginBottom: "10px" }}>{article.date}</div>
                <h3 className="font-bold flex-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", fontWeight: 800, color: "#142254", lineHeight: 1.4, marginBottom: "12px" }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#6B7A99", lineHeight: 1.7, marginBottom: "20px" }}>{article.excerpt}</p>
                <div className="flex items-center gap-1.5" style={{ fontSize: "13px", color: "#C4973C", fontWeight: 700, letterSpacing: "0.04em" }}>
                  Read Article <span style={{ fontSize: "15px" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center" style={{ padding: "80px 0", color: "#6B7A99" }}>
            <p style={{ fontSize: "16px" }}>No articles in this category yet.</p>
            <button onClick={() => setActiveCategory("All")} style={{ marginTop: "16px", color: "#C4973C", fontWeight: 600, cursor: "pointer", fontSize: "14px", background: "none", border: "none" }}>
              View all articles →
            </button>
          </div>
        )}
      </div>

      {/* Footer strip */}
      <div style={{ background: "#142254", borderTop: "1px solid rgba(196,151,60,0.2)", padding: "32px 48px" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "14px", fontWeight: 700, color: "#fff" }}>G&amp;C Capital Holdings</span>
          </div>
          <Link href="/" style={{ fontSize: "13px", color: "#9AAAC8", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C4973C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9AAAC8")}>
            ← Back to Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}
