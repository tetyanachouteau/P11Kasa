import React from 'react';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

function Card({ data }) {
  const { title, cover, id } = data;

  return (
    <div className={styles.card}>
      <NavLink exact to={ "/location/" + id} activeClassName={styles.activeLink}>
      <h2>{title}</h2>
    
      <img src={cover} alt={title} />
      </NavLink>
    </div>
  );
}

export default Card;
