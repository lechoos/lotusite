import Link from "next/link";
import styles from './secondaryButton.module.scss';

export const SecondaryButton = ({ path='/uslugi', children }) => {
  return (
    <Link className={styles.link} href={path}>{children}</Link>
  );
};