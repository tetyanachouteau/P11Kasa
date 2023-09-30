import React from 'react';
import styles from './Banner.module.css';

function Banner({ title, subtitle }) {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default Banner;