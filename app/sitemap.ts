import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Portfolio pages are user-generated and served on demand, so only the
// static marketing pages are listed here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/support`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/delete-account`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
