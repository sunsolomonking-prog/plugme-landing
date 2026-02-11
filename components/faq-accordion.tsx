'use client';

import { useState } from 'react';
import { FaqItem } from '@/lib/faq';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-semibold text-slate-900">{item.question}</span>
              <span className="ml-4 text-brand-500">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
