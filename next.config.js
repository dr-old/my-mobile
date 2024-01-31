/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude 'fs' from being bundled on the client side
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  env: {
    NEXTAUTH_SECRET: "e4FqrQGxHS89aMjrNwu8864eh8sJU2Ia3Fwz95n0A58=",
  },
};

module.exports = nextConfig;
