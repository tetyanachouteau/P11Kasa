import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import data from '../data/logement.json';

function Location() {
    let { id } = useParams()

    let logement = data.find(el => el.id === id )

    return (
      <div >
        <h1>{logement.title}</h1>
        <Slideshow images={logement.pictures}/>
        <p >Page - Location fin</p>
      </div>
    );
  }
  
  export default Location;
  