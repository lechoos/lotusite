import styles from './blog.module.scss';
import { Navbar } from '@/components/navbar/Navbar';
import { Header } from '@/components/header/Header';
import { getAllPostsMeta } from '@/lib/mdx';
import { Section } from '@/components/section/Section';
import { Post } from '@/components/post/Post';

export const metadata = {
	title: 'Najlepszy blog o tworzeniu stron internetowych | Lotusite',
	description:
		'Dowiedz się ciekawych rzeczy związanych z tworzeniem stron internetowych. Chętnie dzielimy się wiedzą! Liczymy na to, że nasze treści Cię zaciekawią.',
};

const BlogPage = async () => {
	const posts = await getAllPostsMeta();

	return (
		<>
			<Navbar />
			<Header title='Odkryj ciekawostki z naszego świata!' />
			<Section>
				<div className={`${styles['grid-container']} wrapper`}>
					{posts?.map(post => (
						<Post
							key={post.slug}
							title={post.title}
							link={post.slug}
							date={post.date}
							image={post.featuredImage}
						/>
					))}
				</div>
			</Section>
		</>
	);
};

export default BlogPage;
