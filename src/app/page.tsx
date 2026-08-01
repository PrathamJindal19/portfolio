// Home page — the single route of this portfolio site.
// Composes the full-page layout from smaller section components.
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import CTASection from "@/components/CTASection";

// Thin horizontal rule used to visually separate main content sections
function Divider() {
  return <hr className="border-0 border-t border-line" />;
}

export default function Home() {
  return (
    // Outer flex container: stacks vertically on mobile, side-by-side on lg+
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Fixed-width left panel: avatar, headline, availability badge, client logos */}
      <Sidebar />

      {/* Scrollable right column that holds all main page sections */}
      <main className="min-w-0 flex-1 bg-background">
        {/* Sticky top bar with section anchors and "Book a call" CTA (desktop only) */}
        <Navbar />

        {/* Page content sections stacked vertically with consistent spacing */}
        <div className="flex w-full flex-col gap-14 px-4 py-10 sm:px-7">
          {/* Portfolio image grid */}
          <WorkSection />
          <Divider />
          {/* Booking calendar embed */}
          <CTASection />
        </div>
      </main>
    </div>
  );
}
