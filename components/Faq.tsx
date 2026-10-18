"use client";
import { useState } from "react";

export default function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-white shadow-card">
      {items.map((f, i) => (
        <div key={f.q}>
          <h3>
            <button type="button" id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`} onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium hover:text-teal-deep">
              {f.q}<span aria-hidden className={`text-xl text-teal-mid transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
          </h3>
          <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={open !== i} className="px-5 pb-5 text-muted">{f.a}</div>
        </div>
      ))}
    </div>
  );
}
