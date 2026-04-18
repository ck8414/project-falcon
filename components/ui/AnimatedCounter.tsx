"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  light?: boolean;
}

export default function AnimatedCounter({ value, label, light = false }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayed, setDisplayed] = useState("0");

  const numericMatch = value.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9.]+$/)?.[0] ?? "";

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setDisplayed(value.replace(/[\d.]+/, numeric % 1 === 0 ? numeric.toString() : numeric.toFixed(1)));
        clearInterval(interval);
      } else {
        const display = numeric % 1 === 0 ? Math.floor(current).toString() : current.toFixed(1);
        setDisplayed(`${prefix}${display}${suffix}`);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, numeric, prefix, suffix, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-3xl md:text-4xl font-bold mb-1"
        style={{ color: "#C4973C", fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {displayed || value}
      </div>
      <div
        className="text-xs md:text-sm uppercase tracking-widest"
        style={{ color: light ? "#6B7A99" : "#6B7A99" }}
      >
        {label}
      </div>
    </div>
  );
}
