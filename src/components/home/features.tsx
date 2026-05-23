import { Container, Eyebrow } from "@/components/ui";

const features = [
  {
    title: "Skill-based paths",
    body: "Structured tracks for timing, speed, coordination, and groove. Start where you are; the path adapts as you improve.",
  },
  {
    title: "Targeted drills",
    body: "Double bass speed, rudiments, hand-foot independence, and timing control — each with a clear tempo target to beat.",
  },
  {
    title: "Daily routines",
    body: "A focused session waiting every day, sized to the time you have. Open the app, count off, get to work.",
  },
  {
    title: "Tempo tracking",
    body: "Every drill logs your BPM. Watch your numbers climb over weeks so progress is a fact, not a feeling.",
  },
  {
    title: "Progress that's visible",
    body: "Charts, streaks, and milestones turn scattered practice into a record you can look back on.",
  },
  {
    title: "Built for the kit",
    body: "Big controls, clear metronome, and a layout that survives a glance from behind the drums mid-groove.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Everything in one practice loop</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A system, not a pile of exercises.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-light">
            Kickline replaces random practice with a coached routine that knows
            what you worked on yesterday and what you should hit today.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background p-8">
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-light">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
