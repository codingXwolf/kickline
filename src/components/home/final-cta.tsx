import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";

export function FinalCta() {
  return (
    <section className="bg-background">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <Container className="relative py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Stop practicing blind
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-neutral-light">
            Start your free trial and join drummers getting measurably better
            every week.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about#waitlist">Start</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              Pricing
            </ButtonLink>
          </div>
        </Container>
      </div>

      {/* Full-bleed closing image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/drumsticksontopofsnare.jpg"
          alt="Drumsticks resting on a snare drum"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
