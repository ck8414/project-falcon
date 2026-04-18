"use client";
import Link from "next/link";

interface Props {
  prevSlug: string | null;
  prevTitle: string | null;
  nextSlug: string | null;
  nextTitle: string | null;
}

export default function ArticleNav({ prevSlug, nextSlug }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <Link
        href="/insights"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#142254", color: "#fff", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", transition: "background 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#0D1A3A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#142254")}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All Insights
      </Link>

      <div className="flex items-center gap-3">
        {prevSlug && (
          <Link
            href={`/insights/${prevSlug}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6B7A99", fontWeight: 600, textDecoration: "none", padding: "10px 18px", border: "1.5px solid #DDE2EF", borderRadius: "3px", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C4973C"; (e.currentTarget as HTMLElement).style.color = "#142254"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#DDE2EF"; (e.currentTarget as HTMLElement).style.color = "#6B7A99"; }}
          >
            ← Prev
          </Link>
        )}
        {nextSlug && (
          <Link
            href={`/insights/${nextSlug}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6B7A99", fontWeight: 600, textDecoration: "none", padding: "10px 18px", border: "1.5px solid #DDE2EF", borderRadius: "3px", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C4973C"; (e.currentTarget as HTMLElement).style.color = "#142254"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#DDE2EF"; (e.currentTarget as HTMLElement).style.color = "#6B7A99"; }}
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
