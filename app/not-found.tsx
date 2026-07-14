import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

const suggestions = [
  { href: '/', label: 'Home', description: 'What Werdsmithing is and what it does' },
  { href: '/about', label: 'About', description: 'Why we built a writing app for Android' },
  { href: '/support', label: 'Support & FAQ', description: 'Common questions and how to reach us' },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-24 text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-stone">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">This page wandered off the draft</h1>
        <p className="mt-4 max-w-md text-stone">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Here are a few places
          worth heading instead:
        </p>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-hairline bg-parchmentCard p-5 text-left transition hover:shadow-sm"
            >
              <p className="font-semibold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-stone">{item.description}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="mt-10 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-parchmentCard transition hover:opacity-90"
        >
          Back to the homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
