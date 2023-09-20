import React, { useState } from 'react';
import styles from './Slideshow.module.css';

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.slideshow}>
      {images.length > 1 && (
        <>
          <button className={styles.prevButton} onClick={prevSlide}>
            &lt;
          </button>
          <button className={styles.nextButton} onClick={nextSlide}>
            &gt;
          </button>
        </>
      )}
      <div className={styles.slideContainer}>
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
      {images.length > 1 && (
        <div className={styles.slideNumber}>{currentSlide + 1}</div>
      )}
    </div>
  );
}

export default Slideshow;
