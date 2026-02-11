'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/site';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold">
          Plug<span className="text-brand-600">Me</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${
                  active ? 'text-brand-600' : 'text-black/70 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/waitlist"
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
        >
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
}
