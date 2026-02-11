import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent service access fee, examples, and user limits for PlugMe connectivity access.'
};

export default function PricingPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-black text-brand-900 md:text-4xl">Transparent Pricing</h1>
      <p className="mt-3 text-slate-600">
        Every request shows the service access fee and settlement date before confirmation. No hidden charges.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900">Starter</h2>
          <p className="mt-2 text-sm text-slate-600">Access limit: up to ₦2,000 equivalent connectivity value.</p>
          <p className="mt-2 text-sm font-semibold text-brand-600">Service access fee: from 4%</p>
        </article>
        <article className="rounded-2xl border border-brand-300 bg-brand-50 p-6">
          <h2 className="font-bold text-slate-900">Active</h2>
          <p className="mt-2 text-sm text-slate-600">Access limit: up to ₦7,500 equivalent connectivity value.</p>
          <p className="mt-2 text-sm font-semibold text-brand-600">Service access fee: from 3.5%</p>
        </article>
        <article className="rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900">Trusted</h2>
          <p className="mt-2 text-sm text-slate-600">Access limit: up to ₦20,000 equivalent connectivity value.</p>
          <p className="mt-2 text-sm font-semibold text-brand-600">Service access fee: from 2.8%</p>
        </article>
      </div>

      <div className="mt-10 rounded-2xl bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">Examples</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Need ₦1,500 data access now → service access fee ₦60 → post-usage settlement ₦1,560.</li>
          <li>Need ₦4,000 airtime access now → service access fee ₦140 → post-usage settlement ₦4,140.</li>
        </ul>
      </div>

      <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Limits and fees depend on PlugScore, profile checks, and partner network conditions.
      </p>
    </section>
  );
}
