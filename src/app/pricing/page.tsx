import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { PricingCards } from "@/components/pricing-cards";

export const metadata: Metadata = {
  title: "Pricing — Kickline",
  description:
    "Simple, honest pricing for Kickline. Start free, upgrade to Pro for the full drum-coaching system, or save with an annual plan.",
};

const faqs = [
  {
    q: "Do I need a card to start?",
    a: "No. The Free plan is free forever and doesn't ask for payment details. Add a card only when you're ready for the Pro trial.",
  },
  {
    q: "What happens when the trial ends?",
    a: "Your Pro trial runs 14 days. If you don't continue, you drop back to the Free plan — you never lose your progress or streaks.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel in one tap. Monthly stops at the end of the cycle; annual is refundable within the first 30 days.",
  },
  {
    q: "Is this the app or the practice content?",
    a: "Every plan is the full app. The difference is how many training paths, drills, and tracking tools you unlock.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <Container className="py-20 text-center md:py-28">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            One system. Three ways to practice.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-light">
            Start free and feel the difference of a coached routine. Upgrade when
            you want every path, drill, and tempo chart.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <PricingCards />
          <p className="mt-8 text-center text-sm text-neutral">
            All plans include daily routines, the metronome, and progress
            tracking. Prices in USD.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions, answered.
          </h2>
          <dl className="mt-10 divide-y divide-border border-t border-border">
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

      <section className="border-t border-border py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to stop guessing?
          </h2>
          <ButtonLink href="/about#waitlist">Join the waitlist</ButtonLink>
        </Container>
      </section>
    </>
  );
}
