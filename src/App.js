import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="Css">CSS</h1>
      <p>Test1</p>
      <h1 className="Css">CSS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
