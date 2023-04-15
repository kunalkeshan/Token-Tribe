/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: 'api.dicebear.com',
      port: '',
      pathname: '/**',
    }]
  }
}

module.exports = nextConfig
