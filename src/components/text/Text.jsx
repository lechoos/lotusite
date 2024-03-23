import styles from './text.module.scss';

export const Text = ({ children, classes='', opacity=0.65 }) => {
  return (
    <p style={{ '--opacity': opacity }} className={`${styles.text} ${classes}`}>{children}</p>
  )
};