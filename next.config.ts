import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.devaamrale.dev",
          },
        ],
        destination: "https://devaamrale.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
