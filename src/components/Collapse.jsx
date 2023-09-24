import React, { useState } from 'react';
import styles from './Collapse.module.css'; // Importez votre fichier CSS pour gérer le style

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.collapse}>
            {isCollapsed ? (
                <div className={styles.entete}>{props.entete}<img onClick={toggleCollapse} src="/images/collapsed.png" alt="collaped"></img></div>
            ) : (
                <div className={styles.entete}>{props.entete}<img onClick={toggleCollapse} src="/images/uncollapsed.png" alt="uncollaped"></img></div>
            )}
            <div className="collapse-content">
                {isCollapsed ? null : (
                    props.children
                )}
            </div>
        </div>
    );
}

export default Collapse;
