'use client';

import { SetStateAction } from 'react';
import styles from './textArea.module.scss';

interface Props {
	value: string;
	setValue: (event: { target: { value: SetStateAction<string> } }) => void;
}

export const TextArea = ({ value, setValue }: Props) => {
	return (
		<div className={styles['input-container']}>
			<textarea id='message' value={value} onChange={setValue} className={styles.area} />
		</div>
	);
};
