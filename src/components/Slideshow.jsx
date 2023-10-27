// Importe l'objet principal React et le hook useState depuis la bibliothèque 'react'.
import React, { useState } from 'react';
import styles from './Slideshow.module.css';

// Définition du composant "Slideshow" avec une prop "images"
function Slideshow({ images }) {
  // Utilisation de l'état local pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  //Les fonctions nextSlide et prevSlide permettent de passer 
  //aux diapositives suivantes et précédentes en mettant à jour l'état de currentSlide:
  //les boutons "Précédent" et "Suivant" ne sont affichés que 
  //s'il y a plus d'une image dans le diaporama.

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    // Utilisation de setCurrentSlide et fonction de mise à jour pour passer à la diapositive suivante
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    // Utilisation de setCurrentSlide et fonction de mise ...
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.slideshow}> {/* Conteneur principal du diaporama */}
      {/* Affiche les boutons "Précédent" et "Suivant" uniquement s'il y a plus d'une image */}
      {images.length > 1 && (
        <>
          <img className={styles.prevButton} onClick={prevSlide} alt='prev' src='/images/left.png'></img>
          <img className={styles.nextButton} onClick={nextSlide} alt='next' src='/images/right.png'></img>
        </>
      )}

      <div className={styles.slideContainer}> {/* Conteneur pour les diapositives */}
        {images.map((image, index) => (
          //Les diapositives sont générées en utilisant la méthode .map pour parcourir tab images
          //Chaque diapositive est un élément <div> avec source d'image et classe conditionnelle:
          // si la diapositive est active (styles.activeSlide) en fonction de currentSlide.
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''
              }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Affiche le numéro de la diapositive actuelle affiché avec la classe de style */}
      {images.length > 1 && (
        <div className={styles.slideNumber}>{currentSlide + 1}/{images.length}</div>
      )}
    </div>
  );
}

export default Slideshow;
