import Link from 'next/link';
import { CtaSection } from '@/components/cta-section';
import { FaqAccordion } from '@/components/faq-accordion';
import { faqItems } from '@/lib/faq';
import { siteConfig } from '@/lib/site';

const benefits = [
  'Instant data/airtime access when your balance is low',
  'Deferred settlement with transparent service access fee',
  'Exchange unused data or airtime for usable credits',
  'PlugScore rewards responsible behavior with better limits'
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-14 md:grid-cols-2 md:px-6 md:pt-20">
        <div className="fade-in">
          <p className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            Powered by DataBoost.ai
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-brand-900 md:text-5xl">
            Stay connected when life happens
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            PlugMe gives you instant connectivity access and helps you settle post-usage, so your day
            never pauses.
          </p>
          <p className="mt-2 text-sm font-medium text-slate-500">{siteConfig.complianceNote}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/waitlist" className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white">
              Join Waitlist
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              See How it Works
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-soft">
          <p className="text-sm font-semibold text-brand-600">Plug life back in</p>
          <div className="mt-5 grid gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How PlugMe works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {['Create account', 'Request access', 'Use connectivity', 'Settle post-usage'].map((step, idx) => (
            <div key={step} className="rounded-2xl border border-slate-200 p-5">
              <p className="text-xs font-bold uppercase text-brand-500">Step {idx + 1}</p>
              <p className="mt-2 font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">What people are saying</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['User testimonial placeholder', 'Agent testimonial placeholder', 'Business testimonial placeholder'].map(
            (item) => (
              <div key={item} className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-4xl px-4 md:px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion items={faqItems.slice(0, 4)} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
