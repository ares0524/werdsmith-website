import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Werdsmith. Built for writers, on Android.</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-ink">About</Link>
          <Link href="/support" className="hover:text-ink">Support</Link>
          <Link href="/privacy" className="hover:text-ink">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink">Terms of Service</Link>
          <Link href="/delete-account" className="hover:text-ink">Delete Account</Link>
        </div>
      </div>
    </footer>
  );
}
