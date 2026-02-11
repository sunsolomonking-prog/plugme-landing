import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-bold text-brand-900">PlugMe</p>
          <p className="mt-2 text-sm text-slate-600">Stay connected when life happens.</p>
          <p className="mt-3 text-xs text-slate-500">{siteConfig.complianceNote}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/how-it-works" className="hover:text-brand-600">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-brand-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-brand-600">
                Partner with us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/legal/terms" className="hover:text-brand-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="hover:text-brand-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
