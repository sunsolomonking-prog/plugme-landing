import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How it Works',
  description: 'See how PlugMe Boost, PlugMe Exchange, PlugScore, and PlugMe Shield work together.'
};

export default function HowItWorksPage() {
  const steps = [
    {
      title: '1. Sign up and verify profile',
      body: 'Create your PlugMe account with phone and basic identity details. This activates your starter access.'
    },
    {
      title: '2. Turn on PlugMe Boost',
      body: 'When balance is low, request instant data or airtime access and confirm your settlement schedule before use.'
    },
    {
      title: '3. Use PlugMe Exchange',
      body: 'Convert unused data/airtime bundles into credits you can apply towards your next connectivity need.'
    },
    {
      title: '4. Settle post-usage',
      body: 'Complete your post-usage settlement on time and grow your access profile for higher limits.'
    }
  ];

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-black text-brand-900 md:text-4xl">How PlugMe Works</h1>
      <p className="mt-4 text-slate-600">
        PlugMe is built around transparent deferred connectivity access, simple settlement, and trust-driven limits.
      </p>

      <div className="mt-8 space-y-4">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{step.title}</h2>
            <p className="mt-2 text-slate-600">{step.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-brand-50 p-6">
          <h3 className="font-bold text-brand-900">PlugScore Trust System</h3>
          <p className="mt-2 text-sm text-slate-700">
            PlugScore tracks settlement consistency, account stability, and usage behavior to determine your connectivity
            access limits. Responsible behavior improves your score and unlocks better terms.
          </p>
        </article>
        <article className="rounded-2xl bg-slate-100 p-6">
          <h3 className="font-bold text-brand-900">PlugMe Shield</h3>
          <p className="mt-2 text-sm text-slate-700">
            PlugMe Shield combines fraud prevention with device and behavior risk signals to protect users, partners,
            and transactions.
          </p>
        </article>
      </div>
    </section>
  );
}
