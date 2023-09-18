import { Routes, Route, Link } from 'react-router-dom';
import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./pages/erreur";



function App() {
 
    //fetch("http://localhost:3000/data/logement.json")
    
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
         header fin
      </header>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/info" element={<Info />} />
        <Route path="/location" element={<Location />} />
        <Route path="/erreur" element={<Erreur />} />
      </Routes>
<main>
      Main debut
      <h1>For Selling</h1>
      Main fin
  </main>
      <footer>
       <p>footer debut</p>
       footer fin
      </footer>
    </div>
    
  );
}

export default App;
