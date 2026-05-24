import Link from "next/link";
import { plans } from "@/lib/pricing";

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-0.5 size-5 shrink-0 text-dodger"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex flex-col rounded-2xl border p-8 ${
            plan.featured
              ? "border-dodger bg-woodsmoke"
              : "border-border bg-woodsmoke/40"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            {plan.featured && (
              <span className="rounded-full bg-dodger px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-neutral-light">{plan.subtitle}</p>

          <hr className="my-6 border-border" />

          <div className="font-display text-5xl font-bold tracking-tight text-white">
            {plan.price}
          </div>
          <p className="mt-2 text-sm text-neutral">{plan.cadence}</p>

          <Link
            href="/about#waitlist"
            className={`mt-6 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition ${
              plan.featured
                ? "bg-[image:var(--gradient-primary)] text-white hover:brightness-110"
                : "bg-white text-neutral-darkest hover:bg-neutral-lightest"
            }`}
          >
            {plan.cta}
          </Link>

          <hr className="my-6 border-border" />

          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-neutral-lighter"
              >
                <Check />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
