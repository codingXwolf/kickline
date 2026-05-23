import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "About — Kickline",
  description:
    "Why Kickline exists: structured, measurable drum practice for drummers who want real progress instead of random reps. Join the waitlist.",
};

const principles = [
  {
    title: "Structure beats willpower",
    body: "Most practice fails because there's no plan. We hand you the next rep so showing up is the only decision you make.",
  },
  {
    title: "If it isn't measured, it didn't happen",
    body: "Tempo, streaks, milestones — we log everything so progress is provable, not a hopeful feeling.",
  },
  {
    title: "Small sessions, compounded",
    body: "Twelve focused minutes a day beats a chaotic two-hour session once a week. The system is built for consistency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Our story</Eyebrow>
            <h1 className="mt-4 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              We built the practice coach we wished we&apos;d had.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-light">
              Kickline started with a frustration every drummer knows: sitting
              behind the kit with an hour to practice and no idea what to work on.
              You noodle, you repeat what you&apos;re already good at, and the
              hard skills stay hard.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-light">
              So we turned practice into a system — guided daily sessions, skill
              paths, and targeted drills with tempo targets you can actually beat.
              The result is simple: you stop guessing, you start improving, and
              you have the numbers to prove it.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-20">
        <Container>
          <Eyebrow>What we believe</Eyebrow>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-border p-8"
              >
                <h2 className="text-lg font-semibold text-white">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-light">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="waitlist" className="scroll-mt-20 py-20">
        <Container className="max-w-2xl text-center">
          <Eyebrow>Join the waitlist</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Be first behind the kit.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-neutral-light">
            Kickline is in development. Drop your email and we&apos;ll let you know
            the moment early access opens — no spam, just the count-in.
          </p>
          <div className="mt-10 text-left">
            <WaitlistForm />
          </div>
        </Container>
      </section>
    </>
  );
}
