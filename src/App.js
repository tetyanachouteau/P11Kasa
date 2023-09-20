import { Routes, Route} from 'react-router-dom';
import Accueil from "./pages/accueil";
import Info from "./pages/info";
import Location from "./pages/location";
import Erreur from "./components/Erreur";

import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}
        >
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<Erreur />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
