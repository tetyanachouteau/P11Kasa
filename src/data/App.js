import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Supprimez l'import de Switch

import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./pages/erreur";
import Card from ".components/Card";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="info">Info</Link>
              </li>
              <li>
                <Link to="location">Location</Link>
              </li>
              <li>
                <Link to="erreur">Erreur</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/" component={App} /> {/* Page d'accueil */}
        <Route path="/info" component={Info} /> {/* Page d'info */}
        <Route path="/location" component={Location} /> {/* Page de location */}
        <Route path="/erreur" component={Erreur} /> {/* Page d'erreur */}
      </Router>
      
    </div>
   
  );
}

export default App;
