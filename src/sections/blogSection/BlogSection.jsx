import Image from 'next/image';
import styles from './blogSection.module.scss';
import { Section } from '@/components/section/Section';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { SectionEnding } from '@/components/sectionEnding/SectionEnding';
import { InversedEnding } from '@/components/inversedEnding/InversedEnding';
import { ScreenItem } from '@/components/screenItem/ScreenItem';

export const BlogSection = () => {
	return (
		<Section classes='section--blue'>
			<Image alt='' data-image='1' className={styles.image} src='/desktop-icon.svg' width={193.02} height={171.8}/>
			<Image alt='' data-image='2' className={styles.image} src='/desktop-part.svg' width={456.73} height={349.24}/>
			<Image alt='' data-image='3' className={styles.image} src='/white-big-line.svg' width={750} height={750} />
			<div className='wrapper'>
				<SectionEnding
					style={{
						bottom: 100 + '%',
						right: 0,
					}}
					radius='0 0 100% 0'
				/>
				<InversedEnding
					style={{
						top: 0,
						left: 0,
					}}
					radius='100% 0 0 0'
				/>
				<SectionTitle classes={styles.title}>
					<span>Zdobądź więcej klientów</span> dzięki profesjonalnej stronie!
				</SectionTitle>
				<div className={styles.screens}>
					<ScreenItem title='Najwyższe standardy'>
						W dzisiejszych czasach nie chodzi tylko o posiadanie strony internetowej. Chodzi o posiadanie strony
						internetowej, która <span className={styles.bolded}>reprezentuje Twoją firmę na najwyższym poziomie</span>, która <span className={styles.bolded}>przyciąga odbiorców i konwertuje
						ich na lojalnych klientów.</span>
						<br />
						<br />
						<span className={styles.bolded}>Tutaj właśnie wkraczamy my - Lotusite!</span> Naszą specjalizacją jest tworzenie profesjonalnych stron
						internetowych dla przedsiębiorców takich jak Ty!
					</ScreenItem>
					<ScreenItem title='Optymalizacja SEO'>
						Nawet najlepsze strony internetowe nie przyniosą oczekiwanych skutków jeśli nie zadbamy o to, by były zoptymalizowane pod kątem SEO. <span className={styles.bolded}>Potrzebujesz strony, która będzie wysoko wyświetlać się w wyszukiwarkach internetowych.</span> No bo po co komu strona, której nikt nie widzi, prawda?
						<br />
						<br />
						Taką właśnie zasadą kierujemy się w Lotusite - nasze strony są tworzone by dumnie prezentowały się na pierwszych miejscach wyszukiwarek, by mogłby przynieść Tobie i Twojej firmie <span className={styles.bolded}>realne zyski</span>!
					</ScreenItem>
					<ScreenItem title='Dbałość o każdy detal'>
						Tworzenie strony internetowej to <span className={styles.bolded}>inwestycja w przyszłość Twojego biznesu</span>. Dlatego warto zaufać profesjonalistom, którzy znają się na rzeczy. 
						<br />
						<br />
						Zadbamy o każdy, nawet najmniejszy szczegół, tworząc dla Ciebie stronę, która zapewni Twoim klientom unikalne doświadczenia podczas jej odwiedzania, Tobie zaś <span className={styles.bolded}>przyniesie dumę oraz liczne sukcesy w biznesie!</span>
					</ScreenItem>
					<ScreenItem title='Pełne wsparcie'>
						Wykonanie strony nie musi oznaczać końca współpracy. Wręcz przeciwnie! Zapewnimy Ci wsparcie w każdym momencie trwania naszej współpracy. Niezależnie czy potrzebujesz dodać nowe treści, czy wolisz samemu mieć kontrolę nad treścią strony, wyjdziemy naprzeciw Twoim oczekiwaniom :)
					</ScreenItem>
				</div>
				<InversedEnding
					style={{
						bottom: 0,
						right: 0,
					}}
					radius='0 0 100% 0'
				/>
				<SectionEnding
					style={{
						top: 100 + '%',
						left: 0,
					}}
					radius='100% 0 0 0'
				/>
			</div>
		</Section>
	);
};
