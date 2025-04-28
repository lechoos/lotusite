import { ReactNode } from 'react';
import styles from './serviceCard.module.scss';
import { CardTitle } from '@/components/cardTitle/CardTitle';

interface Props {
	title: string;
	children: ReactNode;
}

export const ServiceCard = ({ title, children }: Props) => (
	<div className={styles.card}>
		<CardTitle classes={styles.title}>{title}</CardTitle>
		{children}
	</div>
);
