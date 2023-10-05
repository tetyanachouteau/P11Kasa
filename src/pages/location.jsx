import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import data from '../data/logement.json';
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import styles from "./location.module.css"

function Location() {
  let { id } = useParams()

  let logement = data.find(el => el.id === id)

  if(logement){

  return (
    <div className={styles.location} >
      <Slideshow images={logement.pictures} />
      <div className={styles.info}>
        <div>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <Tags tags={logement.tags}></Tags>
        </div>
        <div>
          <h2>{logement.host.name}<img src={logement.host.picture} alt="profil" className={styles.profil}></img></h2>
          <Rating rating={logement.rating}></Rating>
        </div>
      </div>
      <div className={styles.info}>
        <Collapse entete="Description" className={styles.mid}>
          <p >{logement.description}</p>
        </Collapse>
        <Collapse entete="Équipements" className={styles.mid}>
          <ul>{logement.equipments.map(el => <li>{el}</li>)}</ul>
        </Collapse>
      </div>
    </div>
  );
  }else{
    return <Navigate to="/erreur" />
  }
}

export default Location;
