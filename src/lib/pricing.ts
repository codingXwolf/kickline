export type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    tagline: "Build the habit. See if the system clicks.",
    features: [
      "1 active training path",
      "Daily warm-up routine",
      "Core rudiment drills",
      "Basic streak tracking",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$9",
    cadence: "per month",
    tagline: "The full coaching system for serious progress.",
    features: [
      "All training paths",
      "Adaptive daily sessions",
      "Full drill library + tempo targets",
      "Progress charts & BPM history",
      "Hand-foot coordination labs",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Annual",
    price: "$79",
    cadence: "per year",
    tagline: "Everything in Pro. Two months on the house.",
    features: [
      "Everything in Pro",
      "Save 27% vs monthly",
      "Early access to new drills",
      "Downloadable practice logs",
    ],
    cta: "Go annual",
  },
];
