import styles from './privacy.module.scss';
import { Text } from '@/components/text/Text';
import { CardTitle } from '@/components/cardTitle/CardTitle';
import { Navbar } from '@/components/notNavbar/notNavbar';

const PrivacyPolicy = () => {
	return (
		<>
			<Navbar />
			<div className={styles.policy}>
				<CardTitle classes={styles.title}>Polityka prywatności</CardTitle>
				<Text>
					Niniejsza polityka prywatności i plików cookies opisuje zasady postępowania z danymi osobowymi oraz
					wykorzystywania plików cookies i innych technologii w ramach strony internetowej https://lotusite.pl.
					Administratorem strony jest Piotr Lechowicz, prowadzący działalność gospodarczą pod firmą Lotusite Piotr Lechowicz z siedzibą w Toruniu 87-100, ul. Podgórna 30/1C, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej, posługujący się numerem NIP 9562393682. Kontakt z
					administratorem możliwy pod adresem e-mail ptrlechowicz@gmail.com.
				</Text>
				<CardTitle classes={styles.subtitle}>§1 Definicje</CardTitle>
				<Text>
					1. Na potrzeby niniejszej polityki prywatności, przyjmuje się następujące znaczenie poniższych pojęć:
				</Text>
				<Text>a) Administrator – Piotr Lechowicz, prowadzący działalność gospodarczą pod firmą Lotusite Piotr Lechowicz z siedzibą w Toruniu 87-100, ul. Podgórna 30/1C, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej, posługujący się numerem NIP 9562393682.</Text>
				<Text>b) Strona – strona internetowa dostępna pod adresem   https://lotusite.pl</Text>
				<Text>c) Użytkownik – każdy podmiot, który korzysta ze Strony.</Text>
				<CardTitle classes={styles.subtitle}>§2 Dane osobowe</CardTitle>
				<Text>1. Użytkownik może przekazywać swoje dane osobowe Administratorowi za pomocą formularza dostępnego na Stronie. Jest to formularz kontaktowy służący do kontaktu Użytkownika z Administratorem.</Text>
				<Text>2. Administratorem danych osobowych Użytkownika jest Administrator.</Text>
				<Text>3. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych.</Text>
				<Text>4. Podanie danych jest zawsze dobrowolne, ale niezbędne do podjęcia przez Użytkownika akcji, do której przeznaczony jest dany formularz.</Text>
				<Text>5. Administrator nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.</Text>
				<Text>6. Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione przed dostępem do nich przez osoby do tego nieupoważnione.</Text>
				<Text>7. Użytkownikowi przysługują następujące uprawnienia: a) prawo do żądania dostępu do danych osobowych dotyczących osoby, której dane dotyczą, ich sprostowania, usunięcia lub ograniczenia przetwarzania, b) prawo do wniesienia sprzeciwu wobec przetwarzania, c) prawo do przenoszenia danych, d) prawo do cofnięcia zgody na przetwarzanie danych osobowych w określonym celu, jeżeli Użytkownik uprzednio taką zgodę wyraził, e) prawo do wniesienia skargi do organu nadzorczego w związku z przetwarzaniem danych osobowych przez Administratora.</Text>
				<CardTitle classes={styles.subtitle}>§3 Pliki cookies</CardTitle>
				<Text>1. Administrator wykorzystuje pliki cookies (ciasteczka), czyli niewielkie informacje tekstowe, przechowywane na urządzeniu końcowym Użytkownika (np. komputerze, tablecie, smartfonie). Cookies mogą być odczytywane przez system teleinformatyczny Administratora.</Text>
				<Text>2. Administrator przechowuje pliki cookies na urządzeniu końcowym Użytkownika, a następnie uzyskuje dostęp do informacji w nich zawartych w celach statystycznych oraz w celu zapewnienia prawidłowego działania Strony.</Text>
				<Text>3. Administrator informuje niniejszym Użytkownika, że istnieje możliwość takiej konfiguracji przeglądarki internetowej, która uniemożliwia przechowywanie plików cookies na urządzeniu końcowym Użytkownika. W takiej sytuacji, korzystanie ze Strony przez Użytkownika może być utrudnione.</Text>
				<Text>4. Administrator wskazuje niniejszym, że pliki cookies mogą być przez Użytkownika usunięte po ich zapisaniu przez Administratora, poprzez odpowiednie funkcje przeglądarki internetowej, programy służące w tym celu lub skorzystanie z odpowiednich narzędzi dostępnych w ramach systemu operacyjnego, z którego korzysta Użytkownik.</Text>
				<CardTitle classes={styles.subtitle}>§4 Logi serwera</CardTitle>
				<Text>1. Korzystanie ze Strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest Strona.</Text>
				<Text>2. Każde zapytanie skierowane do serwera zapisywane jest w logach serwera. Logi obejmują m.in. adres IP Użytkownika, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym, z jakiego korzysta Użytkownik.</Text>
				<Text>3. Logi zapisywane i przechowywane są na serwerze.</Text>
				<Text>4. Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze Strony i nie są wykorzystywane przez Administratora w celu identyfikacji Użytkownika.</Text>
				<Text>5. Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania Stroną, a ich zawartość nie jest ujawniana nikomu poza osobami upoważnionymi do administrowania serwerem.</Text>
			</div>
		</>
	);
};

export default PrivacyPolicy;
