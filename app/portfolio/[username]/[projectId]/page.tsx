import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPortfolioProject } from '@/lib/api';
import { readingTimeMinutes } from '@/lib/format';

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ username: string; projectId: string }>;
}) {
  const { username, projectId } = await params;
  const result = await getPortfolioProject(username, projectId);
  if (!result) notFound();

  const { project, documents } = result;
  const locked = result.locked || project.content_locked;
  const totalWords = documents.reduce((sum, doc) => sum + doc.word_count, 0);
  const minutes = readingTimeMinutes(totalWords);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href={`/portfolio/${username}`} className="text-sm text-indigo">
        ← Back to @{username}
      </Link>

      <h1 className="mt-6 text-2xl font-semibold text-ink">{project.title}</h1>
      {project.description && <p className="mt-2 text-stone">{project.description}</p>}
      {!locked && (
        <p className="mt-3 text-sm text-stone">
          {totalWords.toLocaleString()} words · {minutes} min read
        </p>
      )}

      {locked ? (
        <div className="mt-10 rounded-2xl border border-hairline bg-parchmentCard px-6 py-10 text-center">
          <p className="text-2xl">🔒</p>
          <p className="mt-3 font-medium text-ink">This project is locked</p>
          <p className="mt-1 text-sm text-stone">The author has kept its contents private.</p>
        </div>
      ) : (
        <div className="mt-10 space-y-12">
          {documents.length === 0 ? (
            <p className="text-sm text-stone">This project has no writing yet.</p>
          ) : (
            documents.map((doc) => (
              <article key={doc.id}>
                <h2 className="text-lg font-semibold text-ink">{doc.title}</h2>
                <div className="mt-3 whitespace-pre-wrap leading-relaxed text-ink">{doc.content}</div>
              </article>
            ))
          )}
        </div>
      )}
    </main>
  );
}
