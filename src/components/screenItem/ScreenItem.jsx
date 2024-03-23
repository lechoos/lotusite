import styles from './singlePost.module.scss';
import { CardTitle } from '../cardTitle/CardTitle';
import { Text } from '@react-email/components';

export const ScreenItem = ({ title, children }) => {
	return (
		<div className={styles.post}>
			<div className={styles.screen}>
				<CardTitle classes={styles.title}>{title}</CardTitle>
				<Text className={styles.text}>{children}</Text>
			</div>
		</div>
	);
};
