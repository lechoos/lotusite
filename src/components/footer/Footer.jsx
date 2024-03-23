import { Ubuntu } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
import { SectionEnding } from '../sectionEnding/SectionEnding';
import { InversedEnding } from '../inversedEnding/InversedEnding';

const ubuntu = Ubuntu({
	weight: ['400', '700'],
	subsets: ['latin-ext'],
});

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<InversedEnding
				style={{
					top: 0,
					right: 0,
				}}
				radius='0 100% 0 0'
			/>
			<SectionEnding
				style={{
					bottom: 100 + '%',
					left: 0,
				}}
				radius='0 0 0 100%'
			/>
			<div className='wrapper'>
				<div className={styles['footer-top']}>
					<div className={styles['footer-left']}>
						<Image alt='Logo firmy Lotusite' src='white-logo.svg' width={97.92} height={83.34} />
						<h2 className={`${styles.title} ${ubuntu.className}`}>Lotusite</h2>
					</div>
					<div className={styles['footer-right']}>
						<div className={styles.contact}>
							<h3 className={styles['contact-title']}>Kontakt</h3>
							<Link href='mailto:kontakt@lotusite.pl'>kontakt@lotusite.pl</Link>
							<p>+48 723 741 772</p>
						</div>
						<div className={styles['footer-links']}>
							<Link className={styles.link} href='/uslugi'>
								Usługi
							</Link>
							<Link className={styles.link} href='/uslugi'>
								Kontakt
							</Link>
							<Link className={styles.link} href='/uslugi'>
								Polityka prywatności
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles['footer-bottom']}>
				<p>{year} &copy; Wszelkie prawa zastrzeżone</p>
			</div>
			<Image alt='' className={styles.decoration} src='pink-lines.svg' width={333} height={343} />
		</footer>
	);
};
