"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "$240B+", label: "U.S. RCM Market Size by 2026" },
  { value: "~30%", label: "of Revenue Lost to Billing Inefficiencies" },
  { value: "3–5×", label: "AI Efficiency Multiplier in RCM" },
  { value: "27%", label: "Average Industry Claim Denial Rate" },
];

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) { setDisplayed(value); return; }
    const numeric = parseFloat(numericMatch[0]);
    const isDecimal = numeric % 1 !== 0;
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    const duration = 1800;
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setDisplayed(`${prefix}${isDecimal ? numeric.toFixed(1) : numeric}${suffix}`);
        clearInterval(interval);
      } else {
        setDisplayed(`${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "36px", fontWeight: 800, color: "#C4973C", lineHeight: 1, marginBottom: "8px" }}>
      {displayed || value}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100vh", background: "linear-gradient(145deg,#080F22 0%,#0D1A3A 45%,#142254 75%,#1a2b6b 100%)", paddingTop: "80px" }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04, backgroundImage: "linear-gradient(#C4973C 1px, transparent 1px), linear-gradient(90deg, #C4973C 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Floating diamonds */}
      <svg className="absolute pointer-events-none hidden lg:block" style={{ right: "-60px", top: "50%", transform: "translateY(-50%)", width: "520px", height: "520px", opacity: 0.12 }} viewBox="0 0 520 520" fill="none">
        <rect x="260" y="30" width="300" height="300" rx="8" transform="rotate(45 260 30)" fill="none" stroke="#C4973C" strokeWidth="1.5"/>
        <rect x="260" y="90" width="200" height="200" rx="5" transform="rotate(45 260 90)" fill="none" stroke="#C4973C" strokeWidth="1"/>
        <rect x="260" y="150" width="100" height="100" rx="3" transform="rotate(45 260 150)" fill="#C4973C" opacity="0.08"/>
        <rect x="80" y="380" width="120" height="120" rx="4" transform="rotate(45 80 380)" fill="none" stroke="#C4973C" strokeWidth="0.75" opacity="0.4"/>
        <rect x="420" y="80" width="60" height="60" rx="2" transform="rotate(45 420 80)" fill="none" stroke="#C4973C" strokeWidth="0.75" opacity="0.5"/>
      </svg>

      {/* Content */}
      <div className="relative flex-1 flex items-center w-full max-w-[1200px] mx-auto px-12 py-20">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
            style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4973C" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "#C4973C" }} />
            Revenue Cycle Management &nbsp;|&nbsp; Capital &amp; Strategic Advisory
            <span className="inline-block w-8 h-px" style={{ background: "#C4973C" }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="font-bold text-white mb-7"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(44px, 5.5vw, 72px)", lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 800 }}
          >
            Where Capital Meets<br />
            Healthcare&apos;s Most<br />
            <span className="relative inline-block" style={{ color: "#C4973C" }}>
              Transformative Frontier.
              <span className="absolute left-0 right-0" style={{ bottom: "-4px", height: "2px", background: "#C4973C", opacity: 0.6, display: "block" }} />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-11"
            style={{ fontSize: "17px", lineHeight: 1.75, color: "#9AAAC8", maxWidth: "560px", fontWeight: 400 }}
          >
            G&amp;C Capital Holdings is a specialized investment and advisory firm laser-focused on the Revenue Cycle Management ecosystem — the backbone of American healthcare finance. We identify, back, and accelerate the companies reshaping how health systems capture value, reduce friction, and scale with intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#rcm-opportunity")}
              className="inline-flex items-center gap-2 cursor-pointer"
              style={{ background: "#C4973C", color: "#fff", fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.06em", padding: "15px 32px", borderRadius: "3px" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#A8812E"; (e.currentTarget.style as CSSStyleDeclaration & { transform: string }).transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C4973C"; (e.currentTarget.style as CSSStyleDeclaration & { transform: string }).transform = "none"; }}
            >
              Explore Our Thesis &nbsp;→
            </button>
            <button
              onClick={() => scrollTo("#our-edge")}
              className="cursor-pointer"
              style={{ border: "1.5px solid rgba(154,170,200,0.5)", color: "#9AAAC8", fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600, padding: "14px 32px", borderRadius: "3px", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C4973C"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(154,170,200,0.5)"; e.currentTarget.style.color = "#9AAAC8"; }}
            >
              Our Differentiation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}
        className="relative flex flex-wrap"
        style={{ background: "rgba(8,15,34,0.7)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(196,151,60,0.2)" }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex-1 text-center" style={{ padding: "28px 40px", borderRight: i < stats.length - 1 ? "1px solid rgba(196,151,60,0.15)" : "none", minWidth: "140px" }}>
            <AnimatedStatValue value={s.value} />
            <div style={{ fontSize: "12px", color: "#9AAAC8", letterSpacing: "0.06em", fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
