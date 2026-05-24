import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { PricingCards } from "@/components/pricing-cards";
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
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <Container className="relative py-20 text-center md:py-24">
          <Eyebrow>Plans</Eyebrow>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Find your fit
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-light">
            Every plan includes full access to guided drills and progress
            tracking. Start free, upgrade when ready.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about#waitlist">Start free</ButtonLink>
            <ButtonLink href="#faq" variant="secondary">
              Read the FAQ
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="py-20">
        <Container>
          <PricingCards />
          <p className="mt-8 text-center text-sm text-neutral">
            Every plan includes daily drills, the metronome, and progress
            tracking. Prices in USD.
          </p>
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
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
