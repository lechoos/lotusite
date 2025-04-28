'use client';

import { WheelEvent } from 'react';
import styles from './textInput.module.scss';

interface Props {
	id: string;
	value: string;
	type?: string;
	setValue: (event: { target: { value: string } }) => void;
}

export const TextInput = ({ id, value, setValue, type }: Props) => {
	const handleWheel = (e: WheelEvent<HTMLInputElement>) => {
		e.currentTarget.blur();
	};

	return (
		<div className={styles['input-container']}>
			<input
				className={styles['text-input']}
				type={type || 'text'}
				value={value}
				onChange={setValue}
				name={id}
				onWheel={handleWheel}
				id={id}
			/>
		</div>
	);
};
