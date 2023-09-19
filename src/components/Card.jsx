import React from 'react';
import styles from './Card.module.css';

function Card({ data }) {
  const { title, description, cover, equipments, tags, host, rating, location } = data;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={cover} alt={title} />
      <h3>Équipements:</h3>
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3>Tags:</h3>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div className="host">
        <img src={host.picture} alt={host.name} />
        <p>Hosted by {host.name}</p>
      </div>
      <p>Rating: {rating}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default Card;
