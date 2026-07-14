import { pageMetadata, SUPPORT_EMAIL } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Werdsmith X collects, uses, and protects your information across the Android writing app and this website.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-stone">Last updated: July 7, 2026</p>

      <div className="mt-10 space-y-8 text-stone">
        <section>
          <p className="leading-relaxed">
            This Privacy Policy explains how Werdsmith X (&quot;we&quot;, &quot;us&quot;) collects,
            uses, and protects information when you use the Werdsmith X Android app and this
            website (together, the &quot;Service&quot;).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-ink">Account information.</span> Your email
              address and, if you choose Google Sign-In, the basic profile information Google
              shares with us (name, email, profile photo).
            </li>
            <li>
              <span className="font-medium text-ink">Your content.</span> The projects, documents,
              and text you write in the app. This is stored locally on your device and synced to
              our servers so it&apos;s available across sessions and devices.
            </li>
            <li>
              <span className="font-medium text-ink">Usage data.</span> Writing activity needed to
              power features you opt into, such as word counts, streaks, and goal progress. If you
              use the AI assistant, we also count how many AI prompts you use each month to apply
              your plan&apos;s monthly allowance.
            </li>
            <li>
              <span className="font-medium text-ink">Subscription information.</span> If you
              subscribe to Membership or Ghostwriter, purchases are processed by Google Play. We
              receive your subscription status (which plans are active, billing period, and trial
              status) so we can unlock the features you paid for. We never receive or store your
              full payment card details.
            </li>
            <li>
              <span className="font-medium text-ink">AI assistant requests.</span> When you
              trigger an AI action (rewrite, continue, expand, summarize, grammar, plot or dialogue
              generation), the relevant text selection is sent to our AI processing provider
              solely to generate that response. It is not used to train models on our behalf.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">How we use information</h2>
          <p className="mt-3 leading-relaxed">
            We use the information above to operate the Service: authenticate you, save and sync
            your writing, power the AI assistant, calculate goals and streaks, manage your
            subscription entitlements and monthly AI prompt allowance, and serve your published
            portfolio pages. We do not sell your personal information or your writing, and we do
            not use your content to serve third-party advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Published content</h2>
          <p className="mt-3 leading-relaxed">
            Any project you explicitly mark as published becomes publicly visible at your
            portfolio URL (werdsmith.app/portfolio/your-username). Unpublished projects and documents are
            never shown publicly. You can unpublish a project at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Data storage and retention</h2>
          <p className="mt-3 leading-relaxed">
            Your content is cached locally on your device and stored on our servers for as long as
            your account is active, so it stays available across devices. If you delete your
            account, we delete your account data and content from our servers within a reasonable
            period, except where we are required to retain records by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Third-party services</h2>
          <p className="mt-3 leading-relaxed">
            We rely on a small number of third parties to operate the Service, including Google
            Sign-In for authentication, Google Play for subscription billing, and an AI processing
            provider for AI assistant features. These providers process data only as needed to
            deliver their part of the Service. Payments are subject to Google Play&apos;s own terms
            and privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Your choices and rights</h2>
          <p className="mt-3 leading-relaxed">
            You can edit or delete your content, unpublish a project, or delete your account at any
            time from within the app. Depending on where you live, you may have additional rights
            to access, correct, or export your data. To exercise any of these, contact us at the
            email below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Children&apos;s privacy</h2>
          <p className="mt-3 leading-relaxed">
            The Service is not directed at children under 13, and we do not knowingly collect
            personal information from them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Changes to this policy</h2>
          <p className="mt-3 leading-relaxed">
            We may update this policy as the Service evolves. We will update the &quot;Last
            updated&quot; date above when we do, and material changes will be communicated through
            the app or this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Contact us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy or your data? Email{' '}
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
