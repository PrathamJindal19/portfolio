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

// Must be your real production URL so relative image paths resolve to absolute URLs
const siteUrl = "https://pratham.me";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Pratham — Designing Websites for SaaS & AI Startups",
    description:
        "Helping SaaS and AI startups turn complex products into websites people understand and remember.",

    // Open Graph: used by WhatsApp, LinkedIn, Facebook, Slack, iMessage, etc.
    openGraph: {
        title: "Pratham — Designing Websites for SaaS & AI Startups",
        description:
            "Helping SaaS and AI startups turn complex products into websites people understand and remember.",
        url: siteUrl,
        siteName: "Pratham",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/preview.png", // resolved via metadataBase
                width: 1200,
                height: 630,
                alt: "Pratham — Designing Websites for SaaS & AI Startups",
            },
        ],
    },

    // Twitter / X large image card
    twitter: {
        card: "summary_large_image",
        title: "Pratham — Designing Websites for SaaS & AI Startups",
        description:
            "Helping SaaS and AI startups turn complex products into websites people understand and remember.",
        images: ["/preview.png"],
    },
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