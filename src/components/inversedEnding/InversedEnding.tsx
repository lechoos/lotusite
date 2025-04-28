import type { CSSProperties } from 'react';
import styles from './inversedEnding.module.scss';

interface Props {
	style: CSSProperties;
	radius: string;
}

interface ExtendedStyles extends CSSProperties {
	'--radius'?: string;
}

export const InversedEnding = ({ style, radius }: Props) => (
	<div
		style={
			{
				...style,
				'--radius': radius,
			} as ExtendedStyles
		}
		className={styles.ending}
	/>
);
