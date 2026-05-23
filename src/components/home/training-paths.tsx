import { Container, Eyebrow } from "@/components/ui";

const paths = [
  {
    name: "Double Bass Speed",
    focus: "Foot speed & endurance",
    drills: ["Singles ladder", "Burst control", "Sustained 16ths"],
    target: "120 → 180 BPM",
  },
  {
    name: "Rudiment Foundations",
    focus: "Hand technique",
    drills: ["Single stroke roll", "Double strokes", "Paradiddles"],
    target: "Clean at 140 BPM",
  },
  {
    name: "Hand-Foot Coordination",
    focus: "Independence",
    drills: ["Linear fills", "Ostinato layering", "Splitting subdivisions"],
    target: "4-limb 16ths",
  },
  {
    name: "Groove & Pocket",
    focus: "Timing & feel",
    drills: ["Click lock-in", "Ghost notes", "Dynamic control"],
    target: "±5ms to the grid",
  },
];

export function TrainingPaths() {
  return (
    <section id="paths" className="border-t border-border py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Sample training paths</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pick a skill. Follow the drills. Beat your tempo.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {paths.map((path) => (
            <div
              key={path.name}
              className="flex flex-col rounded-xl border border-border bg-foreground/40 p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {path.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-light">
                    {path.focus}
                  </p>
                </div>
                <span className="shrink-0 rounded-md border border-dodger-darker bg-dodger-darkest/40 px-3 py-1 text-xs font-semibold text-dodger-light">
                  {path.target}
                </span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {path.drills.map((drill) => (
                  <li
                    key={drill}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-neutral-light"
                  >
                    {drill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
