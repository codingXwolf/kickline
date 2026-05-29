import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";

type Feature = {
  number: string;
  label: string;
  tagline: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
};

const features: Feature[] = [
  {
    number: "01",
    label: "Structured practice",
    tagline: "Focus",
    heading: "Know exactly what to work on every session",
    body: "Guided drill paths built for timing, speed, coordination, and groove. No more wasting time wondering what to practice.",
    image: "/drums1.jpg",
    alt: "Close-up of a drum kit's toms from above",
  },
  {
    number: "02",
    label: "Track progress",
    tagline: "Measure",
    heading: "See real improvement in speed and consistency",
    body: "Watch your BPM climb, your timing tighten, and your confidence grow. Real metrics. Real results.",
    image: "/drummerapp.jpg",
    alt: "A drummer checking the Kickline app beside the kit",
  },
  {
    number: "03",
    label: "Daily routines",
    tagline: "Consistency",
    heading: "Build the habit that builds the drummer",
    body: "Short, focused sessions that fit your schedule. Stay motivated with streaks, achievements, and a practice plan that evolves with you.",
    image: "/livedrummer.jpg",
    alt: "A drummer performing live on stage",
  },
  {
    number: "04",
    label: "Targeted drills",
    tagline: "Master",
    heading: "Target the techniques that matter most",
    body: "Double bass, rudiments, hand-foot coordination, groove control. Each drill is designed to isolate and strengthen what you need.",
    image: "/kickpedalview.jpg",
    alt: "Close-up of a bass drum pedal",
  },
];

function ArrowLink({ label }: { label: string }) {
  return (
    <Link
      href="/about"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-light transition-colors hover:text-white"
      aria-label={`Learn more about ${label.toLowerCase()}`}
    >
      <span aria-hidden>Demo</span>
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
  );
}

export function Features() {
  return (
    <section id="features" className="py-24">
      <Container>
        {/* Sticky stacking cards: each pins below the header and the next
            scrolls up and overlaps it. Pure CSS — top offset steps down per
            card so a sliver of the one beneath stays visible. */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <article
              key={feature.number}
              style={{
                top: `calc(6rem + ${index * 2}rem)`,
                zIndex: index + 1,
              }}
              className="sticky overflow-hidden rounded-3xl border border-border bg-woodsmoke p-6 shadow-2xl shadow-black/60 md:p-10"
            >
              <div className="flex items-center gap-4 text-sm">
                <span className="font-display font-bold text-dodger">
                  {feature.number}
                </span>
                <span className="text-neutral-light">{feature.label}</span>
              </div>

              <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-dodger-light">
                    {feature.tagline}
                  </p>
                  <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {feature.heading}
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-light">
                    {feature.body}
                  </p>
                  <div className="mt-8 flex items-center gap-5">
                    <ButtonLink href="/about" variant="secondary" size="sm">
                      Learn more
                    </ButtonLink>
                    <ArrowLink label={feature.label} />
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
