import Image from "next/image";
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

          {/* Demo video placeholder */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border lg:col-span-2">
            <Image
              src="/drumsliveshow.jpg"
              alt="A Kickline practice demo"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-white shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="size-6 translate-x-0.5 text-dodger"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
