// Root layout for the Next.js app.
// Applies global fonts, metadata, and wraps all pages with shared providers.
import type { Metadata } from "next";
import { Inter, Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import ImageGuard from "@/components/ImageGuard";

// Inter — primary body / UI font, exposed as --font-inter CSS variable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Inter Tight — condensed variant used for tighter headings, exposed as --font-inter-tight
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

// Caveat — handwritten accent font for the availability badge, exposed as --font-caveat
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

// Page-level SEO metadata consumed by Next.js <head> generation
export const metadata: Metadata = {
  title: "Pratham — Web & Product Designer",
  description:
    "Helping SaaS and AI startups turn complex products into websites people understand and remember.",
};

// RootLayout wraps every page with the font class names and shared components.
// `children` is the page content rendered by Next.js at the current route.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Attach all three font CSS variables + antialiasing to the <html> element
      className={`${inter.variable} ${interTight.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {/* ImageGuard adds document-level listeners to block right-click / drag on images */}
        <ImageGuard />
        {children}
      </body>
    </html>
  );
}
