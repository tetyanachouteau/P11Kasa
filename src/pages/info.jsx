import Collapse from "../components/Collapse";
import Banner from '../components/Banner';
import styles from './info.module.css';

function Info() {
    return (
      <div className={styles.info}>
        <Banner image="../images/fond2.png"/>
        <Collapse entete="Fiabilité" className={styles.collapse}>
          <p >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </Collapse>
        <Collapse entete="Respect" className={styles.collapse}>
          <p >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse entete="Service" className={styles.collapse}>
          <p >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse entete="Sécurité" className={styles.collapse}>
          <p >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </div>
    );
  }
  
  export default Info;
  