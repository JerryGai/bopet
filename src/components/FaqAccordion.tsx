"use client";

import { useState } from "react";
import type { faqs as FaqList } from "@/content/faq";

export default function FaqAccordion({ items }: { items: typeof FaqList }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-stone-800">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-amber-500 text-xl transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-stone-600 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
