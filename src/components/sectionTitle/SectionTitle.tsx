import { ReactNode } from 'react';
import styles from './sectionTitle.module.scss';

interface Props {
	children: ReactNode;
	classes?: string;
}

export const SectionTitle = ({ children, classes = '' }: Props) => (
	<h2 className={`${styles.title} ${classes}`}>{children}</h2>
);
