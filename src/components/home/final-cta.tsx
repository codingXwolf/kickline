"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink, Container } from "@/components/ui";

type FinalCtaProps = {
  // Secondary action; pass `false` to render a single primary CTA.
  secondary?: { label: string; href: string } | false;
};

export function FinalCta({
  secondary = { label: "Pricing", href: "/pricing" },
}: FinalCtaProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            glowRef.current,
            headlineRef.current,
            copyRef.current,
            actionsRef.current,
          ],
          { autoAlpha: 1, clearProps: "transform" },
        );
        return;
      }

      // Reveal the content as the section scrolls into view.
      gsap.set([headlineRef.current, copyRef.current, actionsRef.current], {
        autoAlpha: 0,
        y: 28,
      });
      gsap.set(glowRef.current, {
        autoAlpha: 0,
        scale: 0.85,
        transformOrigin: "center center",
      });

      gsap
        .timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        })
        .to(glowRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.8")
        .to(copyRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.5")
        .to(actionsRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");

      // Parallax drift on the full-bleed closing image.
      gsap.set(imageRef.current, { scale: 1.2 });
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background">
      <div className="relative overflow-hidden">
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.16),_transparent_60%)]"
        />
        <Container className="relative py-24 text-center">
          <h2
            ref={headlineRef}
            className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Stop practicing blind
          </h2>
          <p
            ref={copyRef}
            className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-neutral-light"
          >
            Start your free trial and join drummers getting measurably better
            every week.
          </p>
          <div
            ref={actionsRef}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink href="/about#waitlist">Start</ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Container>
      </div>

      {/* Full-bleed closing image */}
      <div
        ref={imageWrapRef}
        className="relative aspect-[16/9] w-full overflow-hidden"
      >
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/drumsticksontopofsnare.jpg"
            alt="Drumsticks resting on a snare drum"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
