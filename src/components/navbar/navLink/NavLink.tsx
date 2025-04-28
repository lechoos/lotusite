import type { CSSProperties } from 'react';
import Link from 'next/link';
import styles from './navLink.module.scss';

interface Props {
	link: {
		path: string;
		name: string;
	};
	classes?: string;
	style?: CSSProperties;
}

const NavLink = ({ link, classes, style }: Props) => (
	<Link style={{ ...style }} className={`${styles.link} ${classes}`} href={link.path}>
		{link.name}
	</Link>
);

export default NavLink;
