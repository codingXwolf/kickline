import { Container, Eyebrow } from "@/components/ui";

const stats = [
  { value: "+34 BPM", label: "Average double-bass gain in 8 weeks" },
  { value: "12 min", label: "Median daily session length" },
  { value: "21 days", label: "Average streak before a path is cleared" },
  { value: "92%", label: "Of users hit their first tempo target" },
];

export function Results() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <Eyebrow>Progress you can measure</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Real numbers, not a vague sense you&apos;re getting better.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-light">
              Kickline logs every tempo, every session, every streak. Improvement
              stops being a feeling and starts being a chart you can point at.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-8">
                <dt className="font-display text-4xl font-bold text-dodger">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-neutral-light">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
