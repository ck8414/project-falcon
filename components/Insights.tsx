"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "./ui/ScrollReveal";
import { articles, categories } from "@/lib/articles";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const syncNav = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < el.scrollWidth - el.offsetWidth - 2);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = 0;
    setTimeout(syncNav, 60);
  }, [activeCategory]);

  useEffect(() => {
    setTimeout(syncNav, 120);
  }, []);

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const card = el.firstElementChild as HTMLElement;
    return card ? card.offsetWidth + 24 : 0;
  };

  const handlePrev = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -getStep(), behavior: "smooth" });
    setTimeout(syncNav, 350);
  };

  const handleNext = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: getStep(), behavior: "smooth" });
    setTimeout(syncNav, 350);
  };

  return (
    <section id="insights" style={{ background: "#fff", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">

        {/* Header */}
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
            <div className="flex items-center gap-5 flex-shrink-0">
              {/* Nav arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={!canPrev}
                  aria-label="Previous articles"
                  style={{
                    width: 38, height: 38, borderRadius: "50%", padding: 0,
                    border: `1.5px solid ${canPrev ? "#142254" : "#D4C08A"}`,
                    background: "transparent",
                    color: canPrev ? "#142254" : "#D4C08A",
                    cursor: canPrev ? "pointer" : "default",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { if (canPrev) (e.currentTarget as HTMLElement).style.background = "#F2F4F8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canNext}
                  aria-label="Next articles"
                  style={{
                    width: 38, height: 38, borderRadius: "50%", padding: 0,
                    border: `1.5px solid ${canNext ? "#142254" : "#D4C08A"}`,
                    background: "transparent",
                    color: canNext ? "#142254" : "#D4C08A",
                    cursor: canNext ? "pointer" : "default",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { if (canNext) (e.currentTarget as HTMLElement).style.background = "#F2F4F8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  →
                </button>
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
                  border: "1.5px solid transparent",
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

        {/* Carousel */}
        <ScrollReveal delay={0.1}>
          {filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: "#6B7A99" }}>No articles in this category yet.</div>
          ) : (
            <div
              ref={trackRef}
              onScroll={syncNav}
              className="flex [&::-webkit-scrollbar]:hidden"
              style={{
                gap: "24px",
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
                scrollSnapType: "x mandatory",
              }}
            >
              {filtered.map((article) => (
                <div
                  key={article.slug}
                  className="flex flex-col rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                  style={{
                    width: "calc(25% - 18px)",
                    minWidth: "240px",
                    scrollSnapAlign: "start",
                    background: "#fff",
                    border: "1px solid #EEF0F6",
                    boxShadow: "0 2px 16px rgba(20,34,84,0.07)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onClick={() => router.push(`/insights/${article.slug}`)}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(20,34,84,0.13)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(20,34,84,0.07)"; }}
                >
                  {/* Card header */}
                  <div className="relative flex items-center justify-center overflow-hidden flex-shrink-0" style={{ height: "160px", background: article.gradient }}>
                    <span style={{ fontSize: "44px", opacity: 0.18 }}>{article.icon}</span>
                    <div className="absolute bottom-0 left-0 right-0" style={{ padding: "10px 16px", background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }}>
                      <span style={{ display: "inline-block", background: "#C4973C", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", borderRadius: "2px" }}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-2" style={{ fontSize: "11px", color: "#6B7A99", fontWeight: 500 }}>
                      {article.date} · {article.readTime}
                    </div>
                    <h3 className="font-bold mb-3 flex-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "15px", color: "#142254", lineHeight: 1.35 }}>
                      {article.title}
                    </h3>
                    <p className="mb-4" style={{ fontSize: "12px", color: "#6B7A99", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 font-semibold" style={{ fontSize: "12px", color: "#C4973C" }}>
                      Read Article &nbsp;→
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
}
