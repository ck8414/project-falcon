"use client";
import { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ name:"", title:"", org:"", email:"", phone:"", inquiry:"", message:"" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name:"", title:"", org:"", email:"", phone:"", inquiry:"", message:"" });
    } catch { setStatus("error"); }
  };

  const inp = { border: "1.5px solid #DDE2EF", borderRadius: "4px", padding: "12px 16px", fontSize: "15px", fontFamily: "var(--font-inter)", color: "#0D1A3A", background: "#fff", width: "100%", outline: "none" };

  return (
    <section id="contact" style={{ background: "#fff", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-12">
        {/* Pre-CTA banner */}
        <ScrollReveal>
          <div className="rounded-md text-center mb-18" style={{ background: "#142254", padding: "40px", marginBottom: "72px" }}>
            <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "26px", fontWeight: 800, color: "#fff", letterSpacing: "0.01em" }}>
              Ready to Explore What <span style={{ color: "#C4973C" }}>G&amp;C Capital</span> Can Do For You?
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">
          {/* Form */}
          <ScrollReveal delay={0.05}>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-5" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4973C" }}>
                <span style={{ fontSize: "8px" }}>◆</span> Get In Touch <span style={{ fontSize: "8px" }}>◆</span>
              </div>
              <h2 className="font-bold mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 800, color: "#142254", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                Let&apos;s Start a Conversation.
              </h2>
              <p style={{ fontSize: "17px", color: "#6B7A99", lineHeight: 1.75, maxWidth: "460px" }}>
                Whether you are a healthcare organization seeking strategic capital, a technology platform looking for an experienced growth partner, or an investor seeking exposure to the RCM opportunity — we would welcome the conversation.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name" style={inp} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Title / Role *</label>
                  <input required name="title" value={form.title} onChange={handleChange} placeholder="e.g., CEO, CFO, Revenue Cycle Director" style={inp} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Organization *</label>
                  <input required name="org" value={form.org} onChange={handleChange} placeholder="Company / Health System Name" style={inp} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inp} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Phone (Optional)</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (___) ___-____" style={inp} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")} />
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Inquiry Type *</label>
                <select required name="inquiry" value={form.inquiry} onChange={handleChange} style={inp} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")}>
                  <option value="">Select an inquiry type...</option>
                  <option>Investment Inquiry</option>
                  <option>Strategic Advisory</option>
                  <option>Partnership Discussion</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#142254", letterSpacing: "0.06em", textTransform: "uppercase" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us a bit about your goals or how we can help..." rows={5} style={{ ...inp, resize: "vertical", minHeight: "120px" }} onFocus={(e) => (e.target.style.borderColor = "#C4973C")} onBlur={(e) => (e.target.style.borderColor = "#DDE2EF")} />
              </div>
              <button type="submit" disabled={status === "sending" || status === "sent"} style={{ width: "100%", background: "#C4973C", color: "#fff", fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px", borderRadius: "4px", border: "none", cursor: "pointer", marginTop: "8px", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget.style.background = "#A8812E"); (e.currentTarget.style as CSSStyleDeclaration & {transform:string}).transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#C4973C"; (e.currentTarget.style as CSSStyleDeclaration & {transform:string}).transform = "none"; }}
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message →"}
              </button>
              {status === "sent" && (
                <div style={{ background: "#f0faf4", border: "1.5px solid #48bb78", borderRadius: "6px", padding: "18px 20px", textAlign: "center", marginTop: "4px" }}>
                  <p style={{ color: "#276749", fontSize: "15px", fontWeight: 600, margin: 0 }}>
                    Thanks for submitting the information, we will reach out to you soon!
                  </p>
                </div>
              )}
              {status === "error" && <p style={{ fontSize: "13px", color: "#e53e3e", textAlign: "center" }}>Something went wrong. Please email info@gccapitalholdings.com directly.</p>}
            </form>
          </ScrollReveal>

          {/* Contact card */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-md sticky" style={{ background: "#142254", border: "1px solid rgba(196,151,60,0.3)", borderTop: "4px solid #C4973C", padding: "36px 32px", top: "100px" }}>
              <div className="font-bold mb-6 pb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px", fontWeight: 800, color: "#C4973C", borderBottom: "1px solid rgba(196,151,60,0.2)" }}>
                G&amp;C Capital Holdings LLC
              </div>
              {[
                { icon: "✉", label: "Email", text: "info@gccapitalholdings.com", href: "mailto:info@gccapitalholdings.com" },
                { icon: "☎", label: "Phone", text: "+1 (716) 347-4850", href: "tel:+17163474850" },
                { icon: "◉", label: "Office", text: "5900 Balcones Dr, Suite 100\nAustin, Texas 78731", href: "https://maps.google.com/?q=5900+Balcones+Dr,+Suite+100,+Austin,+TX+78731" },
                { icon: "🔗", label: "LinkedIn", text: "G&C Capital Holdings LLC", href: "#" },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-3 mb-5">
                  <span style={{ color: "#C4973C", fontSize: "16px", marginTop: "2px", flexShrink: 0 }}>{d.icon}</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#9AAAC8", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginBottom: "3px" }}>{d.label}</div>
                    <a href={d.href} style={{ fontSize: "14px", color: "#fff", lineHeight: 1.55, whiteSpace: "pre-line" }}>{d.text}</a>
                  </div>
                </div>
              ))}
              <div className="pt-6" style={{ borderTop: "1px solid rgba(196,151,60,0.2)", marginTop: "8px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "15px", fontStyle: "italic", color: "#C4973C", lineHeight: 1.55 }}>
                  &ldquo;We respond to all serious inquiries within 48 hours.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
