/** @type {import('next').NextConfig} */


/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/works/portfolio";
/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production"

const nextConfig = {
    output: isProd ? 'export' : "",
    eslint: { // eslintのlint checkをbuild時にoff
      ignoreDuringBuilds: true,
    },
    typescript: { // type checkをbuild時にoff
      ignoreBuildErrors: true,
    },
    assetPrefix: isProd ? SUB_DIRECTORY : "",
    basePath: isProd ? SUB_DIRECTORY : "",
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
