import type { Metadata } from 'next';
import NotifyForm from '@/components/NotifyForm';

export const metadata: Metadata = {
  title: 'Something new is coming for writers',
  description:
    'A new writing app is on the way. Leave your email and we’ll let you know the moment it’s ready.',
  alternates: { canonical: '/' },
  robots: { index: false, follow: false },
};

export default function StayTunedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <div className="flex w-full max-w-xl flex-col items-center gap-8">
        <span className="rounded-full border border-hairline bg-parchmentCard px-4 py-1 text-xs font-medium uppercase tracking-wide text-stone">
          Stay tuned
        </span>

        <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Something new is coming for writers.
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-stone">
          We&apos;re giving our writing app a fresh name and a fresh start. The app
          you know isn&apos;t going anywhere — we&apos;re just rebuilding the front
          door. While we put the finishing touches on the new brand, this page is all
          you&apos;ll see here.
        </p>

        <p className="max-w-md text-base leading-relaxed text-stone">
          Want to be first to know when we launch? Drop your email and we&apos;ll send
          you a note the moment it&apos;s live — nothing else.
        </p>

        <NotifyForm />
      </div>

      <footer className="mt-16 text-xs text-stone">
        &copy; {new Date().getFullYear()} · Built for writers.
      </footer>
    </main>
  );
}
