import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// The transitional stay-tuned page shouldn't be indexed during the rebrand.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', disallow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
