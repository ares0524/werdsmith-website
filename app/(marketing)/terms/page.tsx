import { pageMetadata, SUPPORT_EMAIL } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'The terms that govern your use of the Werdsmithing Android writing app and website, including your account, your content, and subscriptions.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-ink">Terms of Service</h1>
      <p className="mt-2 text-sm text-stone">Last updated: July 7, 2026</p>

      <div className="mt-10 space-y-8 text-stone">
        <section>
          <p className="leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Werdsmithing Android
            app and this website (together, the &quot;Service&quot;). By creating an account or
            using the Service, you agree to these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Your account</h2>
          <p className="mt-3 leading-relaxed">
            You&apos;re responsible for keeping your account credentials secure and for activity
            that happens under your account. Let us know right away if you suspect unauthorized
            access.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Your content</h2>
          <p className="mt-3 leading-relaxed">
            You retain full ownership of everything you write in Werdsmithing. By using the Service,
            you grant us a limited license to store, sync, and process your content solely to
            operate the Service for you — for example, saving it, syncing it across sessions, and
            running an AI action you request. If you publish a project to your public portfolio,
            you&apos;re granting visitors the ability to view that content at your portfolio URL
            until you unpublish or delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">AI assistant features</h2>
          <p className="mt-3 leading-relaxed">
            The AI assistant (rewrite, continue, expand, summarize, grammar correction, plot and
            dialogue generation) produces suggestions based on automated processing. It can be
            inaccurate, repetitive, or simply not what you wanted — you decide whether to keep,
            edit, or discard anything it generates. We are not responsible for the accuracy,
            originality, or appropriateness of AI-generated suggestions. AI use is subject to a
            monthly prompt allowance that depends on your plan, as described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Free plan, subscriptions, and billing</h2>
          <p className="mt-3 leading-relaxed">
            Werdsmithing&apos;s core editor is free. Free accounts can create up to 2 projects and use
            up to 10 AI prompts per calendar month. Two optional subscriptions unlock more:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-ink">Membership</span> unlocks unlimited projects,
              cloud sync and backup across devices, publishing to your public portfolio, and all
              premium editor fonts. It is available monthly or yearly, and the yearly plan may
              include a 7-day free trial (one trial per customer).
            </li>
            <li>
              <span className="font-medium text-ink">Ghostwriter</span> raises your AI prompt
              allowance to 150 or 300 prompts per month, depending on the plan you choose.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Subscriptions are purchased and billed through Google Play at the prices shown there,
            and renew automatically until you cancel. You can cancel at any time in your Google
            Play subscription settings; cancellation takes effect at the end of the current billing
            period, and if you cancel a free trial before it ends you won&apos;t be charged. AI
            prompt allowances reset each calendar month and unused prompts do not roll over.
            Refunds are handled under Google Play&apos;s refund policies. If prices change, we will
            give you notice as required by Google Play before the new price applies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Acceptable use</h2>
          <p className="mt-3 leading-relaxed">
            Don&apos;t use the Service to publish content that is illegal, infringes someone
            else&apos;s rights, or violates the rights of others. Don&apos;t attempt to disrupt,
            reverse engineer, or abuse the Service or its AI features (for example, to generate
            harmful or abusive content at scale).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Availability</h2>
          <p className="mt-3 leading-relaxed">
            We aim to keep the Service reliable, including offline access to your locally cached
            content, but we don&apos;t guarantee uninterrupted availability of sync, AI features,
            or published portfolio pages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Termination</h2>
          <p className="mt-3 leading-relaxed">
            You can delete your account at any time from within the app. Note that deleting your
            account or uninstalling the app does not by itself cancel an active subscription — you
            must also cancel it in your Google Play settings. We may suspend or terminate accounts
            that violate these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Disclaimer and limitation of liability</h2>
          <p className="mt-3 leading-relaxed">
            The Service is provided &quot;as is&quot; without warranties of any kind. To the
            fullest extent permitted by law, Werdsmithing is not liable for any indirect, incidental,
            or consequential damages arising from your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Changes to these Terms</h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms as the Service evolves. Continued use of the Service after an
            update means you accept the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Contact us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about these Terms? Email{' '}
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
