import React from 'react';
import Card from '../components/Card';

import data from '../data/logement.json';
import accueil from "./accueil.module.css";
import styles from '../components/CardGrid.module.css'; 
function Accueil() {
  return (
    <div className={accueil.accueil}>
      <div className={accueil.titre}>Chez vous, partout et ailleurs</div>
      <div className={styles.cardgrid}>
        {data.map((logement) => (
          <div key={logement.id} className={styles.card}>
            <Card data={logement} />
          </div>
        ))}
      </div>
      <h1>Page - ACCUEIL fin</h1>
    </div>
  );
}

export default Accueil;
