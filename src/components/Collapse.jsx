import React, { useState } from 'react'; // Importation de React et de la fonction useState.
import styles from './Collapse.module.css'; // Importation des styles CSS depuis un fichier externe.

// Composant Collapse : Ce composant crée une section pliable qui peut afficher/masquer du contenu.
function Collapse({ entete, children, className }) {
    // Utilisation de l'état local "isCollapsed" pour suivre l'état actuel du collapsible.
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Fonction toggleCollapse : Cette fonction inverse l'état "isCollapsed" lorsque l'en-tête est cliquée.
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Le composant Collapse retourne le JSX qui sera rendu dans le DOM.
    return (
        <div className={[styles.collapse, className].join(" ")}>
            {/* La div principale a deux classes CSS : styles.collapse (importé depuis Collapse.module.css)
                et la classe dynamique passée via la prop className. Elles sont jointes ensemble et
                ajoutées comme classe de l'élément div. */}

            <div className={styles.entete}>{entete}
                {/* La partie d'en-tête de la section pliable contient le texte de l'en-tête
                et une icône qui permet de plier/déplier la section. */}
                <img onClick={toggleCollapse} src={isCollapsed ? ("/images/collapsed.png") : ("/images/uncollapsed.png")} alt="collapsed" />
            </div>
            {/* Le contenu est conditionnellement affiché ou masqué en fonction de l'état "isCollapsed". */}
            <div className={isCollapsed ? styles.collapseContentHidden : styles.collapseContent}>
                {children}
            </div>
        </div>
    );
}

// Exportation du composant Collapse pour être utilisé ailleurs dans l'application.
export default Collapse;

//{children}= <p>:
//<Collapse entete="En-tête de la section pliable">
//  <p>Contenu de la section pliable.</p>
//</Collapse>
