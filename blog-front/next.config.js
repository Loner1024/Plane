/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dogefs.s3.ladydaily.com',
            },
        ],
    },
}

module.exports = nextConfig
