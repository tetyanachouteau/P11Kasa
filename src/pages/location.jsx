import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import data from '../data/logement.json';
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Rating from "../components/Rating";

function Location() {
  let { id } = useParams()

  let logement = data.find(el => el.id === id)

  return (
    <div >
      <Slideshow images={logement.pictures} />
      <div>
        <div>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <Tags tags={logement.tags}></Tags>
        </div>
        <div>
          <h2>{logement.host.name}<img src={logement.host.picture} alt="profil"></img></h2>
          <Rating rating={logement.rating}></Rating>
        </div>
      </div>
      <div>
        <Collapse entete="Description">
          <p >{logement.description}</p>
        </Collapse>
        <Collapse entete="Équipements">
          <ul>{logement.equipments.map(el => <li>{el}</li>)}</ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Location;
