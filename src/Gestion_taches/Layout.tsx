import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Acceuil</Link></li>
        <li><Link to="/tasks">Liste des Tâches</Link></li>
        <li><Link to="/addtask">Ajouter une Tâche</Link></li>
        <li><Link to="/counter">Compteur</Link></li>
        <li><Link to="/focus">Champ avec Focus</Link></li>
      </ul>
    </nav>
  );
};

export default Layout;
