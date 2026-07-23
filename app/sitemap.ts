import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// During the rebrand every route rewrites to the stay-tuned page, so only the
// root is listed. Old marketing/portfolio URLs are intentionally omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }];
}
