// Importation des modules nécessaires depuis les dépendances
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import data from '../data/logement.json';
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import styles from "./location.module.css"

// Définition du composant "Location"
function Location() {
  // Récupération du paramètre "id" de l'URL à l'aide de "useParams"
  let { id } = useParams()

  // Recherche du logement correspondant dans les données en fonction de l'ID
  let logement = data.find(el => el.id === id)

  // Vérification si le logement a été trouvé
  if (logement) {
    return (
      <div className={styles.location}>
        {/* Affichage d'un diaporama avec les images du logement */}
        <Slideshow images={logement.pictures} />
        <div className={styles.info}>
          <div>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            {/* Affichage des tags associés au logement */}
            <Tags tags={logement.tags}></Tags>
          </div>
          <div>
            <div className={styles.profil}>
              {/* Affichage du nom de l'hôte avec des sauts de ligne entre les parties du nom */}
              <h2>{logement.host.name.split(" ").map((el, index) => <span key={"name" + index}>{el}<br></br></span>)}</h2>
              <img src={logement.host.picture} alt="profil"></img>
            </div>
            {/* Affichage de la note de l'hôte */}
            <Rating rating={logement.rating}></Rating>
          </div>
        </div>
        <div className={styles.info}>
          <Collapse entete="Description" className={styles.mid}>
            {/* Affichage de la description du logement */}
            <p >{logement.description}</p>
          </Collapse>
          <Collapse entete="Équipements" className={styles.mid}>
            <ul>
              {/* Affichage de la liste non ordonnée qui affiche 
              les équipements du logement. 
              Eléments de liste (<li>) générés dynamiquement et affichés
               comme un élément de liste dans la liste non ordonnée.
               */}
              {logement.equipments.map((el, index) => <li key={"equiq" + index}>{el}</li>)}
              {/* map parcours  chaque élément
              et exécute une fonction qui prend deux arguments : 
              el (l'élément actuel) et index (l'index de l'élément dans le tableau) */}
            </ul>
          </Collapse>
        </div>
      </div>
    );
  } else {
    // Redirection vers une page d'erreur si le logement n'a pas été trouvé
    return <Navigate to="/erreur" />
  }
}

// Exportation du composant "Location" pour une utilisation ultérieure
export default Location;

/*


<li key={"equiq" + index}>{el}</li>: À chaque itération de la boucle map, 
un élément de liste (<li>) est créé. 
Le contenu de l'élément de liste ({el}) est défini 
comme l'élément actuel du tableau (l'équipement). 
La clé (key) est définie comme une chaîne unique basée sur l'index 
pour aider React à suivre les éléments de liste.
 */
