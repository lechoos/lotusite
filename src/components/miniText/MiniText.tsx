import type { ReactNode, CSSProperties } from 'react';
import styles from './miniText.module.scss';

interface ExtendedStyles extends CSSProperties {
	'--base'?: string;
}

interface Props {
	children: ReactNode;
	classes?: string;
	base?: string;
	opacity?: number;
}

export const MiniText = ({ children, classes = '', base = '1.2rem', opacity = 0.65 }: Props) => (
	<p style={{ '--base': base, '--opacity': opacity } as ExtendedStyles} className={`${styles.text} ${classes}`}>
		{children}
	</p>
);
