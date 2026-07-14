import type { Metadata } from 'next';

/** Canonical origin of the deployed site, without a trailing slash. */
// The host serving the site redirects the apex domain to www, so canonical
// URLs, the sitemap, and OG tags must all use www or Google sees a loop.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.werdsmith.app').replace(/\/$/, '');

export const SITE_NAME = 'Werdsmithing';

export const SUPPORT_EMAIL = 'support@werdsmith.app';

/**
 * The branded social-preview card served by app/opengraph-image.tsx. Pages that
 * define their own openGraph block must list an image explicitly — a child
 * segment's openGraph replaces the root's, dropping the file-convention image.
 */
export const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630 };

/**
 * Builds the full Metadata for a static page: title (root template appends the
 * brand), description, canonical URL, and matching Open Graph / Twitter tags.
 * Next.js merges metadata shallowly per top-level key, so pages must set their
 * own openGraph/twitter blocks or they'd inherit the homepage's.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} — ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  };
}
