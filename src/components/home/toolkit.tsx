import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

type Card = {
  heading: string;
  body: string;
  image: string;
  alt: string;
};

const cards: Card[] = [
  {
    heading: "Guided sessions",
    body: "Step-by-step practice routines that build timing and control from the ground up.",
    image: "/drummergirl.jpg",
    alt: "A drummer following a guided practice session",
  },
  {
    heading: "Skill paths",
    body: "Master double bass, rudiments, hand-foot coordination, and groove in focused drill sequences.",
    image: "/pearldrumset.jpg",
    alt: "A full drum kit ready for practice",
  },
  {
    heading: "Progress dashboard",
    body: "Watch your BPM, accuracy, and consistency improve with real-time metrics and session history.",
    image: "/kickline-drum-app.jpg",
    alt: "The Kickline progress dashboard on a device",
  },
  {
    heading: "Daily routines",
    body: "Short, purposeful practice sessions that fit your schedule and keep you moving forward.",
    image: "/drumsticksontopofsnare.jpg",
    alt: "Drumsticks resting on a snare drum",
  },
];

export function Toolkit() {
  return (
    <section className="py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28">
          <Eyebrow>Tools</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything you need to improve
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-light">
            Kickline gives you the drills, the tracking, and the structure. No
            fluff. Just what works.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <ButtonLink href="/about#waitlist">Explore</ButtonLink>
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
        </div>

        {/* Scrolling cards */}
        <div className="space-y-12">
          {cards.map((card) => (
            <article key={card.heading} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border transition-colors group-hover:border-dodger/60">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {card.heading}
              </h3>
              <p className="mt-2 max-w-md text-base leading-relaxed text-neutral-light">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
