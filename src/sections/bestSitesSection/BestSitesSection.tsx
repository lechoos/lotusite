import styles from './bestSitesSection.module.scss';
import Image from 'next/image';
import { Section } from '@/components/section/Section';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { SectionEnding } from '@/components/sectionEnding/SectionEnding';
import { Text } from '@/components/text/Text';
import LinkButton from '@/components/linkButton/LinkButton';

export const BestSitesSection = () => {
	return (
		<Section classes='section--blue'>
			<SectionEnding
				style={{
					bottom: 100 + '%',
					left: 0,
				}}
				radius='0 0 0 100%'
			/>
			<SectionEnding
				style={{
					bottom: 100 + '%',
					right: 0,
				}}
				radius='0 0 100% 0'
			/>
			<div className={`wrapper ${styles.bestSites}`}>
				<SectionTitle>
					Najlepsze strony dla <span>Ciebie i Twojej Firmy</span>
				</SectionTitle>
				<div className={styles.sections}>
					<div className={styles.leftSection}>
						<Text opacity={1} classes={`${styles['white-text']}`}>
							Zapisz się na darmową konsultację jeszcze dzisiaj i zobacz jak możemy pomóc Ci{' '}
							<span>rozwinąć Twój biznes z internecie</span>.
						</Text>
						<LinkButton id='contactBtn'>Umów się na konsultację</LinkButton>
					</div>
					<div className={styles.rightSection}>
						<div className={styles.imageContainer}>
							<Image alt='Losowe ikony powiązane z mediami społecznościowymi, w celach dekoracyjnych.' src='/best-web-section-styling.svg' fill />
						</div>
					</div>
				</div>
				<div className={styles['green-grid-container']}>
					<Image alt='' src='/green-grid.svg' fill />
				</div>
			</div>
			<SectionEnding
				style={{
					top: 100 + '%',
					left: 0,
				}}
				radius='100% 0 0 0'
			/>
			<SectionEnding
				style={{
					top: 100 + '%',
					right: 0,
				}}
				radius='0 100% 0 0'
			/>
		</Section>
	);
};
