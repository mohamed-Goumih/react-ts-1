import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/taches">Tâches</Link></li>
        <li><Link to="/ajoutertache">Ajouter une tâche</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Layout;
