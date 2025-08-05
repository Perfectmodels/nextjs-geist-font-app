import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
        pathname: '/xdata/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.banturestaurantgabon.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/workspace-*/**',
      },
    ],
  },
}

export default nextConfig
