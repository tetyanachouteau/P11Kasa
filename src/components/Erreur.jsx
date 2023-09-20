import styles from "./Erreur.module.css"
import Erreurroot from "./Erreurroot";

function Erreur() {
    return (
        
        <div className={styles.erreur}>
            Erreur debut
            <Erreurroot/>
            Erreurfin
            <p className={styles.text}>Erreur</p>
            
        </div>
    );
}

export default Erreur;