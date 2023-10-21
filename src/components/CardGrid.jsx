// Importations : React est importé depuis la bibliothèque React, styles est importé depuis un fichier CSS
// et Card est importé depuis un composant Card.
import React from 'react';
import styles from './CardGrid.module.css';
import Card from './Card';

// Composant CardGrid : Ce composant génère une grille de cartes en utilisant les données passées en tant que prop "data".
function CardGrid({ data }) {
  
  return (
    <div className={styles.cardgrid}>
      {data.map((logement) => (
        // Pour chaque élément dans le tableau "data", un composant Card est créé.
        // La clé "key" est nécessaire pour aider React à identifier de manière unique chaque élément.
        <Card data={logement} key={logement.id} />
      ))}
    </div>
  );
}

// Exportation du composant CardGrid pour une utilisation ailleurs dans l'application.
export default CardGrid;
