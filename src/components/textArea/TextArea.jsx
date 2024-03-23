"use client";

import { useState } from "react";
import styles from './textArea.module.scss';

export const TextArea = ({ value, setValue }) => {

  return (
    <div className={styles['input-container']}>
      <textarea id='message' value={value} onChange={setValue} className={styles.area} />
    </div>
  )
}