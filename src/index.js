import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Accueil from './pages/accueil'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Route exact path="/" component={Accueil} /> {/* Page d'accueil */}
      </App>
    </Router>
  </React.StrictMode>
);