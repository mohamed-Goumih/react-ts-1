import React, { useState } from 'react';
import NumberList from './NumberList';

const Calcul: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

  const addRandomNumber = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 10)]);
  };

  return (
    <div>
      <h1>Exemple d'utilisation de useMemo</h1>
      <button onClick={addRandomNumber}>Ajouter un nombre aléatoire</button>
      <NumberList numbers={numbers} />
    </div>
  );
};

export default Calcul;
