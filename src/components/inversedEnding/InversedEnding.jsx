import styles from './inversedEnding.module.scss';

export const InversedEnding = ({ style, radius }) => {
  return (
    <div style={{
      ...style, 
      "--radius": radius
    }} className={styles.ending}></div>
  )
}