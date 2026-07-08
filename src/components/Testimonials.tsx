import Image from "next/image";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="grid scroll-mt-[140px] grid-cols-1 gap-2 md:grid-cols-3"
    >
      {testimonials.map((t, i) => (
        <article
          key={i}
          className="flex flex-col gap-0.5 overflow-hidden rounded-lg border border-line bg-panel"
        >
          <div className="flex flex-col gap-10 rounded-[4px] border border-line bg-gradient-to-b from-[#1a1a1a] to-[#171717] p-5">
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
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-2.5">
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
            <Image
              src={t.logo.src}
              alt={t.logo.alt}
              width={t.logo.w}
              height={t.logo.h}
              className={`h-[23px] w-auto object-contain ${
                t.logo.blend ? "mix-blend-plus-lighter" : ""
              }`}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
