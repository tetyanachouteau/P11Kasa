import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ data }) {
  const { title, cover, id } = data;

  return (
    <div className={styles.card}>
      <Link exact to={ "/location/" + id} activeClassName={styles.activeLink}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
