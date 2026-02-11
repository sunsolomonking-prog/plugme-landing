import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:px-6">
      <div className="rounded-3xl bg-brand-900 p-8 text-white md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Plug life back in</p>
        <h2 className="mt-3 text-2xl font-bold md:text-4xl">Ready for instant connectivity access?</h2>
        <p className="mt-3 max-w-2xl text-slate-100">
          Join early users already testing PlugMe Boost and PlugMe Exchange across Nigeria.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/waitlist"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900"
          >
            Join Waitlist
          </Link>
          <Link
            href="/partners"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
