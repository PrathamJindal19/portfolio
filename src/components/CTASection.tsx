"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { profile } from "@/lib/content";

export default function CTASection() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: profile.calNamespace });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0d0d0d" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      id="contact"
      className="flex scroll-mt-24 flex-col items-center gap-16 py-4"
    >
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="gradient-heading font-serifless text-[32px] leading-[1.15] tracking-[-1.28px]">
          Let’s Talk Design{" "}
          <span className="text-white/55">(Not the usual kind)</span>
        </h2>
        <p className="font-tight text-[15px] leading-[1.5] text-white/65">
          Book a call and see how simple it can get.
        </p>
      </div>

      <div id="book" className="w-full max-w-[820px] scroll-mt-28">
        <Cal
          namespace={profile.calNamespace}
          calLink={profile.calLink}
          style={{ width: "100%", height: "auto", overflow: "hidden" }}
          config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
        />
      </div>

      <p className="text-center font-tight text-[18px] leading-[1.5] text-white/80">
        or Email us at{" "}
        <a
          href={`mailto:${profile.email}`}
          className="text-white underline decoration-solid underline-offset-2"
        >
          {profile.email}
        </a>
      </p>
    </section>
  );
}
