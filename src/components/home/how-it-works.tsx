import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

type Step = {
  number: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
};

const steps: Step[] = [
  {
    number: "01",
    heading: "Choose your skill level and goals",
    body: "Select from beginner to intermediate paths tailored to what you want to master.",
    image: "/kickline-drum-app.jpg",
    alt: "The Kickline app showing skill paths and goals",
  },
  {
    number: "02",
    heading: "Follow guided drills and exercises",
    body: "Work through structured sessions with real-time feedback and clear progression.",
    image: "/drummerapp.jpg",
    alt: "The Kickline app guiding a drill session",
  },
  {
    number: "03",
    heading: "Track your improvement over time",
    body: "Watch metrics climb and celebrate milestones as you build consistency and speed.",
    image: "/Layout/419/drum-app-3.jpg",
    alt: "The Kickline progress dashboard tracking improvement",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Simple</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Get started in three steps
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-light">
            No complicated setup. No guessing. Just open the app, pick your path,
            and start practicing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="text-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-dodger-light">
                Step {step.number}
              </p>
              <h3 className="mt-2 text-balance text-xl font-semibold text-white">
                {step.heading}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-base leading-relaxed text-neutral-light">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-5">
          <ButtonLink href="/about#waitlist">Start</ButtonLink>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-light transition-colors hover:text-dodger-light"
          >
            See pricing
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
