import React from 'react';
import styles from './CardGrid.module.css';
import Card from './Card';

function CardGrid({ data }) {
  

  return (
    <div className={styles.cardgrid}>
      {data.map((logement) => (
        <div key={logement.id} className={styles.card}>
          <Card data={logement} />
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
