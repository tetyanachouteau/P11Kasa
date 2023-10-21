// Importations : React et useState sont importés depuis la bibliothèque React,
// et styles est importé depuis un fichier CSS pour la gestion du style.
import React, { useState } from 'react';
import styles from './Collapse.module.css';

// Composant Collapse : Il crée une section pliable qui peut être utilisée pour afficher/masquer du contenu.
function Collapse({ entete, children, className }) {
    // Utilisation de l'état local "isCollapsed" pour suivre l'état actuel du collapsible.
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Fonction toggleCollapse : Inverse l'état "isCollapsed" lorsque l'en-tête est cliquée.
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={[styles.collapse, className].join(" ")}>
            <div className={styles.entete}>{entete}
                {/* Icône pour indiquer l'état actuel du collapsible (plié/déplié).
                Le clic sur l'icône déclenche la fonction toggleCollapse. */}
                <img onClick={toggleCollapse} src={isCollapsed ? ("/images/collapsed.png") : ("/images/uncollapsed.png")} alt="collapsed" />
            </div>
            {/* Le contenu est affiché ou masqué en fonction de l'état "isCollapsed". */}
            <div className={isCollapsed ? styles.collapseContentHidden : styles.collapseContent}>
                {children}
            </div>
        </div>
    );
}

// Exportation du composant Collapse pour être utilisé ailleurs dans l'application.
export default Collapse;
