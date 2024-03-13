import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'naszsklep-api.vercel.app'

      }
    ]
  },
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
};

const withMDX = mdx();
export default withMDX(nextConfig);
