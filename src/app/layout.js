import { Open_Sans } from 'next/font/google';
import './globals.scss';
import { Footer } from '@/components/footer/Footer';

const openSans = Open_Sans({
	weight: ['400', '700'],
	subsets: ['latin-ext'],
});

export const metadata = {
	metadataBase: new URL('https://lotusite.pl'),
	alternates: {
		canonical: '/',
	},
	title: 'Najlepsze strony internetowe dla Twojej Firmy | Toruń | Lotusite',
	description:
		'Strony internetowe Toruń - umów się na darmową konsultację! Naszą specjalizacją jest tworzenie nowoczesnych stron internetowych. Zadzwoń pod 723 741 772.',
	icons: {
		icon: [
			{
				url: '/images/favicon.ico', // /public path
				href: '/images/favicon.ico', // /public path
			},
		],
	},
	robots: {
		noimageindex: true,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='pl-PL'>
			<body className={openSans.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
