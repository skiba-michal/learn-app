import path from "path";

const nextConfig = {
  experimental: {
    turbo: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@enums": path.resolve(__dirname, "src/enums"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@mocks": path.resolve(__dirname, "src/mocks")
    };
    return config;
  },
};

export default nextConfig;
