// Importation des modules nécessaires depuis les dépendances
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import data from '../data/logement.json';
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import styles from "./location.module.css"

// Définition du composant "Location"
function Location() {
  // Récupération du paramètre "id" de l'URL à l'aide de "useParams"
  let { id } = useParams()

  // Recherche du logement correspondant dans données en fonction de l'ID
  let logement = data.find(el => el.id === id)

  // Vérification si logement a été trouvé
  if (logement) {
    return (
      <div className={styles.location}>
        {/* Affichage de diaporama avec images du logement */}
        <Slideshow images={logement.pictures} />
        <div className={styles.info}>
          <div>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            {/* Affichage des tags associés au logement */}
            <div className={styles.tags}>
              {logement.tags.map((el, key) => <Tag el={el} key={key}></Tag>)}
            </div>
          </div>
          <div className={styles.rateprof}>
            <div className={styles.profil}>
              {/* Affichage du nom d'hôte avec sauts de ligne entre parties du nom */}
              <h2>{logement.host.name.split(" ").map((el, index) => <span key={"name" + index}>{el}<br></br></span>)}</h2>
              <img src={logement.host.picture} alt="profil"></img>
            </div>
            {/* Affichage note d'hôte */}
            <Rating rating={logement.rating}></Rating>
          </div>
        </div>
        {/* Utilisation de className pour appliquer plusieurs classes CSS à un élément */}
        <div className={[styles.subinfo, styles.info].join(" ")}>
          <Collapse entete="Description" className={styles.mid}>
            {/* Affichage de description du logement */}
            <p >{logement.description}</p>
          </Collapse>
          <Collapse entete="Équipements" className={styles.mid}>
            <ul>
              {/* Affichage de liste_non_ordonnée : Equipements du logement. Eléments (<li>) générés dynamiquement.*/}
              {/* Clé - key - chaîne unique basée sur index - suivie éléments de liste.*/}
              {logement.equipments.map((el, index) => <li key={"equiq" + index}>{el}</li>)}
              {/* map parcours  chaque élément et exécute fonction qui prend deux arguments : */}
              {/* el (élément actuel) et index (index d'élément dans tableau) */}
            </ul>
          </Collapse>
        </div>
      </div>
    );
  } else {
    // Redirection vers page d'erreur si logement n'a pas été trouvé
    return <Navigate to="/erreur" />
  }
}

// Exportation du composant "Location" pour utilisation ultérieure
export default Location;


