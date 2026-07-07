const faqs = [
  {
    q: 'Is Werdsmith available yet?',
    a: 'Werdsmith is in active development for Android. Email us and we will let you know the moment it is ready to install.',
  },
  {
    q: 'What Android version do I need?',
    a: 'Werdsmith targets Android 7.0 (API 24) and up, so it runs on the vast majority of Android phones in use today.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes — Werdsmith is offline-first. Your projects and documents are saved to your device immediately and sync to your account automatically whenever you have a connection.',
  },
  {
    q: 'What can the AI assistant actually do?',
    a: 'Rewrite a passage, continue writing from where you left off, expand a thought, summarize a section, correct grammar, or generate plot beats and character dialogue. You choose when to call it, on a selection or the whole document.',
  },
  {
    q: 'Is my writing sent anywhere?',
    a: 'Your content stays on your device and syncs to your own account on our backend. Text is only sent to an AI provider when you actively trigger an AI action. See our Privacy Policy for details.',
  },
  {
    q: 'Will Werdsmith be free?',
    a: "We haven't finalized pricing yet. Early access users will be the first to hear how that shapes up.",
  },
  {
    q: 'How do I publish my work publicly?',
    a: 'Each project has a publish toggle. Once published, it appears on your public portfolio page at werdsmith.app/portfolio/your-username for anyone to read.',
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold text-ink">Support</h1>
      <p className="mt-4 text-stone">
        Questions, bug reports, feedback, or want early access? We read every email.
      </p>
      <a
        href="mailto:minhchien.df@gmail.com"
        className="mt-6 inline-block rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-parchmentCard transition hover:opacity-90"
      >
        Email minhchien.df@gmail.com
      </a>

      <h2 className="mt-16 text-2xl font-semibold text-ink">Frequently asked questions</h2>
      <div className="mt-6 divide-y divide-hairline">
        {faqs.map((item) => (
          <div key={item.q} className="py-5">
            <h3 className="font-medium text-ink">{item.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
