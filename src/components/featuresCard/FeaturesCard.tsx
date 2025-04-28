import Link from 'next/link';
import styles from './featuresCard.module.scss';
import Image from 'next/image';
import { CardTitle } from '../cardTitle/CardTitle';
import { MiniText } from '../miniText/MiniText';

interface Props {
	id: 'first' | 'second' | 'third';
	subtitle: string;
	text: string;
}

export const FeaturesCard = ({ id, subtitle, text }: Props) => (
	<div data-class={id} className={styles.card}>
		<CardTitle classes={styles.subtitle}>{subtitle}</CardTitle>
		<MiniText classes={styles['card-text']}>{text}</MiniText>
		<Link className={styles.link} href='/uslugi'>
			Dowiedz się więcej
		</Link>
		<div className={styles.imageContainer}>
			<Image alt='' src='/pink-lines-rotated.svg' priority={true} fill />
		</div>
	</div>
);
