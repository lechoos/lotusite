import styles from './successSection.module.scss';
import { Section } from '@/components/section/Section';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { Text } from '@/components/text/Text';
import { FeaturesCard } from '@/components/featuresCard/FeaturesCard';
import { SectionEnding } from '@/components/sectionEnding/SectionEnding';

export const SuccessSection = () => {
	return (
		<Section>
			<SectionEnding
				style={{
					top: 0,
					left: 0,
				}}
				radius='100% 0 0 0'
			/>
			<SectionEnding
				style={{
					top: 0,
					right: 0,
				}}
				radius='0 100% 0 0'
			/>
			<div className='wrapper'>
				<SectionTitle>
					<span>Twój sukces online</span> zaczyna się tutaj!
				</SectionTitle>
				<Text>
					Postaw na kompleksowe rozwiązania, które pomogą Ci osiągnąć wyższy poziom widoczności online oraz
					przekształcić odwiedzających w <span>lojalnych klientów:</span>
				</Text>
				<div className={styles['card-grid']}>
					<FeaturesCard
						id='first'
						subtitle='Strony dostosowane do każdego urządzenia'
						text='Czy wiesz, że większość użytkowników odwiedzi Twoją stronę na urządzeniu mobilnym? Dlatego ważne jest, by budować strony, które nie tylko będą wzbudzać zachwyt, ale też będą działać poprawnie na każdym urządzeniu.'
					/>

					<FeaturesCard
						id='second'
						subtitle='Szybkość, niezawodność i bezpieczeństwo'
						text='Ponad 40% internautów opuści Twoją witrynę, jeśli nie załaduje się w ciągu 3 sekund! W Lotusite dbamy o to, by Twoja strona była szybka, odpowiednio zabezpieczona oraz pracowała 24/7.'
					/>

					<FeaturesCard
						id='third'
						subtitle='Wysoka jakość'
						text='Tworzymy najlepsze produkty z myślą o Tobie! Chcemy, by każde spojrzenie na przygotowaną przez nas stronę napawał Cię dumą i satysfakcją. Nasze strony wywołają efekt WOW również u Twoich przyszłych klientów :)'
					/>
				</div>
			</div>
		</Section>
	);
};
