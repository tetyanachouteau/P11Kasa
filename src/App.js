import { Routes, Route, Link } from 'react-router-dom';
import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./pages/erreur";
import Footer from './components/Footer';
import logo from "./images/logo192.png";
import Layout from './components/Layout';

function App() {
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

      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          <Route path="/location" element={<Location />} />
          <Route path="/erreur" element={<Erreur />} />
        </Route>
      </Routes>

      <main>
        <article></article>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
