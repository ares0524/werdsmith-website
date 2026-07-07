import Link from 'next/link';

const features = [
  {
    title: 'Distraction-free editor',
    description:
      'A clean, markdown-aware writing space with autosave every 5 seconds, live word and character counts, a reading-time estimate, and full dark mode.',
  },
  {
    title: 'AI writing assistant',
    description:
      'Rewrite, continue, expand, summarize, fix grammar, or generate plot beats and character dialogue — applied to a selection or the whole page, whenever you want help.',
  },
  {
    title: 'Pin board',
    description:
      'Plan visually. Pin characters and plot points to a board and draw connections between them to see your story take shape before you write it.',
  },
  {
    title: 'Projects & documents',
    description:
      'Organize each story, poem, or script as a project with as many documents inside it as you need — chapters, scenes, notes, all in one place.',
  },
  {
    title: 'Goals & streaks',
    description:
      'Set a daily word target and watch your streak build, with a 7-day progress chart that keeps you honest about showing up.',
  },
  {
    title: 'Offline-first sync',
    description:
      'Everything is written to your device first, so you can write on a plane or in a dead zone. It reconciles with your account the moment you are back online.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pt-20 pb-16 text-center sm:pt-28">
        <span className="rounded-full border border-hairline bg-parchmentCard px-4 py-1 text-xs font-medium uppercase tracking-wide text-stone">
          Coming soon to Android
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          The writing app that thinks with you, not for you.
        </h1>
        <p className="max-w-xl text-lg text-stone">
          Werdsmith is an offline-first writing companion with a distraction-free editor, a visual
          story board, and an AI assistant on call — for every poem, story, and script you start.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/support"
            className="rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-parchmentCard transition hover:opacity-90"
          >
            Get early access
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-ink transition hover:bg-parchmentCard"
          >
            Why we built it
          </Link>
        </div>

        {/* Editor mockup */}
        <div className="mt-12 w-full max-w-md rounded-2xl border border-hairline bg-parchmentCard p-5 text-left shadow-sm">
          <div className="mb-4 flex items-center justify-between border-b border-hairline pb-3">
            <span className="text-sm font-semibold text-ink">Chapter One: The Long Way Home</span>
            <span className="text-xs text-stone">412 words · 2 min read</span>
          </div>
          <p className="text-sm leading-relaxed text-stone">
            The rain hadn&apos;t stopped since Tuesday, and Mara had started to suspect it never
            would. <span className="bg-indigo/10 text-ink">She pulled her coat tighter</span> and
            kept walking toward the lights of the harbor.
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-hairline bg-parchment px-3 py-2 text-xs text-stone">
            <span className="font-medium text-indigo">AI:</span> Continue writing from here?
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink">Everything a writer actually uses</h2>
          <p className="mt-3 text-stone">
            No bloat, no subscriptions to fifteen features you&apos;ll never touch — just the
            tools that keep you writing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-hairline bg-parchmentCard p-6 transition hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-y border-hairline bg-parchmentCard">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold text-ink">Share your work, your way</h2>
          <p className="max-w-xl text-stone">
            Publish any project to a public portfolio at{' '}
            <span className="font-mono text-ink">werdsmith.app/portfolio/your-username</span> — readers see
            a clean, ad-free page with just your writing. Nothing leaves your device until you
            choose to publish it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-ink">Be first to write with it</h2>
        <p className="mx-auto mt-3 max-w-md text-stone">
          Werdsmith is in active development for Android. Reach out and we&apos;ll let you know
          the moment it&apos;s ready to install.
        </p>
        <Link
          href="/support"
          className="mt-8 inline-block rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-parchmentCard transition hover:opacity-90"
        >
          Get early access
        </Link>
      </section>
    </main>
  );
}
