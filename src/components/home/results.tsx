import { Container, Eyebrow } from "@/components/ui";

const stats = [
  { value: "47%", label: "Average speed increase" },
  { value: "89%", label: "Timing accuracy improvement" },
  { value: "94%", label: "Completion rate on drills" },
];

export function Results() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Results</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            The numbers speak
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-light">
            Users who stick with structured practice see measurable gains in
            weeks, not months.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Stats */}
          <dl className="space-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-6xl font-bold tracking-tight text-dodger md:text-7xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-lg font-medium text-neutral-light">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* Demo video */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border lg:col-span-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/drumsliveshow.jpg"
              className="size-full object-cover"
            >
              <source src="/drum-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
