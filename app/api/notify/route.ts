import { NextResponse } from 'next/server';

const API_BASE_URL = (process.env.API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '');

// Basic RFC-5322-ish check — enough to reject obvious junk without being strict.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Collects notify-me signups for the rebrand launch. Validates the email, then
 * forwards it to the Werdsmith backend's /notify endpoint so the list lives with
 * the rest of our data instead of in the website deployment.
 */
export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_BASE_URL}/notify`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), source: 'stay-tuned' }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Something went wrong. Please try again in a moment.' },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again in a moment.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
