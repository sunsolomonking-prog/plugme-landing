import type { Metadata } from 'next';
import { PartnerForm } from '@/components/partner-form';

export const metadata: Metadata = {
  title: 'Partner with us',
  description: 'Partner with PlugMe as a VTU/VAS provider, agent network, telco, or business.'
};

export default function PartnersPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
      <div>
        <h1 className="text-3xl font-black text-brand-900 md:text-4xl">Partner with PlugMe</h1>
        <p className="mt-4 text-slate-600">
          We collaborate with VTU/VAS providers, agent networks, telcos, and businesses to expand trusted connectivity
          access.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Grow transaction volumes through PlugMe Boost and Exchange channels.</li>
          <li>Access fraud-aware onboarding with PlugMe Shield risk insights.</li>
          <li>Launch co-branded campaigns for local communities and users.</li>
        </ul>
      </div>
      <PartnerForm />
    </section>
  );
}
