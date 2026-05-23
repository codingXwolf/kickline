import { Container, Eyebrow } from "@/components/ui";

const steps = [
  {
    step: "01",
    title: "Set your starting point",
    body: "Tell Kickline your level and goals. It builds a path around the skills you want to grow — timing, speed, groove, or all of it.",
  },
  {
    step: "02",
    title: "Practice your daily session",
    body: "Open the app and follow a focused routine: warm-up, targeted drills, and a tempo challenge. No deciding, no drifting.",
  },
  {
    step: "03",
    title: "Watch the numbers move",
    body: "Every rep is logged. Your BPM targets rise, streaks build, and milestones unlock as the system tracks real improvement.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Three steps to a practice habit that sticks.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-xl border border-border p-8"
            >
              <span className="font-display text-5xl font-bold text-dodger">
                {item.step}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-light">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
