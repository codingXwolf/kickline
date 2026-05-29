"use client";

import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink, Container } from "@/components/ui";
import floorTom from "../../../public/illustrations/Floor Tom.svg";
import highHat from "../../../public/illustrations/Drum-kit-highhat.svg";
import drumLeft from "../../../public/illustrations/drum-left.png";
import drumRight from "../../../public/illustrations/drum-right.png";

const HERO_COPY =
  "Kickline is your personal practice coach. Structured drills, real progress, measurable results. Stop guessing. Start improving.";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const beatBarsRef = useRef<HTMLSpanElement[]>([]);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const accents = gsap.utils.toArray<HTMLElement>(".hero-drum-accent");
      const hitTargets = gsap.utils.toArray<HTMLElement>(".hero-drum-hit");
      const pulseFields = gsap.utils.toArray<HTMLElement>(".hero-pulse-field");
      const pulseRings = gsap.utils.toArray<HTMLElement>(".hero-pulse-ring");

      if (prefersReducedMotion) {
        gsap.set(
          [
            headlineRef.current,
            copyRef.current,
            actionsRef.current,
            imageWrapRef.current,
            ...accents,
            ...hitTargets,
          ],
          { autoAlpha: 1, clearProps: "transform" },
        );
        gsap.set(pulseRings, { autoAlpha: 0 });
        return;
      }

      gsap.set(actionsRef.current, {
        autoAlpha: 0,
        y: 18,
      });
      gsap.set(wordsRef.current, { autoAlpha: 0, y: 14 });
      gsap.set(headlineRef.current, { autoAlpha: 0, y: 28, scale: 0.92 });
      gsap.set(imageWrapRef.current, { autoAlpha: 0, scale: 1.06, y: 36 });
      gsap.set(accents, {
        autoAlpha: 0,
        scale: 0.82,
      });
      gsap.set(beatBarsRef.current, {
        scaleY: 0.28,
        transformOrigin: "bottom center",
        autoAlpha: 0.35,
      });
      gsap.set(hitTargets, {
        scale: 1,
        transformOrigin: "center center",
      });
      gsap.set(pulseRings, {
        autoAlpha: 0,
        scale: 0.58,
        transformOrigin: "center center",
      });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(headlineRef.current, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(2.4)",
        })
        .to(
          accents,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.07,
          },
          "-=0.45",
        )
        .to(
          wordsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "back.out(2)",
            stagger: 0.05,
          },
          "-=0.3",
        )
        .to(actionsRef.current, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.25")
        .to(
          imageWrapRef.current,
          { autoAlpha: 1, scale: 1, y: 0, duration: 1 },
          "-=0.55",
        );

      gsap.to(accents, {
        y: (index) => (index % 2 === 0 ? -10 : 10),
        rotation: (index) => (index % 2 === 0 ? -2 : 2),
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });

      gsap
        .timeline({ repeat: -1, repeatDelay: 0.7 })
        .to(hitTargets, {
          scale: 1.06,
          duration: 0.12,
          ease: "power2.out",
        })
        .to(hitTargets, {
          scale: 1,
          duration: 0.24,
          ease: "elastic.out(1, 0.45)",
        });

      // Headline keeps a subtle on-beat pulse, like it's locked to a metronome.
      gsap
        .timeline({ repeat: -1, repeatDelay: 0.62, delay: 2.1 })
        .to(headlineRef.current, {
          scale: 1.015,
          duration: 0.12,
          ease: "power2.out",
        })
        .to(headlineRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });

      pulseFields.forEach((field) => {
        const rings = gsap.utils.toArray<HTMLElement>(
          field.querySelectorAll(".hero-pulse-ring"),
        );

        gsap
          .timeline({
            repeat: -1,
            repeatDelay: 0.72,
          })
          .fromTo(
            rings,
            { autoAlpha: 0.5, scale: 0.58 },
            {
              autoAlpha: 0,
              scale: 1.32,
              duration: 0.82,
              ease: "power2.out",
              stagger: 0.08,
            },
          );
      });

      gsap
        .timeline({ repeat: -1, repeatDelay: 0.95 })
        .to(".hero-stick-left", {
          rotation: -24,
          duration: 0.22,
          ease: "power2.in",
        })
        .to(
          ".hero-stick-right",
          {
            rotation: 24,
            duration: 0.22,
            ease: "power2.in",
          },
          "<0.16",
        )
        .to([".hero-stick-left", ".hero-stick-right"], {
          rotation: (index) => (index === 0 ? -34 : 34),
          duration: 0.55,
          ease: "back.out(3)",
        });

      gsap
        .timeline({ repeat: -1 })
        .to(beatBarsRef.current, {
          scaleY: 1,
          autoAlpha: 1,
          duration: 0.16,
          stagger: 0.055,
          ease: "power2.out",
        })
        .to(
          beatBarsRef.current,
          {
            scaleY: 0.28,
            autoAlpha: 0.35,
            duration: 0.24,
            stagger: 0.04,
            ease: "power2.inOut",
          },
          "-=0.18",
        );

      gsap.to(headlineRef.current, {
        backgroundPosition: "0% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 42%",
          scrub: true,
        },
      });

      gsap.to(imageWrapRef.current, {
        y: -48,
        scale: 0.98,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "45% bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-background">
      <Container className="pt-24 pb-16 text-center md:pt-28">
        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="hero-drum-accent pointer-events-none absolute -left-5 top-2 z-20 flex h-10 w-10 items-center justify-center sm:-left-10 sm:h-24 sm:w-24 xl:-left-14"
          >
            <div className="hero-drum-hit relative flex h-10 w-10 items-center justify-center sm:h-24 sm:w-24">
              <span className="hero-pulse-field absolute inset-0 hidden sm:block">
                <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger/60 sm:h-[86px] sm:w-[86px]" />
                <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger-light/50 sm:h-[68px] sm:w-[68px]" />
              </span>
              <Image
                src={drumLeft}
                alt=""
                aria-hidden
                className="relative h-9 w-auto object-contain sm:h-[88px]"
              />
            </div>
          </div>
          <div
            aria-hidden
            className="hero-drum-accent pointer-events-none absolute -right-5 top-2 z-20 flex h-10 w-10 items-center justify-center sm:-right-10 sm:h-24 sm:w-24 xl:-right-14"
          >
            <div className="hero-drum-hit relative flex h-10 w-10 items-center justify-center sm:h-24 sm:w-24">
              <span className="hero-pulse-field absolute inset-0 hidden sm:block">
                <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger/60 sm:h-[86px] sm:w-[86px]" />
                <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger-light/50 sm:h-[68px] sm:w-[68px]" />
              </span>
              <Image
                src={highHat}
                alt=""
                aria-hidden
                className="relative h-9 w-auto object-contain sm:h-[88px]"
              />
            </div>
          </div>
          <div
            aria-hidden
            className="hero-drum-accent pointer-events-none absolute -left-5 top-[13rem] z-20 flex h-10 w-10 items-center justify-center sm:-left-10 sm:top-[15.25rem] sm:h-24 sm:w-24 xl:-left-14"
          >
            <div className="hero-drum-hit relative flex h-10 w-10 items-center justify-center sm:h-24 sm:w-24">
              <span className="hero-pulse-field absolute inset-0 hidden sm:block">
                <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger/60 sm:h-[86px] sm:w-[86px]" />
                <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger-light/50 sm:h-[68px] sm:w-[68px]" />
              </span>
              <Image
                src={floorTom}
                alt=""
                aria-hidden
                className="relative h-8 w-auto object-contain sm:h-[78px]"
              />
            </div>
          </div>
          <div
            aria-hidden
            className="hero-drum-accent pointer-events-none absolute -right-5 top-[13rem] z-20 flex h-10 w-10 items-center justify-center sm:-right-10 sm:top-[15.25rem] sm:h-24 sm:w-24 xl:-right-14"
          >
            <div className="hero-drum-hit relative flex h-10 w-10 items-center justify-center sm:h-24 sm:w-24">
              <div className="relative flex h-10 w-10 -translate-x-2 items-center justify-center sm:h-24 sm:w-24">
                <span className="hero-pulse-field absolute inset-0 hidden sm:block">
                  <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger/60 sm:h-[86px] sm:w-[86px]" />
                  <span className="hero-pulse-ring absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger-light/50 sm:h-[68px] sm:w-[68px]" />
                </span>
                <Image
                  src={drumRight}
                  alt=""
                  aria-hidden
                  className="relative h-9 w-auto object-contain sm:h-[88px]"
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 z-0 block h-20 w-52 -translate-x-1/2"
          >
            <span className="absolute left-1/2 top-11 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger/60 bg-dodger/25 shadow-[0_0_22px_rgb(59_130_246_/_0.55)]" />
            <span className="absolute left-1/2 top-11 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dodger/20" />
            <span className="hero-stick-left absolute left-[30px] top-8 h-2 w-36 origin-[118px_center] -rotate-[34deg] overflow-hidden rounded-full bg-[linear-gradient(90deg,#d9d9da_0%,#ffffff_46%,#9aa4b2_100%)] shadow-[0_0_18px_rgb(59_130_246_/_0.35)]">
              <span className="absolute right-0 top-0 h-full w-7 rounded-full bg-dodger shadow-[0_0_16px_rgb(59_130_246_/_0.7)]" />
              <span className="absolute left-3 top-1/2 h-px w-20 -translate-y-1/2 bg-white/75" />
            </span>
            <span className="hero-stick-right absolute right-[30px] top-8 h-2 w-36 origin-[26px_center] rotate-[34deg] overflow-hidden rounded-full bg-[linear-gradient(90deg,#9aa4b2_0%,#ffffff_54%,#d9d9da_100%)] shadow-[0_0_18px_rgb(59_130_246_/_0.35)]">
              <span className="absolute left-0 top-0 h-full w-7 rounded-full bg-dodger shadow-[0_0_16px_rgb(59_130_246_/_0.7)]" />
              <span className="absolute right-3 top-1/2 h-px w-20 -translate-y-1/2 bg-white/75" />
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="relative z-10 bg-[linear-gradient(90deg,var(--color-accent)_0%,#8b5cf6_38%,#ffffff_52%,#ffffff_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-balance text-5xl font-bold leading-[1.1] tracking-normal text-transparent sm:text-7xl lg:text-[84px]"
          >
            Train like a pro. Practice with purpose.
          </h1>
          <p
            ref={copyRef}
            className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-neutral-light sm:text-xl"
          >
            {HERO_COPY.split(" ").map((word, index) => (
              <Fragment key={index}>
                <span
                  ref={(node) => {
                    if (node) wordsRef.current[index] = node;
                  }}
                  className="inline-block"
                >
                  {word}
                </span>{" "}
              </Fragment>
            ))}
          </p>
          <div
            ref={actionsRef}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink href="/about#waitlist">Start training</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              View pricing
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div
        ref={imageWrapRef}
        className="relative aspect-[16/9] w-full overflow-hidden"
      >
        <Image
          src="/hero-header-fullsize.jpg"
          alt="A drummer practicing with the Kickline app on a stand beside the kit"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 flex h-28 items-end justify-center gap-1.5 bg-gradient-to-t from-background via-background/30 to-transparent pb-7"
        >
          {Array.from({ length: 16 }, (_, index) => (
            <span
              key={index}
              ref={(node) => {
                if (node) beatBarsRef.current[index] = node;
              }}
              className="h-16 w-1.5 rounded-full bg-dodger shadow-[0_0_18px_rgb(59_130_246_/_0.65)] sm:w-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
