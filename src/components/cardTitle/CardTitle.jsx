import styles from './cardTitle.module.scss';

export const CardTitle = ({ children, classes='' }) => {
  return (
    <h3 className={`${styles.title} ${classes}`}>{children}</h3>
  )
}