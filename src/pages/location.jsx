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

  if (logement) {

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
            <div className={styles.profil}>
              <h2>{logement.host.name.split(" ").map((el,index) => <span key={"name"+index}>{el}<br></br></span>  )}</h2>
              <img src={logement.host.picture} alt="profil"></img>
            </div>
            <Rating rating={logement.rating}></Rating>
          </div>
        </div>
        <div className={styles.info}>
          <Collapse entete="Description" className={styles.mid}>
            <p >{logement.description}</p>
          </Collapse>
          <Collapse entete="Équipements" className={styles.mid}>
            <ul>{logement.equipments.map((el, index) => <li key={"equiq" + index}>{el}</li>)}</ul>
          </Collapse>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/erreur" />
  }
}

export default Location;
