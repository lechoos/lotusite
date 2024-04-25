import Image from 'next/image';
import styles from './post.module.scss';
import { CardTitle } from '../cardTitle/CardTitle';
import { Link } from '@react-email/components';
import { MiniText } from '../miniText/MiniText';

export const Post = ({ title, link, date, image }) => {
	return (
		<article className={styles.post}>
			<Link className={styles.link} href={`/blog/${link}`}></Link>
			<div className={styles['image-container']}>
				<Image className={styles.blue} alt='' src='/blue-lines-deco.svg' fill />
			</div>
			<div className={styles.featured}>
				<Image alt={title} src={image} fill sizes='100%' />
			</div>
			<CardTitle classes={styles.title}>{title}</CardTitle>
			<MiniText classes={styles.date}>{date}</MiniText>
			<div className={styles['image-container']}>
				<Image className={styles.pink} alt='' src='/pink-lines.svg' fill />
			</div>
		</article>
	);
};
