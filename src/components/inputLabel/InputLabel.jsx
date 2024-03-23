import styles from './inputLabel.module.scss';

export const InputLabel = ({ name, children }) => {
  return (
    <label className={styles.label} htmlFor={name}>{children}</label>
  )
}