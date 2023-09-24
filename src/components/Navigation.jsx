import styles from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <NavLink exact to="/" className={({isActive}) => (isActive ? styles.activeLink : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" className={({isActive}) => (isActive ? styles.activeLink : "")}>
            Info
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
