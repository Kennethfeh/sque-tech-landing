import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
