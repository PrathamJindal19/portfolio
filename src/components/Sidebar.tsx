// Sidebar — persistent left panel on desktop, full-width top section on mobile.
// Shows the designer's avatar, greeting, availability badge, headline, tagline,
// and a grid of client logos.
import Image from "next/image";
import { profile, clientLogos } from "@/lib/content";

export default function Sidebar() {
    return (
        // On large screens: fixed 400 px wide, sticky to the viewport top, full height.
        // On mobile: full width, stacks above the main content with a bottom border.
        <aside className="relative flex w-full shrink-0 flex-col bg-panel lg:sticky lg:top-0 lg:h-screen lg:w-[400px]">
            <div className="hidden md:block absolute bottom-0 left-0 h-[1px] w-full bg-[#292929] shadow-[0px_1px_0px_0px_#000000]" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-[#292929] shadow-[0px_1px_0px_0px_#000000]" />

            {/* ── Profile row ── avatar + greeting + Twitter link ── */}
            <div className="relative flex items-center justify-between p-7 h-[91px]">
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#292929] shadow-[0px_1px_0px_0px_#000000]" />

                <div className="flex items-center gap-2.5">
                    {/* Avatar image — 32×32 px, cropped to fill the rounded container */}
                    <span className="relative size-8 shrink-0 overflow-hidden rounded-md">
                        <Image
                            src={profile.avatar}
                            alt={profile.name}
                            fill
                            sizes="32px"
                            className="object-cover"
                        />
                    </span>
                    <span className="text-[15px] font-medium tracking-[-0.15px] text-[#f2f2f2]">
                    {profile.greeting}
                    </span>
                </div>

                {/* Twitter / X icon link — opens in new tab */}
                <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="flex items-center rounded-md border border-line-soft bg-[#1a1a1a] p-[7px] transition-colors hover:bg-[#242424]"
                >
                    <Image src="/assets/twitter.svg" alt="" width={18} height={18} />
                </a>
            </div>

            {/* ── Hero block ── availability badge, headline, tagline, mobile CTA ── */}
            <div className="flex flex-col gap-4 px-7 pt-12">
                {/* Pulsing green dot + handwritten "spots available" copy */}
                <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_2px_rgba(74,222,128,0.5)]" />
                    <span className="font-hand text-[18px] leading-tight text-white/80">
            {profile.spots}
          </span>
                </div>

                {/* H1 headline — rendered as span segments so each part can be dimmed independently */}
                <h1 className="max-w-[342px] font-serifless text-[32px] leading-[1.15] tracking-[-1.28px]">
                    {profile.headline}
                </h1>

                {/* Short one-liner tagline beneath the headline */}
                <p className="max-w-[342px] text-[14px] leading-[1.5] tracking-[-0.14px] text-white/45">
                    {profile.tagline}
                </p>

                {/* "Book a call" CTA — same as Navbar, visible on all screen sizes */}
                <a
                    href="#book"
                    className="flex items-center gap-2.5 self-start rounded-lg border border-light-90 bg-light-98 px-4 py-2.5 transition-transform hover:-translate-y-0.5"
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
            </div>

            {/* Flexible spacer — pushes the client logos block to the bottom on desktop */}
            <div className="hidden flex-1 lg:block" />

            {/* ── Clients block ── label + 2-column logo grid ── */}
            <div className="flex flex-col gap-6 px-7 pb-10 pt-12 lg:pt-0">
                <p className="text-[16px] leading-none tracking-[-0.16px] text-white/45">
                    Clients who have trusted us
                </p>

                {/* 2-column grid of client logos, each preserving its natural aspect ratio */}
                <div className="grid grid-cols-2 max-w-[326px] gap-[24px]">
                    {clientLogos.map((logo, i) => (
                        <div key={i} className="flex items-center shrink-0 ">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.w}
                                height={logo.h}
                                className="h-auto w-auto max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
