import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
    alternates: { canonical: "/real-estate" },
};

export default function Page() {
    return <HomePage initial="#real_estate" />;
}