import { Section } from '@/components/section/Section';
import { getPostBySlug } from '@/lib/mdx';

const getPageContent = async slug => {
	const { meta, content } = await getPostBySlug(slug);
	return { meta, content };
};

export const generateMetadata = async ({ params }) => {
	const { meta } = await getPageContent(params.slug);

	return {
		title: meta.title,
		description: meta.description,
	};
};

const PostPage = async ({ params }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <Section>
      <div className="wrapper">
        {content}
      </div>
    </Section>
  )
};

export default PostPage;