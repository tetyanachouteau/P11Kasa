import React from 'react';
import styles from './Banner.module.css';

function Banner({ title, image }) {
  // Création d'un style d'arrière-plan pour le composant Banner
  // Image du fond est insérée en arrière-plan du composant
  // h1 - élément
  const background = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + image + ")"
  }

  return (
    <div className={styles.banner} style={background}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Banner;
