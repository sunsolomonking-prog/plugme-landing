import type { Metadata } from 'next';
import { FaqAccordion } from '@/components/faq-accordion';
import { faqItems } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about defaults, settlement, privacy, and eligibility for PlugMe users.'
};

export default function FaqPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-black text-brand-900 md:text-4xl">Frequently Asked Questions</h1>
      <p className="mt-3 text-slate-600">Clear answers on access, settlement, privacy, and eligibility.</p>
      <div className="mt-8">
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
