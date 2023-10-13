//Ce composant est utile pour afficher la notation d'un élément 
//en utilisant des étoiles actives et inactives en fonction 
//de la valeur de notation passée en prop.

//composant Rating prend en entrée une valeur de notation (rating) 
//et génère un affichage de notation sous forme d'étoiles actives et inactives.
// Voici comment cela fonctionne :
//starsActive est un tableau d'étoiles actives générées en fonction de la valeur de notation. 
//Il crée un tableau de composants <img> avec une source d'image représentant 
//une étoile active pour chaque valeur entière de notation. 
//La clé unique est utilisée pour chaque étoile active.

//starsInactive est un tableau d'étoiles inactives générées en fonction de la valeur de notation.
// Il crée un tableau de composants <img> avec une source d'image représentant 
//une étoile inactive pour compléter la notation à 5 étoiles. 
//La clé unique est utilisée pour chaque étoile inactive.

//Les étoiles actives et inactives sont ensuite affichées dans l'élément <div>, 
//ce qui génère l'affichage complet de la notation sous forme d'étoiles.

function Rating({rating}) {
    
  const starsActive = Array.from({ length: rating }, (el, index) => (
    <img key={"starActive" + index} src="../images/star-active.png" alt="star-active"/>
  ));

  const starsInactive = Array.from({ length: 5 - rating }, (el, index) => (
    <img key={"starInactive" + index} src="../images/star-inactive.png" alt="star-inactive"/>
  ));

    return (
      <div>
        {starsActive}{starsInactive}
      </div>
    );
  }
  
  export default Rating;