import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrainingPaths } from "@/components/home/training-paths";
import { Results } from "@/components/home/results";
import { Testimonials } from "@/components/home/testimonials";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TrainingPaths />
      <Results />
      <Testimonials />
      <PricingPreview />
      <FinalCta />
    </>
  );
}
