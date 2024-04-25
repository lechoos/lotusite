'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './navLink/NavLink';

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
			name: 'Blog', 
			path: '/blog', 
			delay: 0.15,
		},
		{
			name: 'Kontakt',
			path: '/kontakt',
			delay: 0.25,
		},
	];

	useEffect(() => {
		const handleClickOutside = e => {
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
			<Link 
				className={styles.logo} 
				href='/'
			>
				<Image src='/white-logo.svg' alt='Logo firmy Lotusite' fill />
			</Link>
			<button
				className={`hamburger hamburger--collapse ${isActive} ${styles.button}`}
				type='button'
				onClick={() => setIsOpen(prev => !prev)}
				aria-label='Hamburger menu'
			>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
			<div className={`${styles.navItems} ${isOpen ? styles['is-active'] : ''}`}>
				<Image className={styles.decoration} src='/blue-grid.svg' alt='' width={300} height={300} />
				{links.map(link => (
					<NavLink style={{ '--delay': link.delay + 's' }} classes={areLinksActive} key={link.path} link={link} />
				))}
			</div>
		</nav>
	);
};