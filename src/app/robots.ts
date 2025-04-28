export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: ['/', '/uslugi', '/kontakt', '/images/favicon.ico', '/_next/image', '/*.js', '/*.css'],
				disallow: ['/_next/static', '/_next/data'],
			},
		],
		sitemap: 'https://lotusite.pl/sitemap.xml',
	};
}
