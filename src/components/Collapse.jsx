import React, { useState } from 'react';
import styles from './Collapse.module.css'; // Importez votre fichier CSS pour gérer le style

function Collapse({ entete, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.collapse}>
             <div className={styles.entete}>{entete}
            
               <img onClick={toggleCollapse} src= {isCollapsed ? ("/images/collapsed.png") : ("/images/uncollapsed.png")} alt="collaped"/>
            </div>
            <div className="collapse-content">
                {isCollapsed ? null : (
                    children
                )}
            </div>
        </div>
    );
}

export default Collapse;
