/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'cloudinary',
    // path: `https://res.cloudinary.com/mahmoudh/image/upload/`,
    domains: [
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig
