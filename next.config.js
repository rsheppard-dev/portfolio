/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.sanity.io'],
	},
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: '@next/font/google', options: { subsets: ['latin'] } },
		],
	},
};

module.exports = nextConfig;
