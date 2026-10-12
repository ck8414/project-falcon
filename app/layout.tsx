import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "G&C Capital Holdings | RCM Investment & Advisory",
  description:
    "G&C Capital Holdings is a specialized investment and advisory firm focused on the Revenue Cycle Management ecosystem. We back the companies reshaping healthcare finance.",
  openGraph: {
    title: "G&C Capital Holdings | RCM Investment & Advisory",
    description:
      "Specialized investment and advisory firm focused on the Revenue Cycle Management ecosystem.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"69bff6db53c4cb001dfa45e7"})},
document.head.appendChild(o)}initApollo();`}
        </Script>
      </body>
    </html>
  );
}
