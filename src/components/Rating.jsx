//import styles from "./Rating.module.css"

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