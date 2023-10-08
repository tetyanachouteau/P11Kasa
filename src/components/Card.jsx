import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ data }) {
  const { title, cover, id } = data;

  const background = {
    "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%) , url(" + cover + ")"
  }

  return (
    <div  className={styles.cardContener}>
    <Link to={ "/location/" + id} className={styles.card} style={background}>
      <h2>{title}</h2>
    </Link>

</div>
  );
}

export default Card;
