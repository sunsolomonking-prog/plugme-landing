import type { Metadata } from 'next';
import { WaitlistForm } from '@/components/waitlist-form';

export const metadata: Metadata = {
  title: 'Join Waitlist',
  description: 'Join the PlugMe waitlist to access instant data and airtime connectivity services.'
};

export default function WaitlistPage() {
  return (
    <section className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
      <div>
        <h1 className="text-3xl font-black text-brand-900 md:text-4xl">Join the PlugMe Waitlist</h1>
        <p className="mt-4 text-slate-600">
          Get early access to PlugMe Boost, PlugMe Exchange, and smarter connectivity support built for daily life in
          Nigeria.
        </p>
      </div>
      <WaitlistForm />
    </section>
  );
}
