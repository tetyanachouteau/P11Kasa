import Collapse from "../components/Collapse";
import Banner from '../components/Banner';

function Info() {
    return (
      <div>
        <Banner image="../images/fond2.png"/>
        <h1>Page - INFO</h1>
        <Collapse entete="test de titre">
          <p >Climatisation
Wi-Fi
Cuisine
Espace de travail
Fer à repasser
Sèche-cheveux
Cintres</p>
        </Collapse>
      
      </div>
    );
  }
  
  export default Info;
  