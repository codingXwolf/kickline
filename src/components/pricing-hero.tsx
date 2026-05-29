"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export function PricingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const items = [
        eyebrowRef.current,
        headlineRef.current,
        copyRef.current,
        actionsRef.current,
      ];

      if (prefersReducedMotion) {
        gsap.set(items, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      // Entrance reveal.
      gsap.set(items, { autoAlpha: 0, y: 24 });
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Gentle parallax fade as the hero scrolls away.
      gsap.to(contentRef.current, {
        y: -50,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <Container className="relative py-20 text-center md:py-24">
        <div ref={contentRef}>
          <div ref={eyebrowRef}>
            <Eyebrow>Plans</Eyebrow>
          </div>
          <h1
            ref={headlineRef}
            className="mx-auto mt-4 max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Find your fit
          </h1>
          <p
            ref={copyRef}
            className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-light"
          >
            Every plan includes full access to guided drills and progress
            tracking. Start free, upgrade when ready.
          </p>
          <div
            ref={actionsRef}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink href="/about#waitlist">Start free</ButtonLink>
            <ButtonLink href="#compare" variant="secondary">
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
