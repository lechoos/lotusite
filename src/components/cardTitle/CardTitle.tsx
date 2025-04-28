import { ReactNode } from 'react';
import styles from './cardTitle.module.scss';

interface Props {
	children: ReactNode;
	classes?: string;
}

export const CardTitle = ({ children, classes = '' }: Props) => (
	<h3 className={`${styles.title} ${classes}`}>{children}</h3>
);
