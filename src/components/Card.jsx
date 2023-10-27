import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ data }) {
  // Extraction des données de la propriété "data"
  const { title, cover, id } = data;

  //Création d'un objet de style nommé "background" pour définir l'arrière-plan de la carte. 
  //Il s'agit d'un style CSS en ligne qui définit un arrière-plan d'image 
  //avec un dégradé linéaire et une image de couverture.
  const background = {
    "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%) , url(" + cover + ")"
  }

  return (
    <div className={styles.cardContainer}>
      {/* élément de division ("div") est créé avec la classe CSS "cardContainer" pour contenir la carte.
      
      Utilisation du composant "Link" pour créer un lien vers la page de détail de l'emplacement:
      avec une URL dynamique basée sur l'ID. 
      Classe CSS "card" est appliquée, style d'arrière-plan défini précédemment est également appliqué.

      Affichage du titre de la carte (nom d'emplacement) dans une balise de titre de niveau 2 ("h2").
      */}
      <Link to={"/location/" + id} className={styles.card} style={background}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default Card;

