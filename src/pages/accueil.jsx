import React from 'react';
import Card from '../components/Card';

import data from '../data/logement.json';

function Accueil() {
  return (
    <div>
      <h1>Page - ACCUEIL</h1>
      {/* Passez les données aux composants Card */}
      {data.map((logement, index) => (
        <Card key={index} data={logement} />
      ))}
      <p>Page - ACCUEIL fin </p>
    </div>
  );
}

export default Accueil;
