"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Initial vertical offset in px. */
  y?: number;
  /** When set, animate direct children in sequence instead of the block as one. */
  stagger?: number;
  /** ScrollTrigger start position. */
  start?: string;
};

/**
 * Fades + slides its content in when it scrolls into view. Pass `stagger` to
 * animate direct children one after another (e.g. a grid of cards).
 */
export function Reveal({
  children,
  className,
  y = 24,
  stagger,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const targets =
        stagger != null ? gsap.utils.toArray<HTMLElement>(el.children) : [el];

      if (prefersReducedMotion) {
        gsap.set(targets, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      gsap.set(targets, { autoAlpha: 0, y });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
