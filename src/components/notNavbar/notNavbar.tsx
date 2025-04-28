'use client';

import { useState, useEffect, useRef, type CSSProperties } from 'react';
import styles from './notNavbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '../navbar/navLink/NavLink';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef(null);

	const isActive = isOpen ? 'is-active' : '';
	const areLinksActive = isOpen ? styles.link : '';

	const links = [
		{
			name: 'Usługi',
			path: '/uslugi',
			delay: 0.05,
		},
		{
			name: 'Kontakt',
			path: '/kontakt',
			delay: 0.15,
		},
	];

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<nav ref={navRef} className={`${styles.nav} wrapper`}>
			<Link className={styles.logo} href='/'>
				<Image src='/logo.svg' alt='Logo firmy Lotusite' fill />
			</Link>
			<button
				className={`hamburger hamburger--collapse ${isActive} ${styles.button}`}
				type='button'
				onClick={() => setIsOpen(prev => !prev)}
				aria-label='Hamburger menu'>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
			<div className={`${styles.navItems} ${isOpen ? styles['is-active'] : ''}`}>
				<Image className={styles.decoration} src='/blue-grid.svg' alt='' width={300} height={300} />
				{links.map(link => (
					<NavLink
						style={{ '--delay': link.delay + 's', color: '#000' } as CSSProperties}
						classes={areLinksActive}
						key={link.path}
						link={link}
					/>
				))}
			</div>
		</nav>
	);
};
