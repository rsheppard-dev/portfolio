import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/admin/', '/contact-form.html'],
		},
		sitemap: 'https://www.roysheppard.dev/sitemap.xml',
	};
}
