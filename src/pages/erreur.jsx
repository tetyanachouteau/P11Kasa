import styles from "./erreur.module.css"
import { NavLink } from 'react-router-dom';

function Erreur() {
  return (
    <div className={styles.erreur}>
      <img src="../images/404.png" alt="Erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink exact to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
        Retourner sur la page d’accueil
      </NavLink>

    </div>
  );
}

export default Erreur;
