'use client';

import styles from './textInput.module.scss';

export const TextInput = ({ id, value, setValue, type }) => {
	const handleWheel = e => {
		e.target.blur();
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
