import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'naszsklep-api.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'static-ourstore.hyperfunctor.com'
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      },
    ];
  },
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
};

const withMDX = mdx();
export default withMDX(nextConfig);
