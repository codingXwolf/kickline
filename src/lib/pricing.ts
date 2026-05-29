export type Plan = {
  name: string;
  subtitle: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free tier",
    subtitle: "Forever free",
    price: "$0",
    cadence: "No credit card",
    features: [
      "Daily guided drills",
      "Basic progress tracking",
      "Core rudiment exercises",
    ],
    cta: "Start free",
  },
  {
    name: "Pro plan",
    subtitle: "Most popular choice",
    price: "$9.99",
    cadence: "or $99 yearly",
    features: [
      "Advanced drill paths",
      "Detailed performance metrics",
      "Custom practice routines",
      "Offline mode access",
    ],
    cta: "Upgrade now",
    featured: true,
  },
  {
    name: "Elite tier",
    subtitle: "For serious drummers",
    price: "$19.99",
    cadence: "or $199 yearly",
    features: [
      "Everything in Pro",
      "One-on-one coaching calls",
      "Priority feature requests",
      "Exclusive masterclass content",
      "Direct feedback on recordings",
    ],
    cta: "Go elite",
  },
];

// ── Feature comparison ("What's included") ──────────────────────────────

export type ComparisonTier = {
  name: string;
  monthly: string;
  yearly: string;
  note: string;
  cta: string;
  href: string;
  featured?: boolean;
};

export const comparisonTiers: ComparisonTier[] = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    note: "No credit card required",
    cta: "Start free",
    href: "/about#waitlist",
  },
  {
    name: "Pro",
    monthly: "$9.99",
    yearly: "$99",
    note: "Most drummers choose this",
    cta: "Upgrade now",
    href: "/about#waitlist",
    featured: true,
  },
  {
    name: "Elite",
    monthly: "$19.99",
    yearly: "$199",
    note: "For serious drummers",
    cta: "Go elite",
    href: "/about#waitlist",
  },
];

export type ComparisonRow = {
  label: string;
  // Access per tier, in the order [Free, Pro, Elite].
  tiers: [boolean, boolean, boolean];
};

export type ComparisonGroup = {
  title: string;
  rows: ComparisonRow[];
};

export const comparisonGroups: ComparisonGroup[] = [
  {
    title: "Practice access",
    rows: [
      { label: "Daily guided drills", tiers: [true, true, true] },
      { label: "Core rudiment exercises", tiers: [true, true, true] },
      { label: "Advanced drill paths", tiers: [false, true, true] },
      { label: "Custom practice routines", tiers: [false, true, true] },
    ],
  },
  {
    title: "Tracking & insights",
    rows: [
      { label: "Basic progress tracking", tiers: [true, true, true] },
      { label: "Detailed performance metrics", tiers: [false, true, true] },
      { label: "Offline mode access", tiers: [false, true, true] },
    ],
  },
  {
    title: "Coaching & extras",
    rows: [
      { label: "One-on-one coaching calls", tiers: [false, false, true] },
      { label: "Direct feedback on recordings", tiers: [false, false, true] },
      { label: "Exclusive masterclass content", tiers: [false, false, true] },
      { label: "Priority feature requests", tiers: [false, false, true] },
    ],
  },
];
