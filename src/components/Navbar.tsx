"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const [active, setActive] = useState("#work");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 hidden border-b border-line bg-background/80 backdrop-blur-md lg:block">
      <nav className="flex h-[88px] items-center justify-between pl-4 pr-7">
        <div className="flex items-center">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-3"
              >
                <span
                  className={`text-[15px] font-medium leading-[1.5] transition-colors ${
                    isActive ? "text-white" : "text-grey-59 hover:text-white/80"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && <span className="size-[3px] bg-white" />}
              </a>
            );
          })}
        </div>

        <a
          href="#book"
          className="flex items-center gap-2.5 rounded-lg border border-light-90 bg-light-98 px-4 py-2.5 transition-transform hover:-translate-y-0.5"
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
