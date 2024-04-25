import styles from './services.module.scss';
import { Navbar } from '@/components/navbar/Navbar';
import { Header } from '@/components/header/Header';
import { SectionEnding } from '@/components/sectionEnding/SectionEnding';
import { SectionTitle } from '@/components/sectionTitle/SectionTitle';
import { Section } from '@/components/section/Section';
import { CardTitle } from '@/components/cardTitle/CardTitle';
import { Text } from '@/components/text/Text';
import { ServiceCard } from '@/components/serviceCard/ServiceCard';
import { MiniText } from '@/components/miniText/MiniText';
import LinkButton from '@/components/linkButton/LinkButton';

export const metadata = {
	title: 'Poznaj nasze usługi | Toruń | Lotusite',
	description:
		'Tworzymy profesjonalne strony internetowe. Zainteresowany? Umów się na konsultację, bądź zadzwoń pod 723-741-772.',
};

const ServicesPage = () => {
	const firstParagraphs = [
		'W dzisiejszych czasach nowoczesne strony internetowe są podstawą rozwoju firmy. Wychodząc naprzeciw wyzwaniom dzisiejszego rynku stworzymy dla Ciebie najlepszą stronę internetową jaką kiedykolwiek widziałeś! W codziennej pracy korzystamy z najnowszych technologii i narzędzi. Po zapoznaniu się z Twoimi potrzebami dobierzemy dla Ciebie najlepsze rozwiązanie, które spełni Twoje wymagania, ale również będzie działać pierwszorzędnie!',
	];

	return (
		<>
			<Navbar />
			<Header title={'Zobacz co możemy dla Ciebie zrobić!'} isHome={false} />
			<main>
				<Section>
					<SectionEnding
						style={{
							top: 0,
							left: 0,
						}}
						radius='100% 0 0 0'
					/>
					<SectionEnding
						style={{
							top: 0,
							right: 0,
						}}
						radius='0 100% 0 0'
					/>
					<div className='wrapper'>
						<SectionTitle>Tworzymy najlepsze strony internetowe!</SectionTitle>
						<div className={styles['text-container']}>
							{firstParagraphs.map(p => (
								<Text classes={styles.text} key={p}>
									{p}
								</Text>
							))}
						</div>
						<div className={styles['cards-container']}>
							<ServiceCard title='Estetyczny design'>
								<MiniText classes={styles.mini}>
									Strona internetowa nie może sprawiać wrażenia nieuporządkowanej. Przed tworzeniem samej strony
									stworzymy najpierw wstępną makietę, by rozplanować układ treści oraz liczbę podstron, potem natomiast
									stworzymy pełnoprawny design we współpracy z naszym zaufanym grafikiem.
								</MiniText>
								<br />
								<MiniText classes={styles.mini}>
									Zarówno makieta jak i ostateczny design strony zostaną przedstawione Tobie do akceptacji, nie zrobimy
									niczego co mogłoby Tobie nie odpowiadać.
								</MiniText>
								<br />
								<MiniText classes={styles.mini}>
									Zadbamy o to, by strona prezentowała się w odpowiedni sposób również na mniejszych urządzeniach, gdzie
									miejsca zdecydowanie brakuje. Sprawimy, że Twoi klienci nigdy nie odniosą złego wrażenia o Twojej
									stronie internetowej!
								</MiniText>
							</ServiceCard>
							<ServiceCard title='Przewaga technologiczna'>
								<MiniText classes={styles.mini}>
									Nie tworzymy stron na szablonach, uważamy, że byłoby to nieuczciwe względem Ciebie. Piszemy je od
									zera, korzystając tylko i wyłącznie z najnowszych technologii.
								</MiniText>
								<br />
								<MiniText classes={styles.mini}>
									Dzięki temu nasze strony już na starcie są daleko przed stronami Twojej konkurencji. Są po prostu
									szybkie. Bardzo szybkie. Niezależnie od tego, czy jest to prosta wizytówka, czy rozbudowana strona,
									gdzie można się wręcz zgubić - strona ładuje się praktycznie natychmiast. W sam raz, by przykuć uwagę
									Twoich klientów.
								</MiniText>
							</ServiceCard>
							<ServiceCard title='Wszystko pod kontrolą'>
								<MiniText classes={styles.mini}>
									Potrzebujesz byśmy co jakiś czas dokonali aktualizacji Twojej strony? Żaden problem! Możliwość jak
									najdłuższej współpracy z Tobą jest dla nas ogromnym darem, o który chcemy dbać w należyty sposób!
								</MiniText>
								<br />
								<MiniText classes={styles.mini}>
									Wolisz samemu trzymać pieczę nad treścią strony? W pełni rozumiemy! Każdy z nas lubi czasem poczuć
									pełną kontrolę w pewnych obszarach swojego życia. Zintegrujemy Twoją stronę z systemem zarządzania
									treścią (CMS) i przeszkolimy Cię z jego obsługi. Może to być Wordpress, Strapi lub wiele innych. Razem
									dobierzemy coś specjalnie dla Ciebie!
								</MiniText>
							</ServiceCard>
						</div>
						<div className={styles['final-items']}>
							<CardTitle classes={styles.final}>
								Podoba Ci się taka wizja?<span> Umów się na konsultację!</span>
							</CardTitle>
							<CardTitle classes={styles.final}>Sprawimy, że ta wizja stanie się rzeczywistością!</CardTitle>
							<LinkButton>Umów się na konsultację</LinkButton>
						</div>
					</div>
				</Section>
			</main>
		</>
	);
};

export default ServicesPage;
