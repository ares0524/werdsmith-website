import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

const description =
  'Werdsmithing is an offline-first writing app for Android with a distraction-free editor, an AI writing assistant, a visual story pin board, and daily writing goals and streaks.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Werdsmithing — AI Writing App for Android, Offline-First',
    template: `%s — ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    'writing app',
    'Android writing app',
    'AI writing assistant',
    'offline writing app',
    'novel writing app',
    'story planner',
    'writing goals',
    'Werdsmithing',
  ],
  icons: { icon: '/logo.png', apple: '/logo.png' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: 'Werdsmithing — AI Writing App for Android, Offline-First',
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werdsmithing — AI Writing App for Android, Offline-First',
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
