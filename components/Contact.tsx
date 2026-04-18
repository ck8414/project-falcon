"use client";
import { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import { Mail, Phone, MapPin } from "lucide-react";

const inquiryTypes = [
  "Investment Inquiry",
  "Strategic Advisory",
  "Partnership",
  "General Inquiry",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "", title: "", organization: "", email: "", phone: "", inquiry: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xpwzgkne";
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          title: form.title,
          organization: form.organization,
          email: form.email,
          phone: form.phone,
          inquiry: form.inquiry,
          message: form.message,
        }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", title: "", organization: "", email: "", phone: "", inquiry: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200 border";
  const inputStyle = { borderColor: "#e8eaf0", background: "#F2F4F8", color: "#0D1A3A" };

  return (
    <section id="contact" className="py-[60px] md:py-[120px]" style={{ background: "#fff" }}>
      {/* Pre-CTA banner */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <ScrollReveal>
          <div className="rounded-lg p-8 md:p-12 text-center" style={{ background: "#F5EDD6" }}>
            <p
              className="text-xl md:text-2xl font-bold"
              style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              READY TO EXPLORE WHAT G&amp;C CAPITAL CAN DO FOR YOU?
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>GET IN TOUCH</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#0D1A3A", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Let&apos;s Start a Conversation.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base md:text-lg max-w-xl mb-14 leading-relaxed" style={{ color: "#6B7A99" }}>
            Whether you are a healthcare organization seeking strategic capital, a technology platform looking for an
            experienced growth partner, or an investor seeking exposure to the RCM opportunity — we would welcome the
            conversation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Title / Role *</label>
                  <input required name="title" value={form.title} onChange={handleChange} placeholder="e.g., CEO, CFO, Revenue Cycle Director" className={inputClass} style={inputStyle} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Organization *</label>
                <input required name="organization" value={form.organization} onChange={handleChange} placeholder="Company / Health System Name" className={inputClass} style={inputStyle} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (___) ___-____" className={inputClass} style={inputStyle} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Inquiry Type *</label>
                <select required name="inquiry" value={form.inquiry} onChange={handleChange} className={inputClass} style={inputStyle}>
                  <option value="">Select inquiry type...</option>
                  {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#0B1D51" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us a bit about your goals or how we can help..." rows={5} className={`${inputClass} resize-none`} style={inputStyle} />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full py-4 text-sm font-bold tracking-wide rounded transition-all duration-200 cursor-pointer disabled:opacity-60"
                style={{ background: "#C4973C", color: "#fff" }}
                onMouseEnter={(e) => { if (status === "idle") e.currentTarget.style.background = "#A8812E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#C4973C"; }}
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-500 text-center">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact details */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="rounded-lg p-8 h-full" style={{ background: "#0B1D51" }}>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: "#C4973C" }}>
                G&amp;C CAPITAL HOLDINGS LLC
              </p>
              <div className="space-y-5 mb-8">
                <a href="mailto:info@gccapitalholdings.com" className="flex items-start gap-3 group">
                  <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C4973C" }} />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">info@gccapitalholdings.com</span>
                </a>
                <a href="tel:+17163474850" className="flex items-start gap-3 group">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C4973C" }} />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">+1 (716) 347-4850</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C4973C" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Office Address — To Be Added</span>
                </div>
              </div>
              <div className="pt-6 border-t" style={{ borderColor: "rgba(196,151,60,0.3)" }}>
                <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.55)" }}>
                  We respond to all serious inquiries within 48 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
