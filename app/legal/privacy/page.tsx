import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NDPR-friendly privacy policy for PlugMe users and partners.'
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-black text-brand-900 md:text-4xl">Privacy Policy</h1>
      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
        <p>
          PlugMe collects personal information such as name, email, phone, city, and device signals to provide secure
          connectivity access and support account verification.
        </p>
        <p>
          We process data according to NDPR principles, including lawful purpose, minimal collection, secure storage,
          and transparent use.
        </p>
        <p>
          PlugMe Shield uses fraud-prevention checks, including behavioral and device risk analysis, to protect users,
          partners, and platform integrity.
        </p>
        <p>
          Users may request data updates or account closure through official support channels. Some information may be
          retained where required by law or compliance obligations.
        </p>
      </div>
    </section>
  );
}
