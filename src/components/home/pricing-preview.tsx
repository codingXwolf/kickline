import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { PricingCards } from "@/components/pricing-cards";

export function PricingPreview() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Simple pricing</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Start free. Upgrade when you&apos;re hooked.
            </h2>
          </div>
          <ButtonLink href="/pricing" variant="ghost" className="px-0">
            Compare plans in full →
          </ButtonLink>
        </div>

        <div className="mt-14">
          <PricingCards />
        </div>
      </Container>
    </section>
  );
}
