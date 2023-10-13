import styles from "./Tags.module.css"

//parcourt le tableau tags et crée dynamiquement un élément div 
//pour chaque balise, en utilisant la méthode map. 
//Chaque élément div est stylisé avec la classe CSS styles.tag, 
//et chaque élément a une clé unique pour aider React
// à gérer efficacement les mises à jour de la liste.

//tags : C'est un tableau de balises, passé en tant que prop au composant Tags.
//.map((el, index) => ...) : C'est une méthode JavaScript qui parcourt 
//chaque élément du tableau tags. 
//Pour chaque élément el dans le tableau, la fonction de rappel est exécutée.
// el représente l'élément actuel du tableau, 
//et index est l'index de cet élément dans le tableau.
//<div key={"tag" + index} className={styles.tag}>{el}</div> : 
//À chaque itération de la boucle map, un élément div est créé. 
//Voici ce que chaque partie de cet élément fait :
//key={"tag" + index} : La prop key est utilisée pour aider React 
//à identifier de manière unique chaque élément lors de la mise à jour de la liste.
// une clé unique est générée en ajoutant "tag" à l'index de l'élément,
// ce qui garantit que chaque élément a une clé unique.
//className={styles.tag} : Cette prop className attribue la classe CSS styles.
//tag à l'élément div, ce qui applique un style CSS spécifique à cet élément.
//{el} : C'est le contenu de l'élément div, qui est la balise actuelle du tableau.

function Tags({tags}) {
    

    return (
      <div className={styles.tags}>
        {tags.map( (el,index) => <div key={"tag" + index} className={styles.tag}>{el}</div>)}
      </div>
    );
  }
  
  export default Tags;