import React from 'react';
import Card from '../components/Card';

import data from '../data/logement.json';
import styles from '../components/CardGrid.module.css'; 
function Accueil() {
  return (
    <div>
      <h1>Page - ACCUEIL</h1>
      <div className={styles['cardgrid']}>
        {data.map((logement, index) => (
          <div key={index} className={styles.card}>
            <Card data={logement} />
          </div>
        ))}
      </div>
      <h1>Page - ACCUEIL fin</h1>
    </div>
  );
}

export default Accueil;
