// import Banner from './components/Banner'
// import Collapse from './components/Collapse'
import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import Header from "./Header";
// import Footer from "./Footer";

function Accueil() {
  //declanche renouvellement d'affichage
  let [cards, setCards] = useState([]);
  //1fois outilisation -import react
  useEffect(() => {
    //recupere json et fait promesse (donees =data)
    fetch("http://localhost:3001/data/location.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards);
        // POURQUOI en Boucle ?
        console.log("fetch");
      });
    //tab de depandancevide (1fois execution) 1fois pour composant qu'on charge
    //17mlsec ...2sec
  }, []);
  // input en bootstrap react ???
  return (

    <body>
      
      <div className="App">
        <h1 className="Css">CSS</h1>
        <p className='LargeText'>Test1</p>

  
      </div>
      <main>
        <aside>
          <input type="text" />
          <button>Details</button>
        </aside>
        <article>
          {

          }
        </article>
      </main>
    </body>
  );
}

export default Accueil;


