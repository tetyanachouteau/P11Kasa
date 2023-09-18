import React from 'react';

function Card() {
  const title = "Card: Titre de logement";
  const description = "Description de la carte";
  const cover = "url_de_l_image.jpg";
  const equipments = ["Équipement 1", "Équipement 2", "Équipement 3"];
  const tags = ["Tag 1", "Tag 2", "Tag 3"];
  const host = {
    name: "Nom de l'hôte",
    picture: "url_de_l_image_de_l_hote.jpg"
  };
  const rating = 4.5;
  const location = "Emplacement de la carte";

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={cover} />
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
        <img src={host.picture} />
        <p>Hosted by {host.name}</p>
      </div>
      <p>Rating: {rating}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default Card;
