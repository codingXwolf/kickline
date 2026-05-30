"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui";

type NavLink = { href: string; label: string };

/**
 * Mobile-only header navigation: a hamburger button that toggles an
 * opaque dropdown panel with the nav links and CTAs. Hidden at md+,
 * where the desktop nav takes over. Each link/CTA closes the menu on tap.
 */
export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // While open: close on Escape or an outside click, and lock body scroll.
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-white transition-colors hover:bg-white/5"
      >
        <span aria-hidden className="relative block h-4 w-5">
          <span
            className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0.5"
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full origin-top border-b border-border bg-woodsmoke shadow-2xl shadow-black/50 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 text-lg font-medium text-neutral-light transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 py-6">
            <ButtonLink
              href="/about#waitlist"
              variant="secondary"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Sign in
            </ButtonLink>
            <ButtonLink
              href="/about#waitlist"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Get started
            </ButtonLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
