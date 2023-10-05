import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ data }) {
  const { title, cover, id } = data;

  const background = {
    "background-image": "url(" + cover + ")"
  }

  return (
    <Link exact to={ "/location/" + id} className={styles.card} style={background}>
      <h2>{title}</h2>
    </Link>
  );
}

export default Card;
