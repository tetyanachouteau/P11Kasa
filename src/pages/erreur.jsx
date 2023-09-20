import styles from "./erreur.module.css"
import Erreur404 from "../components/Erreur404";
//import styles from "./Erreur.module.css"

function Erreur() {
    return (
      <div className={styles.erreur}>
       <p>Page - ERREUR</p> 
<Erreur404/>
        <p>Page - ERREUR fin</p>
      </div>
    );
  }
  
  export default Erreur;
 