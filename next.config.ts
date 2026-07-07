import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Avatars and cover images are served from the WordForge backend's /uploads path.
    remotePatterns: [{ protocol: 'http', hostname: '**' }, { protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;
