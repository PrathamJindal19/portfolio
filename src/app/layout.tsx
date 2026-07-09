import type { Metadata } from "next";
import { Inter, Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import ImageGuard from "@/components/ImageGuard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pratham — Product & Web Designer",
  description:
    "Helping SaaS and AI startups turn complex products into websites people understand and remember.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ImageGuard />
        {children}
      </body>
    </html>
  );
}
