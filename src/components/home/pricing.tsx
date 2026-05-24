import { Container, Eyebrow } from "@/components/ui";
import { PricingCards } from "@/components/pricing-cards";

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Plans</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Three tiers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-light">
            Pick what matches your commitment level.
          </p>
        </div>

        <div className="mt-16">
          <PricingCards />
        </div>
      </Container>
    </section>
  );
}
