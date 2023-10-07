import React, { useState } from 'react';
import styles from './Collapse.module.css'; // Importez votre fichier CSS pour gérer le style

function Collapse({ entete, children, className }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={[styles.collapse, className].join(" ")}>
            <div className={styles.entete}>{entete}

                <img onClick={toggleCollapse} src={isCollapsed ? ("/images/collapsed.png") : ("/images/uncollapsed.png")} alt="collaped" />
            </div>
            {isCollapsed ? null : (
                <div className={styles.collapseContent}>{children}</div>
            )}

        </div>
    );
}

export default Collapse;
