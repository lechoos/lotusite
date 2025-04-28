import { ReactNode } from 'react';
import styles from './singlePost.module.scss';
import { CardTitle } from '../cardTitle/CardTitle';
import { Text } from '../text/Text';

interface Props {
	title: string;
	children: ReactNode;
}

export const ScreenItem = ({ title, children }: Props) => (
	<div className={styles.post}>
		<div className={styles.screen}>
			<CardTitle classes={styles.title}>{title}</CardTitle>
			<Text classes={styles.text}>{children}</Text>
		</div>
	</div>
);
