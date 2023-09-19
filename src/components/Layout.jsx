import React from 'react';

import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <header>
        header debut
       <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/erreur">Erreur</Link>
            </li>
          </ul>
        </nav>
        header fin
      </header>

      <main>
        <Outlet /> 
      </main>

      <footer>
        <p>footer debut</p>
        footer fin
      </footer>
    </div>
  );
}

export default Layout;
