import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // NX + Next.js configuration
  // Turbopack is the default bundler in Next.js 16
  turbopack: {},
  transpilePackages: [
    '@ai-first/shared-types',
    '@ai-first/shared-utils',
    '@ai-first/ui',
  ],
}

export default nextConfig
