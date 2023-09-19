import { Routes, Route, Link } from 'react-router-dom';
import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./pages/erreur";
import Footer from './components/Footer';
import logo from "./images/logo192.png";


function App() {
 
    //fetch("http://localhost:3000/data/logement.json")
    
  return (

    
    <div className="App">
      <header>
        header debut
        <img src={logo} alt="Logo de logement" className="logo" />
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

      <Footer/>
    </div>
    
  );
}

export default App;
