/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Replace exportTrailingSlash with trailingSlash
  reactStrictMode: true,
  swcMinify: true,
  distDir: '.next',
  // Add any other configuration options you need
}

export default nextConfig;
