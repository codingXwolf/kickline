"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import drummerIllustration from "../../public/illustrations/Drummerillustration.svg";

/** The "THANK YOU" drummer illustration with a slow, looping float. */
export function FloatingDrummer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    const tween = gsap.to(ref.current, {
      y: -16,
      duration: 3.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_65%)]" />
      <Image
        src={drummerIllustration}
        alt="An illustrated drummer at a kit"
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
