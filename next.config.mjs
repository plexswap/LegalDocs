/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Replace exportTrailingSlash with trailingSlash
  reactStrictMode: true,
  swcMinify: true,
  // Add any other configuration options you need
}

export default nextConfig;
