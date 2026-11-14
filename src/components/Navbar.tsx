"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/lib/content";

interface NavbarProps {
    active: string;
    onNavigate: (href: string) => void;
}

export default function Navbar({ active, onNavigate }: NavbarProps) {
    return (
        <header className="w-full sticky top-0 z-30 h-[91px] bg-[#141414] lg:bg-background/80 backdrop-blur-md">
            <div className="lg:hidden absolute top-0 left-0 h-[1px] w-full bg-[#292929] shadow-[0px_1px_0px_0px_#000000]" />

            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#292929] shadow-[0px_1px_0px_0px_#000000]" />

            <nav className="flex h-full items-center justify-center lg:justify-between pl-4 pr-7">
                <div className="flex items-center">

                    {navItems.map((item) => {
                        const isActive = active === item.href;

                        return (
                            <button
                                key={item.href}
                                onClick={() => onNavigate(item.href)}
                                className="flex flex-col items-center justify-center gap-1 px-3"
                            >
                                <span
                                    className={`cursor-pointer text-[15px] font-medium leading-[1.5] transition-colors ${
                                        isActive
                                            ? "text-white"
                                            : "text-grey-59 hover:text-white/80"
                                    }`}
                                >
                                    {item.label}
                                </span>

                                {isActive && (
                                    <span className="size-[3px] bg-white" />
                                )}
                            </button>
                        );
                    })}
                </div>

                <a
                    href="#book"
                    className="hidden lg:flex items-center justify-center gap-2.5 rounded-lg border border-light-90 bg-light-98 px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                >
                    <Image
                        src="/assets/googlemeet.svg"
                        alt=""
                        width={22}
                        height={18}
                        className="h-[18px] w-auto"
                    />
                    <span className="text-[16px] font-medium leading-[1.15] text-black">
                        Book a call
                    </span>
                </a>
            </nav>
        </header>
    );
}