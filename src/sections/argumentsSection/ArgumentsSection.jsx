import Image from 'next/image';
import styles from './argumentsSection.module.scss';
import { Section } from '@/components/section/Section';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { CardTitle } from '@/components/cardTitle/CardTitle';
import { Text } from '@/components/text/Text';
import LinkButton from '@/components/linkButton/LinkButton';

export const ArgumentsSection = () => {
	const firstParagraphs = [
		'Sztuką nie jest stworzyć stronę, która wygląda pięknie, sztuką jest stworzyć stronę, która wygląda znakomicie, a jednocześnie działa w perfekcyjny sposób!',
		'Tworzymy strony, które faktycznie działają. Dbamy o ich szybkość, estetyczny wygląd, dostępność dla każdego użytkownika oraz najlepsze możliwe rozwiązania.',
		'Nie chcemy zaprzepaścić pokładanej w nas nadziei, dlatego stronę dla Twojej firmy przygotujemy z jeszcze większą precyzją i dbałością, ponieważ zasługujesz na stronę internetową, która dumnie będzie reprezentować Ciebie i Twoją Firmę!',
	];

	const secondParagraphs = [
		'Zależy nam na Tobie i Twojej Firmie. Z tego właśnie powodu cały czas rozwijamy się i działamy korzystając z  najnowszych technologii, które dbają o to, by Twoja strona była szybka oraz wysoko pozycjonowana w wyszukiwarkach internetowych.',
		'W Lotusite otrzymasz tylko i wyłącznie najwyższej klasy usługi, nie moglibyśmy ich świadczyć korzystając z technologii z czasów dinozaurów :)',
		'Jesteśmy pasjonatami naszej pracy, dlatego stworzenie dla Ciebie perfekcyjnej strony internetowej będzie dla nas przyjemnością!',
	];

	const thirdParagraphs = [
		'Wiemy z jakimi wyzwaniami wiąże się prowadzenie własnego biznesu. Naszą misją jest ułatwiać Tobie prowadzenie Twojej Firmy, a wiadomo, że lepiej prowadzi się biznes, kiedy mamy dużo klientów',
		'W tym właśnie aspekcie pomoże Ci Lotusite!',
		'Chcemy zrozumieć Twoje cele, potrzeby i wymagania, a następnie wprowadzić je w życie. Wszystko po to, by Twoja Firma prężnie się rozwijała!',
	];

	const fourthParagraphs = [
		'Niezależnie od tego czym się zajmujesz, na Twojej stronie internetowej to TY jesteś najważniejszy. Chcemy byś czuł dumę i satysfakcję z wykonanej wspólnie strony.',
		'To Ty kreujesz markę Twojej Firmy. Wpiszemy się w Twoją wizję, będzie ona dla nas najważniejszym drogowskazem na drodze projektowania strony internetowej dla Ciebie. Obiecujemy, będziesz zachwycony efektami :)',
	];

	return (
		<Section>
			<Image alt='' data-image='1' className={styles.image} src='/blue-big-line.svg' width={540.56} height={540.49} />
			<div className='wrapper'>
				<SectionTitle>Dlaczego z nami?</SectionTitle>
				<div className={styles.cards}>
					<div className={styles.card}>
						<div className={styles['card-body']}>
							<CardTitle classes={styles.title}>Tworzymy strony które działają</CardTitle>
							{firstParagraphs.map(p => (
								<Text key={p} classes={styles.text}>
									{p}
								</Text>
							))}
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles['card-body']}>
							<CardTitle classes={styles.title}>Jesteśmy na bieżąco z najnowszymi trendami i technologiami</CardTitle>
							{secondParagraphs.map(p => (
								<Text key={p} classes={styles.text}>
									{p}
								</Text>
							))}
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles['card-body']}>
							<CardTitle classes={styles.title}>Jesteśmy Twoim sojusznikiem</CardTitle>
							{thirdParagraphs.map(p => (
								<Text key={p} classes={styles.text}>
									{p}
								</Text>
							))}
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles['card-body']}>
							<CardTitle classes={styles.title}>Koncentrujemy się na Tobie</CardTitle>
							{fourthParagraphs.map(p => (
								<Text key={p} classes={styles.text}>
									{p}
								</Text>
							))}
						</div>
					</div>
				</div>
			</div>
			<Text>Jesteśmy tutaj dla Ciebie!</Text>
			<Text classes={`${styles.bolded} ${styles.finalText}`}>
				Skontaktuj się z nami jeszcze dzisiaj, pozwól nam przekuć naszą pasję w Twój sukces!
			</Text>
			<div className={styles.linkContainer}>
				<LinkButton classes={styles.link}>Umów się na konsultację</LinkButton>
			</div>
			<Image alt='' data-image='2' className={styles.image} src='/pink-flower.svg' width={66.34} height={66.36} />
			<Image alt='' data-image='3' className={styles.image} src='/blue-cup.svg' width={470.36} height={514.29} />
			<Image
				alt=''
				data-image='4'
				className={styles.image}
				src='/weird-desktop-shape.svg'
				width={654.73}
				height={349.24}
			/>
		</Section>
	);
};

// <Text classes={`${styles.bolded} ${styles.text}`}>
// Nie czekaj dłużej, umów się na darmową konsultację jeszcze dziś!
// </Text>
