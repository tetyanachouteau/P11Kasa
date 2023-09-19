import styles from "./Header.module.css"
import Navigation from './Navigation'; 
function Header() {

        return (
            <div className={styles.header}>
        <p>header debut</p>
        <Navigation/>
        <p>header fin</p>
    
            </div>
        );
    }
 

export default Header;