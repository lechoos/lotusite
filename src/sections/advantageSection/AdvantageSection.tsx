import Image from 'next/image';
import styles from './advantageSection.module.scss';
import { Section } from '@/components/section/Section';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { Text } from '@/components/text/Text';
import { AdvantageCard } from '@/components/advantageCard/AdvantageCard';
import LinkButton from '@/components/linkButton/LinkButton';
import { SecondaryButton } from '@/components/secondaryButton/SecondaryButton';

export const AdvantageSection = () => {
	return (
		<Section>
			<Image alt='' data-image='1' className={styles.image} src='/blue-small-line.svg' width={66} height={66} />
			<Image alt='' data-image='2' className={styles.image} src='/blue-big-line.svg' width={540} height={540} />
			<div className='wrapper'>
				<SectionTitle classes={`${styles.title}`}>Osiągnij przewagę nad konkurencją</SectionTitle>
				<Text classes={styles.text}>
					Specjalizujemy się w dostarczaniu kompleksowych i w pełni personalizowanych rozwiązań internetowych, które
					przyciągają uwagę i zapewniają doskonałe doświadczenia Twoim klientom.
				</Text>
				<Text>Zobacz co zyskujesz korzystając z naszych usług:</Text>
				<div className={styles['card-grid']}>
					<AdvantageCard
						color='blue'
						icon='/professional-icon.svg'
						alt='Ikona przedstawiająca profesjonalistę.'
						width={0}
						height={0}
						style={{ width: '100px', height: '95.36px' }}
						text='Zwiększenie wiarygodności'
						delay='0s'
					/>
					<AdvantageCard
						color='pink'
						bg='accentColor'
						icon='/range-icon.svg'
						alt='Ikona wizualizująca większy zasięg usług poprzez ustawienie trzech ludzi w trójkącie i między nimi znajdują się połączenia łączące się w środku.'
						width={60.51}
						height={52.85}
						text='Większy zasięg usług'
						delay='1.2s'
					/>
					<AdvantageCard
						color='pink'
						bg='accentColor'
						icon='/newsagent-icon.svg'
						alt='Ikona przedstawiająca biały zarys gazety.'
						width={46.88}
						height={46.88}
						text='Lepsza prezentacja oferty'
						delay='2.5s'
					/>
					<AdvantageCard
						color='blue'
						icon='/trust.svg'
						alt='Ikona wizualizująca wzrost zaufania klientów.'
						width={64}
						height={64}
						text='Wzrost zaufania klientów'
						delay='3.7s'
					/>
				</div>
				<div className={styles.links}>
					<LinkButton>Umów się na konsultację</LinkButton>
					<SecondaryButton>Zapoznaj się z naszą ofertą</SecondaryButton>
				</div>
			</div>
			<div className={styles['image-container']}>
				<Image alt='' src='/blue-lines.svg' fill />
			</div>
		</Section>
	);
};
