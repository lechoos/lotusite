import styles from './navLink.module.scss';
import Link from "next/link";

const NavLink = ({ link, classes, style }) => {
  return (
    <Link style={{ ...style }} className={`${styles.link} ${classes}`} href={link.path}>{link.name}</Link>
  )
};

export default NavLink;