import styles from "./Navigation.module.css"
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <div className={styles.navigation}>
            <p>Navigation MENU: </p>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/erreur">Erreur</Link>
            </li>
          </ul>
          <p>Navigation MENU fin </p>
        </div>
    );
}

export default Navigation;