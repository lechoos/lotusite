import LinkButton from '../linkButton/LinkButton';
import styles from './header.module.scss';

export const Header = ({ title, isHome }) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
			{isHome ? (
				<>
					<p className={styles.text}>
						Razem stworzymy <span>profesjonalną i nowoczesną</span> stronę internetową, która będzie wyglądała wyjątkowo
						i przyciągnie do Ciebie <span>nowych klientów</span>! Umów się na darmową konsultację jeszcze dziś!
					</p>
					<LinkButton>Umów się na konsultację</LinkButton>
					<div className={styles.mouse}>
						<div className={styles.dot}></div>
					</div>
				</>
			) : (
				<></>
			)}
		</header>
	);
};
