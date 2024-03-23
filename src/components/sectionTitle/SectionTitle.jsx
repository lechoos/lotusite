import styles from './sectionTitle.module.scss';

export const SectionTitle = ({ children, classes='' }) => {
  return (
    <h2 className={`${styles.title} ${classes}`}>{children}</h2>
  )
}