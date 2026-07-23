import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/site';
import './globals.css';

// Brand-neutral during the rebrand — the previous name is intentionally omitted
// while the new brand is finalized, and the whole site is set to noindex so the
// transitional stay-tuned page isn't picked up by search engines.
const description =
  'A new writing app is on the way. Leave your email and we’ll let you know the moment it’s ready.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Something new is coming for writers',
    template: '%s',
  },
  description,
  icons: { icon: '/logo.png', apple: '/logo.png' },
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Something new is coming for writers',
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Something new is coming for writers',
    description,
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-serif">
        {children}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
