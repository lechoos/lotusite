import styles from './blog.module.scss';
import { Navbar } from '@/components/navbar/Navbar';
import { Header } from '@/components/header/Header';
import { getAllPostsMeta } from '@/lib/mdx';
import { Section } from '@/components/section/Section';
import Link from 'next/link';

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
				<div>
					{posts?.map(post => (
						<Link href={`/blog/${post.slug}`} key={post.title}>
							<h3>{post.title}</h3>
						</Link>
					))}
				</div>
			</Section>
		</>
	);
};

export default BlogPage;
