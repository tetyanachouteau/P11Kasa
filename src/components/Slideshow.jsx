// Importation des dépendances
import React, { useState } from 'react';
import styles from './Slideshow.module.css';

//Ce composant "Slideshow" gère un diaporama d'images avec 
//des boutons "Précédent" et "Suivant". 
//Il utilise l'état local pour suivre l'index 
//de la diapositive actuelle (currentSlide). 
//Les fonctions nextSlide et prevSlide permettent de passer 
//aux diapositives suivantes et précédentes en mettant à jour l'état de currentSlide.

//L'affichage du composant comprend des boutons de navigation, 
//le conteneur des diapositives, l'affichage de l'image actuelle, 
//le numéro de la diapositive actuelle, 
//et des styles CSS pour styliser l'ensemble du diaporama.

//Le code prend également en compte le fait que
// les boutons "Précédent" et "Suivant" ne sont affichés que 
//s'il y a plus d'une image dans le diaporama.

// Définition du composant "Slideshow" avec une prop "images"
function Slideshow({ images }) {
  // Utilisation de l'état local pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    // Utilisation de setCurrentSlide avec une fonction de mise à jour pour passer à la diapositive suivante
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    // Utilisation de setCurrentSlide avec une fonction de mise à jour pour passer à la diapositive précédente
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
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.activeSlide : ''
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Affiche le numéro de la diapositive actuelle */}
      {images.length > 1 && (
        <div className={styles.slideNumber}>{currentSlide + 1}/{images.length}</div>
      )}
    </div>
  );
}

export default Slideshow; 


//Utilisation de l'état local (useState) pour suivre l'index de la diapositive 
//actuelle (currentSlide). Au départ, la diapositive actuelle est définie sur 0 
//(la première diapositive).

//Deux fonctions nextSlide et prevSlide sont définies pour permettre de passer 
//à la diapositive suivante et à la diapositive précédente. 
//Ces fonctions mettent à jour l'état currentSlide en conséquence.

//Le rendu du composant commence avec un conteneur principal (<div>) avec 
//la classe de style styles.slideshow.

//Les boutons "Précédent" et "Suivant" sont affichés uniquement si le nombre 
//d'images (images.length) est supérieur à 1.

//Le conteneur des diapositives est affiché à l'intérieur d'un autre conteneur 
//(<div>) avec la classe de style styles.slideContainer.

//Les diapositives sont générées en utilisant la méthode .map pour parcourir 
//le tableau images. Chaque diapositive est un élément <div> avec 
//une source d'image et une classe conditionnelle qui détermine si 
//la diapositive est active (styles.activeSlide) en fonction de currentSlide.

//Le numéro de la diapositive actuelle est affiché avec la classe de style 
//styles.slideNumber.

