import { Container, Eyebrow } from "@/components/ui";

const testimonials = [
  {
    quote:
      "I went from flailing at random YouTube lessons to a 12-minute routine I actually finish. My double bass finally caught up to my hands.",
    name: "Marisol Reyes",
    role: "Gigging drummer, 3 yrs playing",
  },
  {
    quote:
      "The tempo tracking is the whole thing for me. Seeing the BPM graph creep up week over week is stupidly motivating.",
    name: "Devin Park",
    role: "Hobbyist, intermediate",
  },
  {
    quote:
      "It feels like having a teacher decide what I work on. I stopped wasting practice time and my pocket got way tighter.",
    name: "Aisha Bello",
    role: "Worship-team drummer",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>What drummers say</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Less guessing. More locking in.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border p-8"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-neutral-lighter">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-sm text-neutral">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
