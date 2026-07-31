"use client";

// CTASection — the booking section at the bottom of the page.
// Initialises the Cal.com embed with custom dark-mode branding and renders
// a month-view calendar so visitors can book a call directly from the portfolio.
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { profile } from "@/lib/content";

export default function CTASection() {
  useEffect(() => {
    // Asynchronously load the Cal.com API for the configured namespace,
    // then apply UI customisations (theme, brand colour, layout).
    (async () => {
      const cal = await getCalApi({ namespace: profile.calNamespace });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          // Brand colour for light theme (unused here, but kept for future-proofing)
          light: { "cal-brand": "#0d0d0d" },
          // Brand colour for dark theme — near-white to match the portfolio palette
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false, // Show the event type title & description
        layout: "month_view",        // Default to a monthly calendar grid
      });
    })();
  }, []); // Run once on mount; Cal API only needs to be configured once per page

  return (
    // Section id used by the "Book a call" CTA buttons in Sidebar and Navbar
    <section
      id="contact"
      className="flex scroll-mt-24 flex-col items-center gap-16 py-4"
    >
      {/* ── Heading block ── */}
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="font-serifless text-[32px] leading-[1.15] tracking-[-1.28px]">
          {/* gradient-heading applies a CSS gradient fill defined in globals.css */}
          <span className="gradient-heading block">Let's Talk Design</span>
          <span className="block text-white/55">(Not the usual kind)</span>
        </h2>
        <p className="font-tight text-[15px] leading-[1.5] text-white/65">
          Book a call and see how simple it can get.
        </p>
      </div>

      {/* ── Cal.com embed ── */}
      {/* id="book" is the scroll target for all "Book a call" anchor links */}
      <div id="book" className="w-full max-w-[820px] scroll-mt-28">
        <Cal
          namespace={profile.calNamespace}
          calLink={profile.calLink}
          style={{ width: "100%", height: "auto", overflow: "hidden" }}
          config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
        />
      </div>

      
    </section>
  );
}
