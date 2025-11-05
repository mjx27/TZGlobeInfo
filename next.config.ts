import path from 'path';
import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

console.log('Starting Next.js build...');
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('ANALYZE', process.env['ANALYZE']);

const isProd = process.env.NODE_ENV === 'production';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env['ANALYZE'] === 'true',
  openAnalyzer: true,
});

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'nonce-{nonce-value}';
  style-src 'self' 'nonce-{nonce-value}';
  img-src 'self' data: https://your-cdn.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.example.com;
`;

const commonSecurityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\n/g, ' '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'] as const,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.com',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  productionBrowserSourceMaps: false,

  compiler: {
    emotion: true,
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: commonSecurityHeaders,
      },
    ];
  },

  webpack(config, { isServer }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@hooks': path.resolve(__dirname, 'src/shared/lib/hooks'),
      '@utils': path.resolve(__dirname, 'src/shared/lib/utils'),
      '@model': path.resolve(__dirname, 'src/shared/model'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
    };

    if (isProd) {
      config.optimization.minimize = true;
      config.optimization.splitChunks = { chunks: 'all' };
    }

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          resourceQuery: /url/,
          type: 'asset/resource',
        },
        {
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
      ],
    });

    return config;
  },
};

export default bundleAnalyzer(nextConfig);
