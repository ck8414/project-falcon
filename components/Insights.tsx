"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "./ui/ScrollReveal";
import { articles, categories } from "@/lib/articles";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="insights" style={{ background: "#fff", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
                <span style={{ fontSize: "8px" }}>◆</span> Our Perspective <span style={{ fontSize: "8px" }}>◆</span>
              </div>
              <h2 className="font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, color: "#142254", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                Perspectives on the Future<br className="hidden sm:block" /> of Healthcare Finance.
              </h2>
            </div>
            <Link
              href="/insights"
              className="flex items-center gap-1.5 whitespace-nowrap"
              style={{ fontSize: "14px", color: "#C4973C", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View All Insights &nbsp;→
            </Link>
          </div>
        </ScrollReveal>

        {/* Filter bar */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="cursor-pointer"
                style={{
                  fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em",
                  padding: "7px 16px", borderRadius: "20px",
                  background: activeCategory === cat ? "#142254" : "#F2F4F8",
                  color: activeCategory === cat ? "#fff" : "#6B7A99",
                  border: activeCategory === cat ? "1.5px solid transparent" : "1.5px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { if (activeCategory !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "#C4973C"; (e.currentTarget as HTMLElement).style.color = "#142254"; } }}
                onMouseLeave={(e) => { if (activeCategory !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#6B7A99"; } }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-3 text-center py-20" style={{ color: "#6B7A99" }}>No articles in this category yet.</div>
          ) : filtered.map((article, i) => (
            <ScrollReveal key={article.slug} delay={0.06 * i}>
              <div
                className="rounded-lg overflow-hidden cursor-pointer h-full flex flex-col"
                style={{ background: "#fff", border: "1px solid #EEF0F6", boxShadow: "0 2px 16px rgba(20,34,84,0.07)", transition: "all 0.25s" }}
                onClick={() => router.push(`/insights/${article.slug}`)}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(20,34,84,0.13)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(20,34,84,0.07)"; }}
              >
                {/* Image header */}
                <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "180px", background: article.gradient }}>
                  <span style={{ fontSize: "48px", opacity: 0.18 }}>{article.icon}</span>
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "12px 20px", background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }}>
                    <span style={{ display: "inline-block", background: "#C4973C", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "2px" }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-2 flex-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "17px", color: "#142254", lineHeight: 1.35 }}>
                    {article.title}
                  </h3>
                  <p className="mb-4" style={{ fontSize: "13px", color: "#6B7A99", lineHeight: 1.65 }}>{article.excerpt}</p>
                  <div className="flex items-center gap-1.5 font-semibold" style={{ fontSize: "13px", color: "#C4973C" }}>
                    Read Article &nbsp;→
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
