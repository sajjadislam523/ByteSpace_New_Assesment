"use client";

import Image from "next/image";
import { useState } from "react";

/** Lime "Share" pill: native share sheet when available, otherwise copies the page link. */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        // The user closed the share sheet; anything else falls back to copying.
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied: nothing else we can do.
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex shrink-0 items-center gap-2 self-start rounded-3xl bg-accent px-6 py-2 text-label-m leading-6 text-shuttle-950 backdrop-blur-[20px] transition-colors hover:bg-accent-hover"
    >
      <Image src="/images/course/share.svg" alt="" width={24} height={24} unoptimized />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}
