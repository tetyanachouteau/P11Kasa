import styles from "./Tag.module.css"

// Composant Tag : Il affiche le contenu passé en tant que propriété "el" dans une balise div.
function Tag({ el }) {
    return (
      <div className={styles.tag}>{el}</div>
    );
  }
  
  // Exporte le composant Tag pour qu'il puisse être utilisé ailleurs.
  export default Tag;