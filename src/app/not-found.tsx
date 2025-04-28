import styles from './notFound.module.scss';
import { Navbar } from '@/components/notNavbar/notNavbar';
import { SecondaryButton } from '@/components/secondaryButton/SecondaryButton';

export default function NotFound() {
	return (
		<>
			<Navbar />
			<main className={styles.notFound}>
				<h1>Niestety nic tu nie ma :(</h1>
				<SecondaryButton path='/'>Wróć do strony głównej</SecondaryButton>
			</main>
		</>
	);
}
