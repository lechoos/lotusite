import styles from './miniText.module.scss';

export const MiniText = ({ children, classes='', base='1.2rem', opacity=0.65 }) => {
  return (
    <p style={{ "--base": base, "--opacity": opacity }} className={`${styles.text} ${classes}`}>{children}</p>
  )
};