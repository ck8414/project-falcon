"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The RCM Opportunity", href: "#rcm-opportunity" },
  { label: "Our Edge", href: "#our-edge" },
  { label: "Insights", href: "#insights" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
        style={{
          background: "#142254",
          height: "120px",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Image src="/logos/gc-logo-dark-only.svg" alt="G&C Capital Holdings" width={360} height={164} className="h-[100px] w-auto object-contain" priority />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-white/80 hover:text-white relative group transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C4973C] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNav("#contact")}
            className="hidden lg:block text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 cursor-pointer"
            style={{ background: "#C4973C", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A8812E")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C4973C")}
          >
            Connect With Us
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col transition-all duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#142254" }}
      >
        <div className="flex items-center justify-between px-6 h-[80px]">
          <Image src="/logos/gc-logo-dark-only.svg" alt="G&C Capital Holdings" width={260} height={119} className="h-[60px] w-auto object-contain" />
          <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-xl text-white font-medium tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contact")}
              className="mt-4 text-sm font-semibold px-8 py-3 rounded cursor-pointer"
              style={{ background: "#C4973C", color: "#fff" }}
            >
              Connect With Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
