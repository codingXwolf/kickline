"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Fictional brand, no backend — just confirm locally.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-dodger bg-dodger-darkest/30 p-8 text-center">
        <p className="font-display text-2xl font-bold text-white">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-light">
          We&apos;ll email <span className="text-white">{email}</span> the moment
          Kickline opens. Time to warm up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
        className="h-14 flex-1 rounded-lg border border-border bg-white/[0.04] px-5 text-base text-white transition placeholder:text-neutral focus:border-dodger focus:outline-none focus:ring-2 focus:ring-dodger/30"
      />
      <button
        type="submit"
        className="inline-flex h-14 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-7 text-base font-medium text-white transition hover:brightness-110"
      >
        Join the waitlist
      </button>
    </form>
  );
}
