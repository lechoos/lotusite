import { Navbar } from '@/components/navbar/Navbar';
import { Header } from '@/components/header/Header';
import { SectionEnding } from '@/components/sectionEnding/SectionEnding';
import { Section } from '@/components/section/Section';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { Text } from '@/components/text/Text';
import { Form } from '@/components/form/Form';

export const metadata = {
	alternates: {
		canonical: '/kontakt',
	},
	title: 'Skontaktuj się z nami | Lotusite',
	description: 'Skontaktuj się z nami, a pomożemy Ci w realizacji Twoich marzeń o nowoczesnej stronie internetowej.',
	openGraph: {
		title: 'Skontaktuj się z nami | Lotusite',
		description: 'Skontaktuj się z nami, a pomożemy Ci w realizacji Twoich marzeń o nowoczesnej stronie internetowej.',
		url: 'https://lotusite.pl/kontakt',
	},
};

const ContactPage = () => {
	return (
		<>
			<Navbar />
			<Header isHome={false} title='Twój sukces zaczyna się w Lotusite!' />
			<Section>
				<SectionEnding
					style={{
						top: 0,
						left: 0,
					}}
					radius='100% 0 0 0'
				/>
				<div className='wrapper'>
					<SectionTitle>Czekamy na Twój kontakt!</SectionTitle>
					<Text>
						Wypełnij poniższy formularz lub zadzwoń do nas osobiście. Jeśli wypełnisz formularz, w ciągu 24 godzin
						odezwiemy się do Ciebie z proponowanym terminem pierwszej (na pewno nie ostatniej😊) rozmowy
					</Text>
				</div>
				<Form />
			</Section>
		</>
	);
};

export default ContactPage;
