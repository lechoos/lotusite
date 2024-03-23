import styles from './serviceCard.module.scss';
import { CardTitle } from '@/components/cardTitle/CardTitle';

export const ServiceCard = ({ title, children }) => {
	return (
		<div className={styles.card}>
			<CardTitle classes={styles.title}>{title}</CardTitle>
			{children}
		</div>
	);
};
