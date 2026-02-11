'use client';

import { FormEvent, useState } from 'react';

type WaitlistPayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  userType: string;
  website: string;
};

const defaultState: WaitlistPayload = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  userType: 'student',
  website: ''
};

export function WaitlistForm() {
  const [form, setForm] = useState(defaultState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const response = await fetch('/api/waitlist', {
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
    setMessage('You are on the waitlist! We will reach out soon.');
    setForm(defaultState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <input
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Full name"
        required
      />
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        placeholder="Email"
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
        value={form.userType}
        onChange={(e) => setForm({ ...form, userType: e.target.value })}
        className="w-full rounded-xl border border-slate-300 px-4 py-2.5"
        required
      >
        <option value="student">Student</option>
        <option value="worker">Worker</option>
        <option value="business-owner">Business owner</option>
        <option value="agent">Agent</option>
      </select>

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
        {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{message}</p>
      )}
    </form>
  );
}
