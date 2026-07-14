import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Avatars and cover images are served from the Werdsmithing backend's /uploads path.
    remotePatterns: [{ protocol: 'http', hostname: '**' }, { protocol: 'https', hostname: '**' }],
  },
  experimental: {
    // Inline the (small) Tailwind stylesheet into the HTML instead of loading it
    // as a render-blocking <link> — first paint no longer waits on a CSS request.
    inlineCss: true,
  },
};

export default nextConfig;
