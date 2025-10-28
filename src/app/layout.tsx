import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James A. King - Peak Performance Coach & Keynote Speaker",
  description: "Shift your perception of possible. Elite performance coaching for special operations, tier-one funds, Premier League athletes, and Fortune 500 executives.",
  keywords: "performance coach, keynote speaker, elite performance, peak performance, special operations, executive coaching",
  authors: [{ name: "James A. King" }],
  openGraph: {
    title: "James A. King - Peak Performance Coach",
    description: "Shift your perception of possible. Elite performance coaching and keynote speaking.",
    type: "website",
  },
  other: {
    "image-src": "self",
    "img-src": "self data: https:",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preload critical hero images */}
        <link rel="preload" as="image" href="/images/A1 (Home).jpg" />
        <link rel="preload" as="image" href="/images/B49.jpg" />
        <link rel="preload" as="image" href="/images/A4 .jpg" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Resource hints for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
