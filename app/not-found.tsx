import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

// Brand-neutral during the rebrand — most routes rewrite to the stay-tuned page
// via middleware, so this only shows for genuinely unmatched requests.
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-stone">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink">This page wandered off the draft</h1>
      <p className="mt-4 max-w-md text-stone">
        The page you&apos;re looking for doesn&apos;t exist. Something new is coming soon — head
        back to the homepage to stay in the loop.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-parchmentCard transition hover:opacity-90"
      >
        Back to the homepage
      </Link>
    </div>
  );
}
