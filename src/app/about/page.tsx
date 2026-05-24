import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "About — Kickline",
  description:
    "Kickline exists because random practice doesn't work — structure does. Built by drummers, for drummers who want measurable progress.",
};

const linkedInIcon = (
  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
);
const xIcon = (
  <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.9l-5.4-7.06L4.95 22H1.69l8.02-9.17L1 2h7.04l4.88 6.45L18.24 2Zm-1.21 18h1.83L7.05 3.9H5.1L17.03 20Z" />
);

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const team: Member[] = [
  {
    name: "Marcus Reid",
    role: "Founder",
    bio: "Drummer and software engineer obsessed with practice efficiency.",
    image: "/mohamed-jamil-latrach-VD0LgaqFf4U-unsplash.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Product lead",
    bio: "Former session drummer who knows what drummers actually need.",
    image: "/drummergirl.jpg",
  },
  {
    name: "David Okonkwo",
    role: "Curriculum designer",
    bio: "Builds drill paths that actually move the needle on skill.",
    image: "/chris-bulilan-1oJMdG-rrH0-unsplash.jpg",
  },
];

function Social({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-neutral transition-colors hover:text-dodger-light"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
        {icon}
      </svg>
    </Link>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <Container className="relative py-20 text-center md:py-28">
          <Eyebrow>Purpose</Eyebrow>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Built for drummers who want to get better—for real
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-light">
            Kickline exists because random practice doesn&apos;t work. Structure
            does.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#waitlist">Join the waitlist</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              See pricing
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="border-b border-border py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Random practice plateaus. Structure breaks through.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-light">
              Kickline started with a frustration every drummer knows — sitting
              behind the kit with time to practice and no idea what to actually
              work on. You noodle, repeat what you&apos;re already good at, and the
              hard skills stay hard.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-light">
              So we turned practice into a system: guided sessions, skill paths,
              and drills with tempo targets you can beat. Less guessing, more
              measurable progress — and the numbers to prove it.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/carlos-coronado-XJ0-Q40qygw-unsplash.jpg"
              alt="A drummer practicing at home"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-b border-border py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Creators</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              The people behind it
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-light">
              Built by drummers, for drummers.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center sm:text-left">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-dodger-light">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-light">
                  {member.bio}
                </p>
                <div className="mt-4 flex justify-center gap-4 sm:justify-start">
                  <Social href="#" label={`${member.name} on LinkedIn`} icon={linkedInIcon} />
                  <Social href="#" label={`${member.name} on X`} icon={xIcon} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="scroll-mt-20 py-24">
        <Container className="mx-auto max-w-2xl text-center">
          <Eyebrow>Join the waitlist</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Be first behind the kit
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-neutral-light">
            Kickline is in development. Drop your email and we&apos;ll let you know
            the moment early access opens — no spam, just the count-in.
          </p>
          <div className="mx-auto mt-10 max-w-md text-left">
            <WaitlistForm />
          </div>
        </Container>
      </section>
    </>
  );
}
