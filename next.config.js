/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NOTION_SECRET: process.env.NOTION_SECRET,
    NOTION_DB_LAB: process.env.NOTION_DB_LAB
  }
}

module.exports = nextConfig
