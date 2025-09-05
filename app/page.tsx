import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { LogoCloud } from "@/components/logo-cloud";
import { InteractiveDemo } from "@/components/interactive-demo";
import { CodeShowcase } from "@/components/code-showcase";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/team";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <InteractiveDemo />
        <CodeShowcase />
        <FeaturesGrid />
        <Pricing />
        <Testimonials />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
