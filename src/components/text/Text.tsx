import type { CSSProperties, ReactNode } from 'react';
import styles from './text.module.scss';

interface ExtendedStyles extends CSSProperties {
	'--opacity'?: number;
}

interface Props {
	children: ReactNode;
	classes?: string;
	opacity?: number;
}

export const Text = ({ children, classes = '', opacity = 0.65 }: Props) => (
	<p style={{ '--opacity': opacity } as ExtendedStyles} className={`${styles.text} ${classes}`}>
		{children}
	</p>
);
