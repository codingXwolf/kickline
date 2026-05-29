import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { PricingHero } from "@/components/pricing-hero";
import { PricingCards } from "@/components/pricing-cards";
import { PricingComparison } from "@/components/pricing-comparison";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Pricing — Kickline",
  description:
    "Simple, honest pricing for Kickline. Start free, then upgrade to Pro or Elite when you're ready. Every plan includes guided drills and progress tracking.",
};

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no penalties. Cancel your subscription whenever you want and keep your progress data. If you paid yearly, you can request a refund within 30 days.",
  },
  {
    q: "What's the difference between Pro and Elite?",
    a: "Pro gives you advanced drill paths and detailed metrics. Elite adds one-on-one coaching calls, direct feedback on your recordings, and exclusive masterclass content. Elite is for drummers who want personalized guidance.",
  },
  {
    q: "Do I need a credit card for the free plan?",
    a: "No. The free plan requires nothing but an email. You can try all the core features and upgrade later if you want more.",
  },
  {
    q: "Can I switch plans mid-month?",
    a: "Yes. Upgrade or downgrade anytime. If you upgrade, you'll pay the difference. If you downgrade, we'll credit the overage to your next billing cycle.",
  },
  {
    q: "Is there a student discount?",
    a: "We offer 20% off Pro and Elite plans with a valid student email. Contact us to verify and claim your discount.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <PricingHero />

      {/* Plans */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Tiers</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Three tiers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-light">
              Pick what matches your commitment level.
            </p>
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
          <p className="mt-8 text-center text-sm text-neutral">
            Every plan includes daily drills, the metronome, and progress
            tracking. Prices in USD.
          </p>
        </Container>
      </section>

      {/* Compare — what's included at each tier */}
      <section id="compare" className="scroll-mt-20 border-t border-border py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Compare</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              What&apos;s included
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-light">
              See exactly what you get at each level.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <PricingComparison />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-border py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-light">
              Everything you need to know about Kickline plans.
            </p>
          </div>

          <dl className="mx-auto mt-12 max-w-3xl divide-y divide-border border-t border-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="text-lg font-semibold text-white">{faq.q}</dt>
                <dd className="mt-2 text-base leading-relaxed text-neutral-light">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-woodsmoke/40 px-6 py-8 text-center">
            <h3 className="text-xl font-semibold text-white">
              Still have questions?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-neutral-light">
              Reach out and we&apos;ll help you find the plan that fits your
              practice.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink href="/about#waitlist" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta secondary={false} />
    </>
  );
}
