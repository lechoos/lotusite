import Image from 'next/image';
import styles from './advantageCard.module.scss';
import { CardTitle } from "../cardTitle/CardTitle";

export const AdvantageCard = ({ style, icon, alt, width, height, text, color, delay }) => {
  let variant = color === 'blue' ? 'blue' : 'pink';

  return (
    <div className={styles.card}>
      <div className={`${styles.circle} ${styles[variant]}`}>
        <span style={{ "--delay": delay }} className={styles.circ}></span>
        <Image style={{...style}} src={icon} alt={alt} width={width} height={height} className={styles.icon} />
      </div>
      <CardTitle classes={styles.title}>{text}</CardTitle>
    </div>
  )
};