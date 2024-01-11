const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest.json$/],
  maximumFileSizeToCacheInBytes: 4000000,
})
const DuplicatePackageCheckerPlugin = require('@cerner/duplicate-package-checker-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'false',
})

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
    nextScriptWorkers: true,
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_STRAPI_HOSTNAME],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    config.plugins.push(
      new DuplicatePackageCheckerPlugin({
        // Also show module that is requiring each duplicate package (default: false)
        verbose: true,
        // Emit errors instead of warnings (default: false)
        emitError: true,
        // Show help message if duplicate packages are found (default: true)
        showHelp: true,
        // Warn also if major versions differ (default: true)
        strict: false,
        /**
         * Exclude instances of packages from the results.
         * If all instances of a package are excluded, or all instances except one,
         * then the package is no longer considered duplicated and won't be emitted as a warning/error.
         * @param {Object} instance
         * @param {string} instance.name The name of the package
         * @param {string} instance.version The version of the package
         * @param {string} instance.path Absolute path to the package
         * @param {?string} instance.issuer Absolute path to the module that requested the package
         * @returns {boolean} true to exclude the instance, false otherwise
         */
        exclude: (instance) => instance.name === 'fbjs',
        // Emit errors (regardless of emitError value) when the specified packages are duplicated (default: [])
        alwaysEmitErrorsFor: ['react', 'react-router'],
      }),
    )

    return config
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = () => {
  const plugins = [withPWA, withBundleAnalyzer]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  })
}
