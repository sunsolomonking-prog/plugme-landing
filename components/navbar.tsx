'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/site';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-brand-900">
          Plug<span className="text-brand-500">Me</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={String(link.href)}
}
                className={`text-sm font-medium transition ${
                  active ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/waitlist"
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
        >
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
}
