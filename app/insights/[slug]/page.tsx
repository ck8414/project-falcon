import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Navbar />
      {/* Header */}
      <div style={{ background: article.gradient, paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-12 py-20">
          <Link href="/#insights" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#C4973C", fontWeight: 600, marginBottom: "28px" }}>
            ← Back to Insights
          </Link>
          <div style={{ display: "inline-block", background: "#C4973C", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "2px", marginBottom: "20px" }}>
            {article.category}
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: "820px" }}>
            {article.title}
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginTop: "20px" }}>{article.readTime}</p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-[820px] mx-auto px-12 py-20">
        {article.content.trim().split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            return <h2 key={i} style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "28px", fontWeight: 800, color: "#142254", marginTop: "48px", marginBottom: "16px", lineHeight: 1.2 }}>{block.replace("## ", "")}</h2>;
          }
          if (block.startsWith("**") && block.includes("**")) {
            const parts = block.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "#2D3748", marginBottom: "20px" }}>
                {parts.map((part, j) => j % 2 === 1 ? <strong key={j} style={{ color: "#142254", fontWeight: 700 }}>{part}</strong> : part)}
              </p>
            );
          }
          return <p key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "#2D3748", marginBottom: "20px" }}>{block}</p>;
        })}

        <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "2px solid #C4973C" }}>
          <Link href="/#insights" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#142254", color: "#fff", fontSize: "14px", fontWeight: 700, padding: "14px 28px", borderRadius: "3px" }}>
            ← Back to All Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
