"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import { submitNetlifyForm } from "@/lib/netlify-forms";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  formName = "contact",
  title,
}: {
  formName?: string;
  title?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot check
    if (data.get("bot-field")) {
      setStatus("success");
      return;
    }

    const fields: Record<string, string> = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      await submitNetlifyForm(formName, fields);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg bg-gold/10 border border-gold/30 p-6 text-center"
      >
        <p className="font-semibold text-lg text-clay">
          Thanks for reaching out!
        </p>
        <p className="text-stone-600 mt-1">
          We&rsquo;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {title && (
        <h2 className="text-2xl font-semibold text-stone-800">{title}</h2>
      )}

      <div>
        <label htmlFor={`${formName}-name`} className="sr-only">
          Name
        </label>
        <input
          id={`${formName}-name`}
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder="Name"
          className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-lg text-stone-800 placeholder:text-stone-500 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay"
        />
      </div>

      <div>
        <label htmlFor={`${formName}-email`} className="sr-only">
          Email Address
        </label>
        <input
          id={`${formName}-email`}
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Email Address"
          className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-lg text-stone-800 placeholder:text-stone-500 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay"
        />
      </div>

      <div>
        <label htmlFor={`${formName}-message`} className="sr-only">
          Message
        </label>
        <textarea
          id={`${formName}-message`}
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-lg text-stone-800 placeholder:text-stone-500 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong sending your message. Please try again, or
          email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-md bg-tan px-6 py-3 text-lg font-semibold text-ink hover:bg-tan-dark hover:enabled:-translate-y-0.5 disabled:opacity-60 transition"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
