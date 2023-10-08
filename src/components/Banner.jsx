import React from 'react';
import styles from './Banner.module.css';

function Banner({ title, image }) {
  const background = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(" + image + ")"
  } 

  return (
    <div className={styles.banner} style={background}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Banner;