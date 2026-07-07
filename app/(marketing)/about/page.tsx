export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-ink">About Werdsmith</h1>
      <p className="mt-6 text-lg leading-relaxed text-stone">
        Werdsmith started from a simple frustration: most writing apps are either bare-bones
        notepads or bloated workspaces that bury you in panels you never asked for. We wanted
        something in between — an editor that gets out of the way, but has real help on hand the
        moment you want it.
      </p>
      <p className="mt-6 leading-relaxed text-stone">
        The app is built offline-first on purpose. Your words are saved to your device the second
        you stop typing, not the second your connection cooperates. Writing shouldn&apos;t depend
        on a signal bar.
      </p>
      <h2 className="mt-12 text-2xl font-semibold text-ink">What we believe</h2>
      <ul className="mt-4 space-y-3 text-stone">
        <li>
          <span className="font-medium text-ink">AI should assist, not replace.</span> Every AI
          action — rewrite, continue, expand, summarize, grammar, plot and dialogue generation —
          is something you ask for and can discard. Nothing is inserted without your say.
        </li>
        <li>
          <span className="font-medium text-ink">Your draft is yours.</span> It lives on your
          device first. Sync exists to back it up and move it between sessions, not to mine it.
        </li>
        <li>
          <span className="font-medium text-ink">Consistency beats intensity.</span> That&apos;s
          why goals and streaks are built in from day one — showing up daily matters more than any
          single marathon session.
        </li>
      </ul>
      <h2 className="mt-12 text-2xl font-semibold text-ink">Who it&apos;s for</h2>
      <p className="mt-4 leading-relaxed text-stone">
        Poets, novelists, screenwriters, and anyone who drafts in stolen pockets of time —
        Werdsmith organizes your work into projects and documents, helps you plan with a visual
        pin board for characters and plot, and gets out of your way everywhere else.
      </p>
      <p className="mt-10 leading-relaxed text-stone">
        Werdsmith is currently in development for Android.{' '}
        <a href="/support" className="font-medium text-indigo underline">
          Get in touch
        </a>{' '}
        if you&apos;d like early access.
      </p>
    </main>
  );
}
