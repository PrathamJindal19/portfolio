// Testimonials — a 3-column card grid (1-col on mobile) of client reviews.
// Each card shows a quote block, client avatar, name, and company logo.
import Image from "next/image";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    // Section id enables in-page anchor navigation; scroll-mt accounts for the sticky Navbar
    <section
      id="testimonials"
      className="grid scroll-mt-[140px] grid-cols-1 gap-2 md:grid-cols-3"
    >
      {testimonials.map((t, i) => (
        // Each testimonial is an <article> — semantically a self-contained piece of content
        <article
          key={i}
          className="flex flex-col gap-0.5 overflow-hidden rounded-lg border border-line bg-panel"
        >
          {/* ── Quote block ── decorative quote icon + review text ── */}
          <div className="flex flex-col gap-10 rounded-[4px] border border-line bg-gradient-to-b from-[#1a1a1a] to-[#171717] p-5">
            {/* Rotated 180° so the opening curl faces the text below it */}
            <Image
              src="/assets/quote.svg"
              alt=""
              width={38}
              height={33}
              className="rotate-180"
            />
            <p className="text-[16px] leading-[1.5] tracking-[-0.32px] text-white/60">
              {t.quote}
            </p>
          </div>

          {/* ── Attribution row ── client avatar + name on the left, logo on the right ── */}
          <div className="flex items-center justify-between p-5">
            {/* Avatar + name */}
            <div className="flex items-center gap-2.5">
              {/* 32×32 avatar, cropped to fill the rounded container */}
              <span className="relative size-8 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={t.avatar}
                  alt={t.client}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
              <span className="text-[15px] font-medium tracking-[-0.15px] text-white/65">
                {t.client}
              </span>
            </div>

            {/* Company logo — height fixed at 23 px; width scales automatically.
                Optional flags from content.ts:
                  blend: true  → mix-blend-plus-lighter for logos on dark cards
                  white: true  → CSS filter to force logo to pure white */}
            <Image
              src={t.logo.src}
              alt={t.logo.alt}
              width={t.logo.w}
              height={t.logo.h}
              className={`h-[23px] w-auto object-contain ${
                t.logo.blend ? "mix-blend-plus-lighter" : ""
              }`}
              style={"white" in t.logo && t.logo.white ? { filter: "brightness(0) invert(1)" } : undefined}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
