import Link from "next/link";

export const metadata = { title: "Disclosures | G&C Capital Holdings" };

export default function Disclosures() {
  return (
    <div style={{ background: "#F2F4F8", minHeight: "100vh" }}>
      <header className="py-6 px-6" style={{ background: "#142254" }}>
        <div className="max-w-[1280px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="22" y="2" width="28" height="28" rx="2" transform="rotate(45 22 2)" fill="#142254" stroke="#C4973C" strokeWidth="1.5"/>
              <text x="22" y="27" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize="11" fontWeight="800" fill="#C4973C">GC</text>
            </svg>
            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", fontWeight: 800, color: "#fff" }}>G<span style={{ color: "#C4973C" }}>&amp;</span>C CAPITAL</span>
          </Link>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#142254", fontFamily: "var(--font-playfair), Georgia, serif" }}>Regulatory Disclosures</h1>
        <p className="text-sm mb-6" style={{ color: "#6B7A99" }}>Last updated: January 1, 2026</p>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "#0D1A3A" }}>
          <p>G&amp;C Capital Holdings LLC is an investment and advisory firm. Nothing on this website constitutes investment advice or an offer to sell or solicitation to buy any security.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>No Investment Advice</h2>
          <p>The information provided on this website is for general informational purposes only and should not be construed as investment, legal, or tax advice. Past performance is not indicative of future results.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Forward-Looking Statements</h2>
          <p>This website may contain forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those anticipated in such statements.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Contact</h2>
          <p>For regulatory inquiries, contact us at <a href="mailto:info@gccapitalholdings.com" style={{ color: "#C4973C" }}>info@gccapitalholdings.com</a>.</p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-sm font-semibold" style={{ color: "#C4973C" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
