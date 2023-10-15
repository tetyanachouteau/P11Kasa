import { Routes, Route} from 'react-router-dom';

import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from './pages/erreur';

import Layout from './components/Layout';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Accueil />} />
      <Route path="info" element={<Info />} />
    {/*comment on fait pour résuperer id?*/}
      <Route path="location/:id" element={<Location />} />
      <Route path="*" element={<Erreur />} />
      
    </Route>
    <Route path="*" element={<Erreur />} />
  </Routes>
  );
}

export default App;
