import { ReactNode } from 'react';
import styles from './inputLabel.module.scss';

interface Props {
	name?: string;
	children: ReactNode;
}

export const InputLabel = ({ name, children }: Props) => (
	<label className={styles.label} htmlFor={name}>
		{children}
	</label>
);
