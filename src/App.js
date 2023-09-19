import { Routes, Route} from 'react-router-dom';
import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./pages/erreur";

import Layout from './components/Layout';

//La page 404 est renvoyée pour chaque route inexistante, ou si une
//valeur présente dans l’URL ne fait pas partie des données renseignées.
//Créer un composant à part pour le routeur.
//Collapse doit avoir deux états différents : il peut être ouvert ou fermé.
//● Pensez à bien utiliser les propriétés des composants pour passer les
//données voulues.
//● Souvenez-vous que votre composant peut prendre différentes formes en
//fonction de son utilisation.
//Suivez bien le design de la maquette.
//● Assurez-vous que toute route inexistante mène bien à la page d’erreur
//https://reactrouter.com/en/dev/route/error-element

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}
        >
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          <Route path="/location" element={<Location />} />
          <Route path="/erreur" element={<Erreur />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
