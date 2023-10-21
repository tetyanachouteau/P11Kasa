import React from 'react';
import data from '../data/logement.json';
import styles from "./accueil.module.css";
import CardGrid from '../components/CardGrid';
import Banner from '../components/Banner';

function Accueil() {
  return (
    <div className={styles.accueil}>
      <Banner image="../images/fond.png" title="Chez vous, partout et ailleurs" />
      <CardGrid data={data}></CardGrid>
    </div>
  );
}

export default Accueil;
