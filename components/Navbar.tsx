"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The RCM Opportunity", href: "#rcm-opportunity" },
  { label: "Our Edge", href: "#our-edge" },
  { label: "Insights", href: "#insights" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-4 cursor-pointer">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="2" width="28" height="28" rx="2" transform="rotate(45 22 2)" fill="#142254" stroke="#C4973C" strokeWidth="1.5"/>
        <rect x="22" y="7" width="20" height="20" rx="1" transform="rotate(45 22 7)" fill="none" stroke="#C4973C" strokeWidth="0.75" opacity="0.5"/>
        <text x="22" y="27" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize="11" fontWeight="800" fill="#C4973C">GC</text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-bold tracking-wide" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "18px", fontWeight: 800, color: dark ? "#142254" : "#fff", letterSpacing: "0.02em" }}>
          G<span style={{ color: "#C4973C" }}>&amp;</span>C CAPITAL
        </span>
        <span className="font-medium uppercase" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "9px", letterSpacing: "0.22em", color: "#9AAAC8", marginTop: "3px" }}>
          Holdings LLC
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center"
        style={{
          background: "#142254",
          height: "80px",
          borderBottom: "1px solid rgba(196,151,60,0.25)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "0 2px 24px rgba(13,26,58,0.4)",
          transition: "box-shadow 0.3s",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-12 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
            <LogoMark />
          </button>

          <ul className="hidden lg:flex items-center gap-9 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="relative pb-1 cursor-pointer group"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 500, color: "#9AAAC8", letterSpacing: "0.04em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9AAAC8")}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ background: "#C4973C" }} />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNav("#contact")}
            className="hidden lg:block cursor-pointer"
            style={{ background: "#C4973C", color: "#fff", fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", padding: "10px 24px", borderRadius: "3px", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A8812E")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C4973C")}
          >
            Connect With Us
          </button>

          <button onClick={() => setOpen(true)} className="lg:hidden text-white p-2" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col lg:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#142254" }}
      >
        <div className="flex items-center justify-between px-6 h-[80px]">
          <LogoMark />
          <button onClick={() => setOpen(false)} className="text-white p-2"><X size={24} /></button>
        </div>
        <ul className="flex flex-col items-center justify-center flex-1 gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNav(link.href)} className="text-xl text-white font-medium cursor-pointer">
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => handleNav("#contact")} className="mt-4 text-sm font-bold px-8 py-3 rounded cursor-pointer" style={{ background: "#C4973C", color: "#fff" }}>
              Connect With Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
