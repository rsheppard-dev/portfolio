/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: `/images/**`,
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: `/roy-sheppard-digital/image/**`,
			},
		],
	},
};

module.exports = nextConfig;
