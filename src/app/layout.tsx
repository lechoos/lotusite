import { Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer } from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/next';

import './globals.scss';

const openSans = Open_Sans({
	weight: ['400', '700'],
	subsets: ['latin-ext'],
});

export const metadata = {
	metadataBase: new URL('https://lotusite.pl'),
	alternates: {
		canonical: '/',
	},
	title: 'Najlepsze strony internetowe dla Twojej Firmy | Lotusite',
	description:
		'Strony internetowe Pułtusk - umów się na darmową konsultację! Naszą specjalizacją jest tworzenie nowoczesnych stron internetowych. Zadzwoń pod 723 741 772.',
	icons: {
		icon: [
			{
				url: '/images/favicon.ico',
				href: '/images/favicon.ico',
			},
		],
	},
	openGraph: {
		title: 'Najlepsze strony internetowe dla Twojej Firmy | Lotusite',
		description:
			'Tworzenie stron z optymalizacją SEO, unikatowym designem i pełną responsywnością. Na zamówienie lub na szablonie.',
		keywords: [
			'strony internetowe',
			'tworzenie stron',
			'projektowanie stron',
			'SEO',
			'responsywne strony',
			'web design',
			'Polska',
		],
		url: 'https://lotusite.pl',
		siteName: 'Lotusite',
		locale: 'pl_PL',
		type: 'website',
		images: [
			{
				url: '/opengraph.png',
				width: 2400,
				height: 1260,
				alt: 'Profesjonalne strony internetowe - Lotusite',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Najlepsze strony internetowe dla Twojej Firmy | Lotusite',
		description:
			'Tworzenie stron z optymalizacją SEO, unikatowym designem i pełną responsywnością. Na zamówienie lub na szablonie.',
		images: ['/opengraph.png'],
		creator: '@piotr_lechowicz',
	},
	robots: {
		noimageindex: true,
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pl-PL'>
			<body className={openSans.className}>
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
