"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[504px] flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setSubmitted(false);
        }}
        placeholder="Enter your email"
        className="h-[52px] w-full rounded-full border border-shuttle-200 bg-white px-6 text-body-m leading-[1.6] text-shuttle-950 transition-colors placeholder:text-shuttle-950 hover:border-shuttle-400 focus:border-primary sm:w-[376px]"
      />
      <Button type="submit" className="shrink-0">
        Search
      </Button>
      <p aria-live="polite" className="sr-only">
        {submitted ? "Thanks for subscribing!" : ""}
      </p>
    </form>
  );
}
