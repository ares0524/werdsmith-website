import { pageMetadata, SUPPORT_EMAIL } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Delete Your Account',
  description:
    'How to permanently delete your Werdsmith X account and all associated data, from inside the app or by email.',
  path: '/delete-account',
});

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-ink">Delete your account</h1>
      <p className="mt-2 text-sm text-stone">
        How to permanently delete your Werdsmith X account and the data that goes with it.
      </p>

      <div className="mt-10 space-y-8 text-stone">
        <section>
          <h2 className="text-xl font-semibold text-ink">Delete from the app</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Open the Werdsmith X app and go to the <span className="font-medium text-ink">Settings</span> tab.</li>
            <li>
              Scroll to the bottom and tap <span className="font-medium text-ink">Delete Account</span>.
            </li>
            <li>
              Confirm the deletion. If you sign in with a password you&apos;ll be asked to re-enter
              it; Google Sign-In accounts just confirm.
            </li>
          </ol>
          <p className="mt-3 leading-relaxed">
            Deletion takes effect immediately: your account and content are removed from our
            servers and you are signed out on this device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Can&apos;t access the app?</h2>
          <p className="mt-3 leading-relaxed">
            Email{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request`}
              className="font-medium text-indigo underline"
            >
              {SUPPORT_EMAIL}
            </a>{' '}
            from the email address on your account with the subject &quot;Account deletion
            request&quot;. We&apos;ll verify it&apos;s you and delete the account within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">What gets deleted</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Your account profile (email, display name, username, bio, profile photo).</li>
            <li>
              All of your content: projects, documents and manuscripts, characters, notes, pin
              boards, and uploaded images.
            </li>
            <li>Your public portfolio pages, which stop being served immediately.</li>
            <li>Writing stats, goals, streaks, AI chat history, and AI usage counters.</li>
            <li>Subscription records held on our servers.</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Deletion is permanent — we cannot restore your writing afterwards. We retain no
            account data after deletion, except where we are required to keep records by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Subscriptions are cancelled separately</h2>
          <p className="mt-3 leading-relaxed">
            Deleting your account does <span className="font-medium text-ink">not</span> cancel an
            active Membership or Ghostwriter subscription, because billing is handled by Google
            Play. Cancel it in the Google Play app under{' '}
            <span className="font-medium text-ink">Payments &amp; subscriptions → Subscriptions</span>{' '}
            before or after deleting your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Questions</h2>
          <p className="mt-3 leading-relaxed">
            See our{' '}
            <a href="/privacy" className="font-medium text-indigo underline">
              Privacy Policy
            </a>{' '}
            for details on how we handle your data, or email{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-indigo underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
