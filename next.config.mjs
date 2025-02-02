import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      { source: '/doc', destination: '/docs' },
      { source: '/docs', destination: '/docs' }, // Ensure `/docs` works as itself
      { source: '/documentation', destination: '/docs' },
      { source: '/documentations', destination: '/docs' },
      { source: '/documents', destination: '/docs' },
      { source: '/files', destination: '/docs' },
      { source: '/guides', destination: '/docs' },
      { source: '/guide', destination: '/docs' },
      { source: '/help', destination: '/docs' },
      { source: '/support', destination: '/docs' },
      { source: '/manual', destination: '/docs' },
      { source: '/tutorial', destination: '/docs' },
      { source: '/tutorials', destination: '/docs' },
      { source: '/docs/:path*', destination: '/docs/:path*' }, // Preserve subpaths
    ];
  },
};

export default withMDX(config);