'use client';

import { FormEvent, useState } from 'react';

type PartnerPayload = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  partnerType: string;
  notes: string;
  website: string;
};

const defaultState: PartnerPayload = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  city: '',
  partnerType: 'vtu-vas',
  notes: '',
  website: ''
};

export function PartnerForm() {
  const [form, setForm] = useState(defaultState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const response = await fetch('/api/partners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = (await response.json()) as { message: string };

    if (!response.ok) {
      setStatus('error');
      setMessage(data.message || 'Could not submit form.');
      return;
    }

    setStatus('success');
    setMessage('Thanks! Our partnerships team will contact you shortly.');
    setForm(defaultState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <input
        value={form.companyName}
        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Company name"
        required
      />
      <input
        value={form.contactName}
        onChange={(e) => setForm({ ...form, contactName: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Contact person"
        required
      />
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Business email"
        required
      />
      <input
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Phone number"
        required
      />
      <input
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="City"
        required
      />
      <select
        value={form.partnerType}
        onChange={(e) => setForm({ ...form, partnerType: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
      >
        <option value="vtu-vas">VTU/VAS provider</option>
        <option value="agent-network">Agent network</option>
        <option value="telco">Telco</option>
        <option value="business">Business</option>
      </select>
      <textarea
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        className="h-28 w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Tell us your partnership goals"
      />

      <input
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-white"
      >
        {status === 'loading' ? 'Submitting...' : 'Send Partner Request'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{message}</p>
      )}
    </form>
  );
}
