"use client";

import { useState } from "react";
import type { faqs as FaqList } from "@/content/faq";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FaqAccordion({ items }: { items: typeof FaqList }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${slugify(item.question)}`;
        const buttonId = `faq-button-${slugify(item.question)}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-semibold text-lg text-stone-800">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-clay text-2xl transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            {isOpen && (
              <p
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pb-5 text-lg text-stone-600 leading-relaxed"
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
