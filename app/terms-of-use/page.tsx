import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Terms of Use | G&C Capital Holdings" };

export default function TermsOfUse() {
  return (
    <div style={{ background: "#F2F4F8", minHeight: "100vh" }}>
      <header className="py-6 px-6" style={{ background: "#0B1D51" }}>
        <div className="max-w-[1280px] mx-auto">
          <Link href="/">
            <Image src="/logos/gc-diamond-dark-only.svg" alt="G&C Capital Holdings" width={160} height={44} className="h-10 w-auto" />
          </Link>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#0B1D51", fontFamily: "var(--font-playfair), Georgia, serif" }}>Terms of Use</h1>
        <p className="text-sm mb-6" style={{ color: "#6B7A99" }}>Last updated: January 1, 2026</p>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "#0D1A3A" }}>
          <p>By accessing this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Use of Site</h2>
          <p>This website is provided for informational purposes only. The content is not intended to be a solicitation or offering of any investment product or service.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of G&amp;C Capital Holdings LLC and is protected by applicable intellectual property laws.</p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Limitation of Liability</h2>
          <p>G&amp;C Capital Holdings LLC shall not be liable for any damages arising from the use of or inability to use this website or its content.</p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-sm font-semibold" style={{ color: "#C4973C" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
