'use client';

import styles from './textInput.module.scss';

export const TextInput = ({ id, value, setValue, type }) => {
	return (
		<div className={styles['input-container']}>
			<input
				className={styles['text-input']}
				type={type || 'text'}
				value={value}
				onChange={setValue}
				name={id}
				id={id}
			/>
		</div>
	);
};
