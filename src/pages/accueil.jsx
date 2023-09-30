import React from 'react';
import data from '../data/logement.json';
import styles from "./accueil.module.css";
import CardGrid from '../components/CardGrid';
//import image
  //<Banner title="..." img={variable}/> ibid page info ""...
function Accueil() {
  return (
    <div className={styles.accueil}>
  
<div className={styles.titre}>Chez vous, partout et ailleurs</div>
      <CardGrid data={data}></CardGrid>
    </div>
  );
}
  //composantBanner= acc et info
export default Accueil;
