import styles from "./Header.module.css"
import Navigation from './Navigation'; 
function Header() {

        return (
            <div className={styles.header}>
                <img src="/LOGO.png" alt="Logo Kasa"></img>
                <Navigation/>
            </div>
        );
    }
 

export default Header;