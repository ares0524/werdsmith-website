'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setMessage('');

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (res.ok) {
        setStatus('success');
        setMessage("You're on the list. We'll email you the moment it's ready.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <p className="mx-auto max-w-md rounded-2xl border border-hairline bg-parchmentCard px-6 py-5 text-sm text-ink">
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <input
          id="notify-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'submitting'}
          className="flex-1 rounded-full border border-hairline bg-parchmentCard px-5 py-3 text-sm text-ink outline-none transition placeholder:text-stone focus:border-indigo disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-parchmentCard transition hover:opacity-90 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Adding…' : 'Notify me'}
        </button>
      </div>
      {status === 'error' && message && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {message}
        </p>
      )}
      <p className="mt-3 text-xs text-stone">
        We&apos;ll only email you about the launch. No spam, unsubscribe anytime.
      </p>
    </form>
  );
}
