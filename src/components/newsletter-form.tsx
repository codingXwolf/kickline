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
        className="h-12 flex-1 rounded-md border border-border bg-background/60 px-4 text-sm text-white placeholder:text-neutral focus:border-dodger focus:outline-none"
      />
      <button
        type="submit"
        className="h-12 rounded-md border border-border bg-white/10 px-6 text-sm font-medium text-white transition-colors hover:bg-white/15"
      >
        Subscribe
      </button>
    </form>
  );
}
