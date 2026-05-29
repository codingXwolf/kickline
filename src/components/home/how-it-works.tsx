"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    image: "/drum-app-3.jpg",
    alt: "The Kickline progress dashboard tracking improvement",
  },
];

// The rail spans from the first column's center to the last column's center.
const RAIL_INSET = 100 / steps.length / 2; // % from each edge to a column center
const RAIL_SPAN = 100 - RAIL_INSET * 2; // % the fill travels across

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_MOTION_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduced = usePrefersReducedMotion();
  const stepsRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) {
      if (fillRef.current) fillRef.current.style.width = `${RAIL_SPAN}%`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: stepsRef.current,
      start: "top 70%",
      end: "bottom 75%",
      onUpdate: (self) => {
        const p = self.progress;
        if (fillRef.current) fillRef.current.style.width = `${p * RAIL_SPAN}%`;
        const idx = Math.min(
          steps.length - 1,
          Math.floor(p * (steps.length - 1) + 1e-9),
        );
        setActiveStep((prev) => (prev === idx ? prev : idx));
      },
    });

    return () => trigger.kill();
  }, [reduced]);

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

        <div ref={stepsRef} className="mt-16">
          {/* Progress rail — fills 1 → 2 → 3 as the section scrolls past */}
          <div aria-hidden className="relative mb-10 hidden h-10 md:block">
            <div
              className="absolute top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-border"
              style={{ left: `${RAIL_INSET}%`, right: `${RAIL_INSET}%` }}
            />
            <div
              ref={fillRef}
              className="absolute top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-dodger shadow-[0_0_12px_rgb(59_130_246_/_0.6)] transition-[width] duration-150 ease-out"
              style={{ left: `${RAIL_INSET}%`, width: 0 }}
            />
            {steps.map((step, index) => {
              const isOn = reduced || index <= activeStep;
              return (
                <span
                  key={step.number}
                  className={`absolute top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                    isOn
                      ? "border-dodger bg-dodger text-white shadow-[0_0_16px_rgb(59_130_246_/_0.55)]"
                      : "border-border bg-background text-neutral-light"
                  }`}
                  style={{
                    left: `${RAIL_INSET + (index * RAIL_SPAN) / (steps.length - 1)}%`,
                  }}
                >
                  {step.number}
                </span>
              );
            })}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const isActive = reduced || index === activeStep;
              return (
                <article key={step.number} className="text-center">
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? "border-dodger/70 shadow-[0_28px_80px_-24px_rgb(59_130_246_/_0.65)]"
                        : "border-border"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-0 top-0 z-10 h-full w-1 transition-colors duration-500 ${
                        isActive ? "bg-dodger" : "bg-transparent"
                      }`}
                    />
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className={`object-cover transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <p
                    className={`mt-6 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                      isActive ? "text-dodger-light" : "text-neutral-light/60"
                    }`}
                  >
                    Step {step.number}
                  </p>
                  <h3
                    className={`mt-2 text-balance text-xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-dodger-light" : "text-white"
                    }`}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className={`mx-auto mt-2 max-w-xs text-base leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-neutral-light" : "text-neutral-light/60"
                    }`}
                  >
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>
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
