/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = !isProd ? '/works/portfolio' : ''
const nextConfig = {
    output: 'export',
    eslint: { // eslintのlint checkをbuild時にoff
      ignoreDuringBuilds: true,
    },
    typescript: { // type checkをbuild時にoff
      ignoreBuildErrors: true,
    },
    assetPrefix: prefixPath,
    basePath: prefixPath,
    reactStrictMode: true,
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
