import React from 'react';
import styles from './Card.module.css';

function Card({ data }) {
  const { title, cover } = data;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
    
      <img src={cover} alt={title} />
      
    </div>
  );
}

export default Card;
