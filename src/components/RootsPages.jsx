import { Routes, Route} from 'react-router-dom';
import Accueil from "../pages/accueil";
import Info from "../pages/info";
import Location from "../pages/location";
import Erreur from '../pages/erreur';

import Layout from '../components/Layout';

function RootsPages() {
    return (
<Routes>
        <Route path="/" element={<Layout />}
        >
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          <Route path="/location" element={<Location />} />
          <Route path="/erreur" element={<Erreur />} />
          <Route path="*" element={<Erreur />} />
          
        </Route>
      </Routes>

);
}

export default RootsPages;