import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "My timing was all over the place until I committed to Kickline's structure. Three months in and I'm playing tighter than ever.",
    name: "Marcus Chen",
    role: "Intermediate drummer",
    avatar: "/drummer1.jpg",
  },
  {
    quote:
      "Finally, a practice app that doesn't waste my time. The drills are specific, the feedback is instant, and I can see my progress.",
    name: "Sarah Mitchell",
    role: "Beginner drummer",
    avatar: "/drummergirl.jpg",
  },
  {
    quote:
      "I stopped guessing what to work on. Kickline tells me exactly what I need, and my double bass has never been faster.",
    name: "James Rodriguez",
    role: "Intermediate drummer",
    avatar: "/drummer2.jpg",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-dodger" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="size-4"
        >
          <path d="M12 2l2.9 6.26L21.5 9l-5 4.6 1.4 6.9L12 17l-5.9 3.5L7.5 13.6l-5-4.6 6.6-.74L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Real drummers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-light">
            Hear from people who actually use Kickline.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-woodsmoke/40 p-8 text-center"
            >
              <Stars />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-neutral-lighter">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex flex-col items-center">
                <div className="relative size-12 overflow-hidden rounded-full border border-border">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-sm font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
