"use client";

function LogoMark() {
  return (
    <div className="inline-flex items-center gap-4">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="2" width="28" height="28" rx="2" transform="rotate(45 22 2)" fill="#142254" stroke="#C4973C" strokeWidth="1.5"/>
        <text x="22" y="27" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize="11" fontWeight="800" fill="#C4973C">GC</text>
      </svg>
      <div className="flex flex-col leading-none">
        <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "18px", fontWeight: 800, color: "#fff", letterSpacing: "0.02em" }}>
          G<span style={{ color: "#C4973C" }}>&amp;</span>C CAPITAL
        </span>
        <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9AAAC8", marginTop: "3px" }}>
          Holdings LLC
        </span>
      </div>
    </div>
  );
}

const scrollTo = (href: string) => {
  if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  else window.location.href = href;
};

export default function Footer() {
  return (
    <footer style={{ background: "#0D1A3A", borderTop: "4px solid #C4973C", padding: "64px 0 32px" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <div className="mb-4"><LogoMark /></div>
            <p style={{ fontSize: "13px", color: "#9AAAC8", lineHeight: 1.65, fontStyle: "italic", maxWidth: "220px", marginTop: "12px" }}>
              &ldquo;Purpose-built for Healthcare&apos;s Financial Engine.&rdquo;
            </p>
          </div>
          {[
            { title: "Company", links: [["About","#about"],["The RCM Opportunity","#rcm-opportunity"],["Our Edge","#our-edge"],["Our Approach","#approach"],["Vision","#vision"]] },
            { title: "Insights", links: [["Thought Leadership","#insights"],["Leadership","#leadership"],["Contact","#contact"]] },
            { title: "Legal", links: [["Privacy Policy","/privacy-policy"],["Terms of Use","/terms-of-use"],["Disclosures","/disclosures"]] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4973C", marginBottom: "20px" }}>{col.title}</div>
              <ul className="space-y-2.5 list-none">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <button onClick={() => scrollTo(href)} className="cursor-pointer text-left" style={{ fontSize: "13px", color: "#9AAAC8", fontWeight: 400, transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C4973C")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#9AAAC8")}
                    >{label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-7" style={{ borderTop: "1px solid rgba(154,170,200,0.15)" }}>
          <p style={{ fontSize: "12px", color: "#9AAAC8" }}>© 2026 G&amp;C Capital Holdings LLC. All Rights Reserved.</p>
          <p style={{ fontSize: "11px", color: "rgba(154,170,200,0.5)", maxWidth: "600px", lineHeight: 1.55, textAlign: "right" }}>
            G&amp;C Capital Holdings LLC is an investment and advisory firm. Nothing on this website constitutes investment advice or an offer to sell or solicitation to buy any security.
          </p>
        </div>
      </div>
    </footer>
  );
}
