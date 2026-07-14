import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPortfolio } from '@/lib/api';
import { formatDate } from '@/lib/format';
import { OG_IMAGE, SITE_URL } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

const TYPE_LABEL: Record<string, string> = { poem: 'Poem', story: 'Story', script: 'Script' };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const portfolio = await getPortfolio(username);
  if (!portfolio) return { title: 'Portfolio not found' };

  const { user } = portfolio;
  const title = `${user.display_name} (@${user.username})`;
  const description =
    user.bio || `Read ${user.display_name}'s published poems, stories, and scripts on Werdsmith X.`;
  const path = `/portfolio/${user.username}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — Werdsmith X`,
      description,
      url: path,
      siteName: 'Werdsmith X',
      type: 'profile',
      images: [user.photo_url ? { url: user.photo_url } : OG_IMAGE],
    },
    twitter: {
      card: 'summary',
      title: `${title} — Werdsmith X`,
      description,
    },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const portfolio = await getPortfolio(username);
  if (!portfolio) notFound();

  const { user, projects } = portfolio;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}/portfolio/${user.username}`,
    mainEntity: {
      '@type': 'Person',
      name: user.display_name,
      alternateName: `@${user.username}`,
      ...(user.bio ? { description: user.bio } : {}),
      ...(user.photo_url ? { image: user.photo_url } : {}),
    },
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <JsonLd data={structuredData} />
      <header className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-indigo text-xl font-semibold text-white">
          {user.photo_url ? (
            <Image src={user.photo_url} alt={user.display_name} width={64} height={64} className="h-full w-full object-cover" />
          ) : (
            user.display_name.charAt(0).toUpperCase()
          )}
        </div>
        <div>
          <h1 className="text-xl font-semibold text-ink">{user.display_name}</h1>
          <p className="text-sm text-stone">@{user.username}</p>
        </div>
      </header>

      {user.bio && <p className="mt-6 text-ink">{user.bio}</p>}

      <h2 className="mt-12 text-xs font-bold uppercase tracking-wide text-stone">Published Work</h2>
      {projects.length === 0 ? (
        <p className="mt-3 text-sm text-stone">Nothing published yet — check back soon.</p>
      ) : (
        <ul className="mt-4 divide-y divide-hairline rounded-2xl border border-hairline bg-parchmentCard">
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                href={`/portfolio/${user.username}/${project.id}`}
                className="flex gap-4 px-5 py-4 hover:bg-parchment"
              >
                <div className="relative h-28 w-20 flex-none overflow-hidden rounded-3xl border border-hairline bg-parchment">
                  {project.cover_image_url ? (
                    <Image
                      src={project.cover_image_url}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-indigo/10 text-xs font-medium uppercase tracking-wide text-indigo">
                      {TYPE_LABEL[project.type] ?? project.type}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-ink">
                    {project.title}
                    {project.content_locked && (
                      <span className="ml-2 text-sm" title="The author has kept this project's contents private">
                        🔒
                      </span>
                    )}
                  </p>
                  {project.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-stone">{project.description}</p>
                  )}
                  <p className="mt-2 text-xs uppercase tracking-wide text-indigo">
                    {TYPE_LABEL[project.type] ?? project.type}
                  </p>
                  <p className="mt-1 text-xs text-stone">Updated {formatDate(project.updated_at)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
