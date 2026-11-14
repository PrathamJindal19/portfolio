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

// Must match the FINAL domain exactly (no redirect), including www.
const siteUrl = "https://www.pratham.me";

const title = "Pratham — Designing Websites for SaaS & AI Startups";
const description =
    "Helping SaaS and AI startups turn complex products into websites people understand and remember.";

// New filename = fresh fetch (bypasses WhatsApp / CDN cache of the old file)
const ogImage = "/og-image-v2.jpg"; // 1200x630 JPG, under 300 KB

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: "/" },

    openGraph: {
        title,
        description,
        url: siteUrl,
        siteName: "Pratham",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                type: "image/jpeg",
                alt: title,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
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