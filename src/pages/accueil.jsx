import React from 'react';
import data from '../data/logement.json';
import CardGrid from '../components/CardGrid';
import Banner from '../components/Banner';

function Accueil() {
  // Composant "Accueil" affiche bannière et grille de cartes
  return (
    <div>
      {/* Bannière avec titre et image de fond */}
      <Banner image="../images/fond.png" title="Chez vous, partout et ailleurs" />

      {/* Grille de cartes de logements récupérée à partir du fichier JSON */}
      <CardGrid data={data}></CardGrid>
    </div>
  );
}

export default Accueil;
