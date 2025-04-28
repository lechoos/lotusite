import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './advantageCard.module.scss';
import { CardTitle } from '../cardTitle/CardTitle';

interface ExtendedStyles extends CSSProperties {
	'--delay'?: string | number;
}

interface Props {
	style?: CSSProperties;
	icon: string;
	alt: string;
	width: number;
	height: number;
	text: string;
	color: string;
	bg?: string;
	delay: number | string;
}

export const AdvantageCard = ({ style, icon, alt, width, height, text, color, delay }: Props) => {
	let variant = color === 'blue' ? 'blue' : 'pink';

	return (
		<div className={styles.card}>
			<div className={`${styles.circle} ${styles[variant]}`}>
				<span style={{ '--delay': delay } as ExtendedStyles} className={styles.circ}></span>
				<Image style={{ ...style }} src={icon} alt={alt} width={width} height={height} className={styles.icon} />
			</div>
			<CardTitle classes={styles.title}>{text}</CardTitle>
		</div>
	);
};
