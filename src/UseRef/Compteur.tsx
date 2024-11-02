import React, { useRef, useState } from 'react';

const Compteur: React.FC = () => {
  // Stocker le nombre de clics sans déclencher de re-rendu
  const countRef = useRef(0);
  const [renderedCount, setRenderedCount] = useState(0);

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Compteur (useRef) :", countRef.current);
  };

  const incrementRendered = () => {
    setRenderedCount(renderedCount + 1);
  };

  return (
    <div>
      <p>Compteur sans re-rendu : {countRef.current}</p>
      <p>Compteur avec re-rendu : {renderedCount}</p>
      <button onClick={incrementRef}>Incrémenter sans re-rendu</button>
      <button onClick={incrementRendered}>Incrémenter avec re-rendu</button>
    </div>
  );
};

export default Compteur;
