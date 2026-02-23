import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/solucoes",
        destination: "/aplicacoes",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sobre",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
