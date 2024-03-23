import Link from 'next/link';
import styles from './featuresCard.module.scss';
import Image from 'next/image';
import { CardTitle } from '../cardTitle/CardTitle';
import { MiniText } from '../miniText/MiniText'; 

export const FeaturesCard = props => {
	const { id } = props;

	return (
		<div data-class={id} className={styles.card}>
			<CardTitle classes={styles.subtitle}>{props.subtitle}</CardTitle>
			<MiniText classes={styles['card-text']}>{props.text}</MiniText>
			<Link className={styles.link} href='/uslugi'>
				Dowiedz się więcej
			</Link>
			<div className={styles.imageContainer}>
				<Image alt='' src='/pink-lines-rotated.svg' priority={true} fill />
			</div>
		</div>
	);
};
