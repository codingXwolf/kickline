"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="rounded-md border border-dodger bg-dodger-darkest/30 px-4 py-3 text-sm text-white">
        You&apos;re subscribed — watch your inbox for weekly drills.
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
        className="h-14 flex-1 rounded-lg border border-border bg-white/[0.04] px-5 text-base text-white transition placeholder:text-neutral focus:border-dodger focus:outline-none focus:ring-2 focus:ring-dodger/30"
      />
      <button
        type="submit"
        className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-white/10 px-7 text-sm font-medium text-white transition-colors hover:bg-white/15"
      >
        Subscribe
      </button>
    </form>
  );
}
