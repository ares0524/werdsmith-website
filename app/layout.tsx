import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Werdsmith — Write anywhere, with AI on call',
  description:
    'Werdsmith is an offline-first writing app for Android with a distraction-free editor, a visual story pin board, an AI assistant, and writing streaks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-serif">{children}</body>
    </html>
  );
}
