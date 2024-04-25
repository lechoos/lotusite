import styles from './screenItem.module.scss';
import { CardTitle } from '../cardTitle/CardTitle';
import { Text } from '@/components/text/Text';

export const ScreenItem = ({ title, children }) => {
	return (
		<div className={styles.post}>
			<div className={styles.screen}>
				<CardTitle classes={styles.title}>{title}</CardTitle>
				<Text classes={styles.text}>{children}</Text>
			</div>
		</div>
	);
};
