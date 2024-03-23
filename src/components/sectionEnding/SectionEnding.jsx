import styles from './sectionEnding.module.scss';

export const SectionEnding = ({ style, radius }) => {
  return (
    <div style={{
      ...style, 
      "--radius": radius
    }} className={styles.sectionEnding}></div>
  )
}