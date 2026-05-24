import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Toolkit } from "@/components/home/toolkit";
import { HowItWorks } from "@/components/home/how-it-works";
import { Drills } from "@/components/home/drills";
import { Results } from "@/components/home/results";
import { Testimonials } from "@/components/home/testimonials";
import { Pricing } from "@/components/home/pricing";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Toolkit />
      <HowItWorks />
      <Drills />
      <Testimonials />
      <Results />
      <Pricing />
      <FinalCta />
    </>
  );
}
