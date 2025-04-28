import type { CSSProperties } from 'react';
import styles from './sectionEnding.module.scss';

interface ExtendedStyles extends CSSProperties {
	'--radius'?: string;
}

interface Props {
	style: CSSProperties;
	radius: string;
}

export const SectionEnding = ({ style, radius }: Props) => (
	<div
		style={
			{
				...style,
				'--radius': radius,
			} as ExtendedStyles
		}
		className={styles.sectionEnding}></div>
);
