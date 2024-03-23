import Link from 'next/link';
import styles from './linkButton.module.scss';

const LinkButton = ({ children, path = '/kontakt', id = '', ...props }) => {
	return (
		<Link 
      id={id} 
      className={`${styles.link} ${props?.classes}`} 
      href={path}
    >
			{children}
		</Link>
	);
};

export default LinkButton;
