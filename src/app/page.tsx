"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import RealEstateSection from "@/components/RealEstateSection";
import CTASection from "@/components/CTASection";

function Divider() {
    return <hr className="border-0 border-t border-[#232323]" />;
}

export default function Home() {
    const [active, setActive] = useState("#work");

    const handleNavigate = (href: string) => {
        setActive(href);
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            <Sidebar />

            <main className="min-w-0 flex-1 bg-background">
                <Navbar
                    active={active}
                    onNavigate={handleNavigate}
                />

                <div className="flex w-full flex-col gap-14 p-[24px] lg:p-[30px]">
                    {active === "#work" ? (
                        <WorkSection />
                    ) : (
                        <RealEstateSection />
                    )}

                    <div className="hidden md:block">
                        <Divider />
                    </div>

                    <CTASection />
                </div>
            </main>
        </div>
    );
}