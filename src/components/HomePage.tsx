"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import RealEstateSection from "@/components/RealEstateSection";
import CTASection from "@/components/CTASection";

function Divider() {
    return <hr className="border-0 border-t border-[#232323]" />;
}

// CHANGE 1: map each tab to its URL
const paths: Record<string, string> = {
    "#work": "/saas-ai",
    "#real_estate": "/real-estate",
};

// CHANGE 2: take the starting tab as a prop
export default function HomePage({ initial = "#work" }: { initial?: string }) {
    const [active, setActive] = useState(initial);

    const handleNavigate = (href: string) => {
        setActive(href);
        // CHANGE 3: update the address bar without reloading
        window.history.pushState(null, "", paths[href]);
    };

    // Keep the tab in sync with the browser back/forward buttons
    useEffect(() => {
        const onPop = () =>
            setActive(
                window.location.pathname === "/real-estate" ? "#real_estate" : "#work"
            );
        window.addEventListener("popstate", onPop);
        return () => window.removeEventListener("popstate", onPop);
    }, []);

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            <Sidebar />

            <main className="min-w-0 flex-1 bg-background">
                <Navbar active={active} onNavigate={handleNavigate} />

                <div className="flex w-full flex-col gap-14 p-[24px] lg:p-[30px]">
                    {active === "#work" ? <WorkSection /> : <RealEstateSection />}

                    <div className="hidden md:block">
                        <Divider />
                    </div>

                    <CTASection />
                </div>
            </main>
        </div>
    );
}