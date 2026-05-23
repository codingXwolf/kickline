import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Centered, max-width content wrapper used by every section. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
  );
}

/** Small uppercase label that sits above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dodger-light">
      {children}
    </p>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "md" | "sm";

const buttonVariants: Record<ButtonVariant, string> = {
  // Blue → violet gradient pill (matches the Figma primary button).
  primary:
    "bg-[image:var(--gradient-primary)] text-white transition hover:brightness-110",
  // Pill outline that reads on the dark scheme.
  secondary: "border border-border text-white transition-colors hover:bg-white/5",
  // Text-only link button (no fill, no padding).
  ghost: "text-neutral-light transition-colors hover:text-white",
};

const buttonSizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-base",
  sm: "px-5 py-2 text-sm",
};

const buttonBase =
  "inline-flex items-center justify-center rounded-full font-medium";

/** Link styled as a button. Use for navigation/CTAs (renders next/link). */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  // The ghost (link) variant carries no padding — size only applies to filled/outlined pills.
  const sizeClass = variant === "ghost" ? "text-base" : buttonSizes[size];
  return (
    <Link
      className={`${buttonBase} ${sizeClass} ${buttonVariants[variant]} ${className}`}
      {...props}
    />
  );
}
