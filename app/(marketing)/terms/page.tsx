export const metadata = {
  title: 'Terms of Service — Werdsmith',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-ink">Terms of Service</h1>
      <p className="mt-2 text-sm text-stone">Last updated: June 29, 2026</p>

      <div className="mt-10 space-y-8 text-stone">
        <section>
          <p className="leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Werdsmith Android
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
            You retain full ownership of everything you write in Werdsmith. By using the Service,
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
            originality, or appropriateness of AI-generated suggestions.
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
            You can delete your account at any time from within the app. We may suspend or
            terminate accounts that violate these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Disclaimer and limitation of liability</h2>
          <p className="mt-3 leading-relaxed">
            The Service is provided &quot;as is&quot; without warranties of any kind. To the
            fullest extent permitted by law, Werdsmith is not liable for any indirect, incidental,
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
            <a href="mailto:minhchien.df@gmail.com" className="font-medium text-indigo underline">
              minhchien.df@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
