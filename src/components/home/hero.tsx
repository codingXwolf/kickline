import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";
import drumLeft from "../../../public/illustrations/drum-left.png";
import drumRight from "../../../public/illustrations/drum-right.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="pt-24 pb-16 text-center md:pt-28">
        <div className="relative mx-auto max-w-3xl">
          {/* Decorative blue drum-kit illustrations flanking the heading */}
          <Image
            src={drumLeft}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-16 top-8 hidden w-28 lg:block xl:-left-24"
          />
          <Image
            src={drumRight}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-16 top-40 hidden w-28 lg:block xl:-right-24"
          />

          <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-7xl lg:text-[84px]">
            Train like a pro. Practice with purpose.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-neutral-light sm:text-xl">
            Kickline is your personal practice coach. Structured drills, real
            progress, measurable results. Stop guessing. Start improving.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about#waitlist">Start training</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              View pricing
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Full-bleed hero image (placeholder — replace with branded asset) */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/hero-drummer-smaller.jpg"
          alt="A drummer practicing with the Kickline app on a stand beside the kit"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
