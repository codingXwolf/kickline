"use client";

import { useState } from "react";
import Link from "next/link";
import { comparisonGroups, comparisonTiers } from "@/lib/pricing";

// Shared grid template so the price header and every feature row line up.
// Mobile: 3 equal plan columns (feature label sits full-width above them).
// Desktop: a wide label column followed by the 3 plan columns.
const GRID = "grid grid-cols-3 md:grid-cols-[minmax(0,1.7fr)_repeat(3,minmax(0,1fr))]";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-5 text-dodger">
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

function NotIncluded() {
  return <span className="block h-0.5 w-3 rounded-full bg-neutral" aria-hidden />;
}

export function PricingComparison() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex justify-center">
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex rounded-full border border-border bg-woodsmoke/60 p-1"
        >
          {(["Monthly", "Yearly"] as const).map((label, index) => {
            const isYearly = index === 1;
            const active = isYearly === yearly;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setYearly(isYearly)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-neutral-darkest"
                    : "text-neutral-light hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price header */}
      <div className={`mt-10 gap-3 md:gap-4 ${GRID}`}>
        <div className="hidden md:block" />
        {comparisonTiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col items-center rounded-2xl px-3 py-5 text-center ${
              tier.featured ? "border border-dodger bg-dodger/[0.07]" : ""
            }`}
          >
            <p className="text-sm font-semibold text-white md:text-base">
              {tier.name}
            </p>
            <p className="mt-1 font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
              {yearly ? tier.yearly : tier.monthly}
              <span className="text-sm font-medium text-neutral md:text-base">
                {yearly ? "/yr" : "/mo"}
              </span>
            </p>
            <p className="mt-2 text-xs leading-snug text-neutral-light">
              {tier.note}
            </p>
            <Link
              href={tier.href}
              className={`mt-4 inline-flex h-10 w-full items-center justify-center rounded-full px-2 text-xs font-semibold transition md:text-sm ${
                tier.featured
                  ? "bg-[image:var(--gradient-primary)] text-white hover:brightness-110"
                  : "bg-white text-neutral-darkest hover:bg-neutral-lightest"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Feature groups */}
      <div className="mt-12 space-y-10">
        {comparisonGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-base font-semibold uppercase tracking-[0.12em] text-dodger-light">
              {group.title}
            </h3>
            <div className="mt-3 overflow-hidden rounded-xl border border-border">
              {group.rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`items-center gap-y-1.5 px-4 py-3.5 md:gap-x-4 ${GRID} ${
                    index % 2 === 1 ? "bg-woodsmoke/40" : ""
                  }`}
                >
                  <div className="col-span-3 text-sm text-neutral-lighter md:col-span-1">
                    {row.label}
                  </div>
                  {row.tiers.map((included, tierIndex) => (
                    <div
                      key={comparisonTiers[tierIndex].name}
                      className={`flex justify-center ${
                        comparisonTiers[tierIndex].featured
                          ? "rounded-md bg-dodger/[0.06] py-1"
                          : ""
                      }`}
                    >
                      {included ? <Check /> : <NotIncluded />}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
