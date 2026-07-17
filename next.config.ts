import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {
      headers: async () => {
        return [
          {
            source: "/video000.mp4",
            headers: [
              { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
              { key: "Content-Type", value: "video/mp4" },
            ],
          },
          {
            source: "/video-screenshot.png",
            headers: [
              { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
            ],
          },
        ];
      },
    };

export default nextConfig;
