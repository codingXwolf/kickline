"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

type Drill = {
  heading: string;
  body: string;
  image: string;
  alt: string;
};

const drills: Drill[] = [
  {
    heading: "Double bass control",
    body: "Build speed and independence with progressive pedal drills that strengthen your foundation.",
    image: "/kickpedalview.jpg",
    alt: "Close-up of a bass drum pedal",
  },
  {
    heading: "Hand-foot coordination",
    body: "Develop tight synchronization between hands and feet through targeted coordination exercises.",
    image: "/drumsetsilver.jpg",
    alt: "A full drum kit ready for a coordination workout",
  },
  {
    heading: "Rudiment mastery",
    body: "Lock in the fundamentals with structured rudiment training that translates to every style.",
    image: "/drumsticksontopofsnare.jpg",
    alt: "Drumsticks resting on a snare drum",
  },
];

export function Drills() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  // On touch / mobile (no hover), highlight the drill that scrolls into view.
  // Desktop uses hover instead, so the scroll-spy is disabled there.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      if (desktop.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(Number(entry.target.getAttribute("data-index")));
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      tabRefs.current.filter(Boolean).forEach((el) => observer?.observe(el));
    };

    setup();
    desktop.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      desktop.removeEventListener("change", setup);
    };
  }, []);

  return (
    <section className="py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Media pane */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
          {drills.map((drill, index) => (
            <Image
              key={drill.heading}
              src={drill.image}
              alt={drill.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Content + tabs */}
        <div>
          <Eyebrow>Practice</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Drills built for real drummers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-light">
            Every exercise is designed to isolate a specific skill and push you
            forward. No filler. No wasted reps.
          </p>

          <div className="mt-8">
            {drills.map((drill, index) => {
              const isActive = index === active;
              return (
                <button
                  key={drill.heading}
                  ref={(node) => {
                    if (node) tabRefs.current[index] = node;
                  }}
                  data-index={index}
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-pressed={isActive}
                  className={`block w-full border-t border-l-2 py-5 pl-5 text-left transition-colors ${
                    isActive ? "border-l-dodger" : "border-l-transparent"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold transition-colors ${
                      isActive ? "text-white" : "text-neutral-light"
                    }`}
                  >
                    {drill.heading}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-light">
                    {drill.body}
                  </p>
                </button>
              );
            })}
          </div>

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
      </Container>
    </section>
  );
}
