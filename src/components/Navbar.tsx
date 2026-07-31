"use client";

// Navbar — sticky top navigation bar, desktop-only (hidden on mobile).
// Highlights the active section link using an IntersectionObserver and
// provides a "Book a call" CTA that jumps to the embedded calendar.
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  // Tracks the href of whichever section is currently in view (default: "#work")
  const [active, setActive] = useState("#work");

  useEffect(() => {
    // Build an array of the actual DOM section elements from the nav href list
    const ids = navItems.map((n) => n.href.slice(1)); // strip leading "#"
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // IntersectionObserver fires whenever a section enters or leaves the viewport.
    // rootMargin creates a "detection band" in the middle of the screen so the
    // active link switches roughly when the section headline crosses centre.
    const observer = new IntersectionObserver(
      (entries) => {
        // Among all currently-intersecting entries, pick the one with the
        // highest ratio (most visible) as the "active" section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));

    // Disconnect the observer when the component unmounts to avoid memory leaks
    return () => observer.disconnect();
  }, []); // Empty dep array → set up once after the first render

  return (
    // Sticky header: visible only on lg+ screens, with a frosted-glass backdrop
    <header className="sticky top-0 z-30 hidden border-b border-line bg-background/80 backdrop-blur-md lg:block">
      <nav className="flex h-[88px] items-center justify-between pl-4 pr-7">

        {/* ── Section anchor links ── */}
        <div className="flex items-center">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-3"
              >
                {/* Label text — white when active, grey otherwise */}
                <span
                  className={`text-[15px] font-medium leading-[1.5] transition-colors ${
                    isActive ? "text-white" : "text-grey-59 hover:text-white/80"
                  }`}
                >
                  {item.label}
                </span>
                {/* Small dot indicator shown below the active link */}
                {isActive && <span className="size-[3px] bg-white" />}
              </a>
            );
          })}
        </div>

        {/* ── "Book a call" CTA ── scrolls to the Cal.com embed (#book) ── */}
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
