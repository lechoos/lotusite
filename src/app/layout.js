import { Open_Sans } from 'next/font/google';
import { Head } from 'next/document';
import './globals.scss';
import { Footer } from '@/components/footer/Footer';

const openSans = Open_Sans({
	weight: ['400', '700'],
	subsets: ['latin-ext'],
});

export const metadata = {
	title: 'Najlepsze strony internetowe dla Twojej Firmy | Toruń | Lotusite',
	description: 'Strony internetowe Toruń - umów się na darmową konsultację! Naszą specjalizacją jest tworzenie nowoczesnych stron internetowych. Zadzwoń pod 723 741 772.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pl-PL'>
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<body className={openSans.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
