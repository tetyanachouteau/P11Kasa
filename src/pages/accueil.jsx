import React from 'react';
import data from '../data/logement.json';
import styles from "./accueil.module.css";
import CardGrid from '../components/CardGrid';
import Banner from '../components/Banner';
//import image
//<Banner title="..." img={variable}/> ibid page info ""...
function Accueil() {
  return (
    <div className={styles.accueil}>
      <Banner image="../images/fond.png" title="Chez vous, partout et ailleurs" />
      <CardGrid data={data}></CardGrid>
    </div>
  );
}
//composantBanner= acc et info
export default Accueil;
