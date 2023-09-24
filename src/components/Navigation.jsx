import styles from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <p>Navigation MENU: </p>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.activeLink}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" activeClassName={styles.activeLink}>
            Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" activeClassName={styles.activeLink}>
            Location
          </NavLink>
        </li>
      </ul>
      <p>Navigation MENU fin </p>
    </div>
  );
}

export default Navigation;
