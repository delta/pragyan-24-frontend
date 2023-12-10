/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: '',
    assetPrefix: '',
    images: {
        domains: ['localhost', 'pragyan.org'],
    },
};

export default nextConfig;
