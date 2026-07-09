import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

function Divider() {
  return <hr className="border-0 border-t border-line" />;
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar />

      <main className="min-w-0 flex-1 bg-background">
        <Navbar />
        <div className="flex w-full flex-col gap-14 px-4 py-10 sm:px-7">
          <WorkSection />
          <Divider />
          <Testimonials />
          <Divider />
          <CTASection />
        </div>
      </main>
    </div>
  );
}
