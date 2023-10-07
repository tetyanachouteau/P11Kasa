import React from 'react';
import styles from './CardGrid.module.css';
import Card from './Card';

function CardGrid({ data }) {
  

  return (
    <div className={styles.cardgrid}>
      {data.map((logement) => (
  
          <Card data={logement} key={logement.id} />
      
      ))}
    </div>
  );
}

export default CardGrid;
