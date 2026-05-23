import { ButtonLink } from "@/components/ui";
import { plans } from "@/lib/pricing";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex flex-col rounded-xl border p-8 ${
            plan.featured
              ? "border-dodger bg-dodger-darkest/30"
              : "border-border"
          }`}
        >
          {plan.featured && (
            <span className="mb-4 inline-flex w-fit rounded-full bg-dodger px-3 py-1 text-xs font-semibold text-white">
              Most popular
            </span>
          )}
          <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
          <p className="mt-2 text-sm text-neutral-light">{plan.tagline}</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl font-bold text-white">
              {plan.price}
            </span>
            <span className="text-sm text-neutral">{plan.cadence}</span>
          </div>
          <ul className="mt-8 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-neutral-lighter"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-dodger"
                />
                {feature}
              </li>
            ))}
          </ul>
          <ButtonLink
            href="/about#waitlist"
            variant={plan.featured ? "primary" : "secondary"}
            className="mt-8 w-full"
          >
            {plan.cta}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
