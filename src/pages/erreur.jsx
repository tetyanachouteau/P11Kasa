import styles from "./erreur.module.css"
import { Link } from 'react-router-dom';

function Erreur() {
  return (
    <div className={styles.erreur}>
      <img src="./images/404.png" alt="Erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">
        Retourner sur la page d’accueil
      </Link>

    </div>
  );
}

export default Erreur;
