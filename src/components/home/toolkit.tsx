"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    image: "/drum-app-1.jpg",
    alt: "The Kickline app showing a guided practice session",
  },
  {
    heading: "Skill paths",
    body: "Master double bass, rudiments, hand-foot coordination, and groove in focused drill sequences.",
    image: "/drum-app-2.jpg",
    alt: "The Kickline app showing skill-based training paths",
  },
  {
    heading: "Progress dashboard",
    body: "Watch your BPM, accuracy, and consistency improve with real-time metrics and session history.",
    image: "/drum-app-3.jpg",
    alt: "The Kickline progress dashboard with BPM metrics",
  },
  {
    heading: "Daily routines",
    body: "Short, purposeful practice sessions that fit your schedule and keep you moving forward.",
    image: "/drum-app-4.jpg",
    alt: "The Kickline app showing a daily practice routine",
  },
];

export function Toolkit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean);
    if (els.length === 0) return;

    // Highlight the card crossing a thin band at the vertical center of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

        {/* Scrolling cards — the one in view is highlighted */}
        <div className="space-y-12">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={card.heading}
                data-index={index}
                ref={(node) => {
                  if (node) cardRefs.current[index] = node;
                }}
                className="group"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "border-dodger/70 shadow-[0_28px_80px_-24px_rgb(59_130_246_/_0.65)]"
                      : "border-border group-hover:border-dodger/40"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 z-10 h-full w-1 transition-colors duration-500 ${
                      isActive ? "bg-dodger" : "bg-transparent"
                    }`}
                  />
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
                <h3
                  className={`mt-5 text-xl font-semibold transition-colors duration-300 ${
                    isActive ? "text-dodger-light" : "text-white"
                  }`}
                >
                  {card.heading}
                </h3>
                <p
                  className={`mt-2 max-w-md text-base leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-neutral-light" : "text-neutral-light/60"
                  }`}
                >
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
