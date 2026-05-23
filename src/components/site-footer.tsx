import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { NewsletterForm } from "@/components/newsletter-form";
import kicklineLogo from "../../public/kickline-logo-nav.svg";

const linkColumns: {
  heading: string;
  links: { href: string; label: string }[];
}[] = [
  {
    heading: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About" },
      { href: "/about#waitlist", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/pricing", label: "FAQ" },
      { href: "#", label: "Guides" },
      { href: "#", label: "Community" },
      { href: "#", label: "Blog" },
    ],
  },
];

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "X",
    href: "#",
    icon: (
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.9l-5.4-7.06L4.95 22H1.69l8.02-9.17L1 2h7.04l4.88 6.45L18.24 2Zm-1.21 18h1.83L7.05 3.9H5.1L17.03 20Z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c-2.72 0-3.06.01-4.12.06-1.07.05-1.8.22-2.43.46-.66.26-1.22.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.24.63-.41 1.36-.46 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.07.22 1.8.46 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.63.24 1.36.41 2.43.46C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.07-.05 1.8-.22 2.43-.46a4.9 4.9 0 0 0 1.77-1.16c.56-.55.9-1.11 1.16-1.77.24-.63.41-1.36.46-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.8-.46-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.63-.24-1.36-.41-2.43-.46C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.97.05 1.5.21 1.85.35.47.18.8.4 1.15.74.35.35.56.68.74 1.15.14.35.3.88.35 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05.97-.21 1.5-.35 1.85-.18.47-.4.8-.74 1.15-.35.35-.68.56-1.15.74-.35.14-.88.3-1.85.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.05-1.5-.21-1.85-.35a3.1 3.1 0 0 1-1.15-.74 3.1 3.1 0 0 1-.74-1.15c-.14-.35-.3-.88-.35-1.85-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.05-.97.21-1.5.35-1.85.18-.47.4-.8.74-1.15.35-.35.68-.56 1.15-.74.35-.14.88-.3 1.85-.35C9.01 3.81 9.33 3.8 12 3.8Zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68Zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
      />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <path d="M23 12s0-3.2-.41-4.74a2.5 2.5 0 0 0-1.76-1.77C19.29 5.08 12 5.08 12 5.08s-7.29 0-8.83.41A2.5 2.5 0 0 0 1.41 7.26C1 8.8 1 12 1 12s0 3.2.41 4.74a2.5 2.5 0 0 0 1.76 1.77c1.54.41 8.83.41 8.83.41s7.29 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.5v-7l6 3.5-6 3.5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
    ),
  },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookies" },
];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <Container className="pt-12 pb-10">
        <div className="rounded-2xl border border-border bg-woodsmoke p-8 md:p-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            {/* Newsletter */}
            <div className="max-w-md">
              <Link href="/" aria-label="Kickline — home">
                <Image
                  src={kicklineLogo}
                  alt="Kickline"
                  className="h-7 w-auto"
                />
              </Link>
              <p className="mt-6 text-base leading-relaxed text-neutral-light">
                Get weekly tips, new drills, and training updates delivered to
                you.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral">
                You agree to our{" "}
                <Link href="#" className="underline hover:text-neutral-light">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from Kickline.
              </p>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
              {linkColumns.map((column) => (
                <div key={column.heading}>
                  <h3 className="text-sm font-semibold text-white">
                    {column.heading}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-neutral-light transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className="text-sm font-semibold text-white">Follow us</h3>
                <ul className="mt-4 space-y-3">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <Link
                        href={social.href}
                        className="flex items-center gap-2.5 text-sm text-neutral-light transition-colors hover:text-white"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                          className="size-5 shrink-0"
                        >
                          {social.icon}
                        </svg>
                        {social.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="mt-8 flex flex-col gap-3 text-sm text-neutral sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kickline. A fictional brand.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="underline-offset-4 transition-colors hover:text-neutral-light hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
