import { ButtonLink, Container } from "@/components/ui";

export function FinalCta() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="relative overflow-hidden rounded-xl border border-border px-8 py-20 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.18),_transparent_65%)]" />
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Count it off. Lock it in.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-neutral-light">
            Join the waitlist and be first to start practicing with a system that
            actually moves the numbers.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/about#waitlist">Join the waitlist</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              See pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
