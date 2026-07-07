import Link from 'next/link';

export default function PortfolioNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-semibold text-ink">No writer here</h1>
      <p className="mt-3 max-w-sm text-stone">
        We couldn&apos;t find a portfolio at this address. Double-check the link, or it may not be published yet.
      </p>
      <Link href="/" className="mt-6 text-sm font-medium text-indigo">
        Back to Werdsmith
      </Link>
    </main>
  );
}
