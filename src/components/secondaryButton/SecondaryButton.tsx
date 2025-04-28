import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './secondaryButton.module.scss';

interface Props {
	path?: `/${string}`;
	children: ReactNode;
}

export const SecondaryButton = ({ path = '/uslugi', children }: Props) => (
	<Link className={styles.link} href={path}>
		{children}
	</Link>
);
