"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import { submitNetlifyForm } from "@/lib/netlify-forms";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const isDark = variant === "dark";

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("bot-field")) {
      setStatus("success");
      return;
    }

    try {
      await submitNetlifyForm("newsletter", {
        email: String(data.get("email") ?? ""),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={isDark ? "text-amber-400 text-sm" : "text-amber-700 text-sm"}>
        Success! Thanks for subscribing.
      </p>
    );
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Email"
        className={
          isDark
            ? "flex-1 min-w-0 rounded-md border border-stone-700 bg-stone-800 px-3 py-2 text-sm text-white placeholder:text-stone-400 focus:border-amber-500 focus:outline-none"
            : "flex-1 min-w-0 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder:text-stone-500 focus:border-amber-500 focus:outline-none"
        }
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="shrink-0 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 disabled:opacity-60 transition-colors"
      >
        {status === "submitting" ? "…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500 basis-full">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
