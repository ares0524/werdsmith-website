import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-parchment/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-ink">
          <Image src="/logo.png" alt="Werdsmith X" width={32} height={32} className="rounded-md" />
          Werdsmith X
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden text-sm text-stone transition hover:text-ink sm:inline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            className="rounded-full bg-indigo px-4 py-2 text-sm font-medium text-parchmentCard transition hover:opacity-90"
          >
            Get early access
          </Link>
        </div>
      </nav>
    </header>
  );
}
