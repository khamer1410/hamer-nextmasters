import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
};

const withMDX = mdx();
export default withMDX(nextConfig);
