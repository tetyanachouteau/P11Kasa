import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./pages/erreur";

function App() {
  return (
    <div className="App">
      <h1>BonjourAccueil</h1>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <a href="/info">Info</a>
            </li>
            <li>
              <a href="/location">Location</a>
            </li>
            <li>
              <a href="/erreur">Erreur</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/info" element={<Info />} />
        <Route path="/location" element={<Location />} />
        <Route path="/erreur" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
