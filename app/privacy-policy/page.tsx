import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Privacy Policy | G&C Capital Holdings" };

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#F2F4F8", minHeight: "100vh" }}>
      <header className="py-6 px-6" style={{ background: "#142254" }}>
        <div className="max-w-[1280px] mx-auto">
          <Link href="/">
            <Image src="/logos/gc-logo-dark.png" alt="G&C Capital Holdings" width={160} height={44} className="h-10 w-auto" />
          </Link>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#142254", fontFamily: "var(--font-playfair), Georgia, serif" }}>Privacy Policy</h1>
        <p className="text-sm mb-6" style={{ color: "#6B7A99" }}>Last updated: January 1, 2026</p>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "#0D1A3A" }}>
          <p>G&amp;C Capital Holdings LLC (&quot;G&amp;C Capital,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you visit our website.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Information We Collect</h2>
          <p>We may collect information you voluntarily provide through our contact form, including your name, title, organization, email address, and phone number. We also collect standard web analytics data.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>How We Use Information</h2>
          <p>We use the information you provide to respond to your inquiries and communicate with you about our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Contact</h2>
          <p>For questions about this policy, contact us at <a href="mailto:info@gccapitalholdings.com" style={{ color: "#C4973C" }}>info@gccapitalholdings.com</a>.</p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-sm font-semibold" style={{ color: "#C4973C" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
