import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
    alternates: { canonical: "/saas-ai" },
};

export default function Page() {
    return <HomePage initial="#work" />;
}