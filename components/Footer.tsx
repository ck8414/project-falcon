"use client";
import Image from "next/image";

const company = ["About", "The RCM Opportunity", "Our Edge", "Our Approach", "Vision"];
const companyHrefs = ["#about", "#rcm-opportunity", "#our-edge", "#approach", "#vision"];
const insights = ["Insights & Thought Leadership", "Leadership", "Contact"];
const insightsHrefs = ["#insights", "#leadership", "#contact"];
const legal = ["Privacy Policy", "Terms of Use", "Disclosures"];
const legalHrefs = ["/privacy-policy", "/terms-of-use", "/disclosures"];

function scrollTo(href: string) {
  if (href.startsWith("#")) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer style={{ background: "#142254" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/logos/gc-diamond-dark-only.svg" alt="G&C Capital Holdings" width={240} height={110} className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.45)" }}>
              Purpose-built for Healthcare&apos;s Financial Engine.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-5" style={{ color: "#C4973C" }}>COMPANY</p>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(companyHrefs[i])}
                    className="text-sm cursor-pointer transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-5" style={{ color: "#C4973C" }}>INSIGHTS</p>
            <ul className="space-y-3">
              {insights.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(insightsHrefs[i])}
                    className="text-sm cursor-pointer transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-5" style={{ color: "#C4973C" }}>LEGAL</p>
            <ul className="space-y-3">
              {legal.map((item, i) => (
                <li key={item}>
                  <a
                    href={legalHrefs[i]}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t" style={{ borderColor: "rgba(196,151,60,0.2)" }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              © 2026 G&amp;C Capital Holdings LLC. All Rights Reserved.
            </p>
            <p className="text-xs max-w-xl" style={{ color: "rgba(255,255,255,0.3)" }}>
              G&amp;C Capital Holdings LLC is an investment and advisory firm. Nothing on this website constitutes
              investment advice or an offer to sell or solicitation to buy any security.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
