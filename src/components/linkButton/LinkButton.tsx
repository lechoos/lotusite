import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './linkButton.module.scss';

interface Props {
	children: ReactNode;
	path?: `/${string}`;
	id?: string;
	classes?: string;
}

const LinkButton = ({ children, path = '/kontakt', id = '', classes }: Props) => (
	<Link id={id} className={`${styles.link} ${classes}`} href={path}>
		{children}
	</Link>
);

export default LinkButton;
