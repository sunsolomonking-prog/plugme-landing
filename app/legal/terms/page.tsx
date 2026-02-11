import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Simple terms of service for using PlugMe connectivity access services.'
};

export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-black text-brand-900 md:text-4xl">Terms of Service</h1>
      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
        <p>
          PlugMe offers deferred connectivity access for data and airtime services. By using PlugMe, you agree to
          provide accurate details and maintain a secure account.
        </p>
        <p>
          Every transaction displays the service access fee, total settlement amount, and due date before confirmation.
          You are responsible for completing post-usage settlement on schedule.
        </p>
        <p>
          Abuse, fraudulent activity, or repeated settlement failure may lead to reduced limits, account suspension, or
          permanent removal from the platform.
        </p>
        <p>
          PlugMe may adjust limits and service terms based on PlugScore, partner network conditions, and regulatory
          obligations.
        </p>
      </div>
    </section>
  );
}
