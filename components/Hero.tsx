"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "$240B+", label: "U.S. RCM Market by 2026" },
  { value: "~30%", label: "of Revenue Lost to Inefficiencies" },
  { value: "3–5×", label: "AI Efficiency Multiplier in RCM" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-[120px]"
      style={{ background: "#142254" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 70% 50%, #C4973C 0%, transparent 60%)"
      }} />

      <div className="relative max-w-[1280px] mx-auto px-6 py-20 md:py-28">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-6"
          style={{ color: "#C4973C" }}
        >
          Revenue Cycle Management | Capital &amp; Strategic Advisory
        </motion.p>

        {/* Headline */}
        <div className="mb-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Where Capital Meets Healthcare&apos;s Most{" "}
            <span className="relative inline-block" style={{ color: "#C4973C" }}>
              Transformative Frontier.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left"
                style={{ background: "#C4973C" }}
              />
            </span>
          </motion.h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          G&amp;C Capital Holdings is a specialized investment and advisory firm laser-focused on the
          Revenue Cycle Management ecosystem — the backbone of American healthcare finance. We identify,
          back, and accelerate the companies reshaping how health systems capture value, reduce friction,
          and scale with intelligence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-28"
        >
          <button
            onClick={() => scrollTo("#rcm-opportunity")}
            className="px-7 py-3.5 text-sm font-semibold rounded transition-all duration-200 cursor-pointer"
            style={{ background: "#C4973C", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A8812E")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C4973C")}
          >
            Explore Our Thesis
          </button>
          <button
            onClick={() => scrollTo("#our-edge")}
            className="px-7 py-3.5 text-sm font-semibold rounded border transition-all duration-200 cursor-pointer"
            style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C4973C"; e.currentTarget.style.color = "#C4973C"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
          >
            Our Differentiation
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 border-t pt-10"
          style={{ borderColor: "rgba(196,151,60,0.3)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center sm:text-left px-0 sm:px-8 ${i > 0 ? "sm:border-l" : ""}`}
              style={{ borderColor: "rgba(196,151,60,0.3)" }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "#C4973C", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
