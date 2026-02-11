import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'PlugMe | Stay connected when life happens',
    template: '%s | PlugMe'
  },
  description: siteConfig.description,
  openGraph: {
    title: 'PlugMe',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'PlugMe',
    images: [{ url: siteConfig.ogImage }],
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; window.__plugmeAnalyticsReady = true;`
          }}
        />
      </body>
    </html>
  );
}
