import { Navbar } from '@/components/navbar/Navbar';
import { Header } from '@/components/header/Header';
import { SuccessSection } from '@/sections/successSection/SuccessSection';
import { BestSitesSection } from '@/sections/bestSitesSection/BestSitesSection';
import { AdvantageSection } from '@/sections/advantageSection/AdvantageSection';
import { BlogSection } from '@/sections/blogSection/BlogSection';
import { FaqSection } from '@/sections/faqSection/FaqSection';

const Homepage = () => {
	const title = (
		<>
			Nowoczesne strony dla <span>Twojego biznesu</span>
		</>
	)

	return (
		<>
			<Navbar />
			<Header title={title} isHome={true} />
			<main>
			  <SuccessSection />
			  <BestSitesSection />
			  <AdvantageSection />
			  <BlogSection />
			  <FaqSection />
			</main>
		</>
	);
};

export default Homepage;
