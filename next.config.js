/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    eslint: { // eslintのlint checkをbuild時にoff
      ignoreDuringBuilds: true,
    },
    typescript: { // type checkをbuild時にoff
      ignoreBuildErrors: true,
    },
    reactStrictMode: false,
    images: {
      domains: ['images.microcms-assets.io'],
    },
    webpack: (config) => {
      config.externals.push({
        sharp: "commonjs sharp",
      });
      return config;
    },
}

module.exports = nextConfig
