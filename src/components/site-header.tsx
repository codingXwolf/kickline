import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { MobileNav } from "@/components/mobile-nav";
import kicklineLogo from "../../public/kickline-logo-nav.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Kickline — home">
      <Image src={kicklineLogo} alt="Kickline" priority className="h-8 w-auto" />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-neutral-light transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Wrapper handles responsive hiding — ButtonLink's base `inline-flex`
              would otherwise override a `hidden` utility placed on it directly. */}
          <span className="hidden md:inline-flex">
            <ButtonLink href="/about#waitlist" variant="secondary" size="sm">
              Sign in
            </ButtonLink>
          </span>
          <ButtonLink href="/about#waitlist" size="sm">
            Get started
          </ButtonLink>
          <MobileNav links={navLinks} />
        </div>
      </Container>
    </header>
  );
}
