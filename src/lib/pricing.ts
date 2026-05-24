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
