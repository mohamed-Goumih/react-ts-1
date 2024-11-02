import React, { useMemo } from 'react';

interface NumberListProps {
  numbers: number[];
}

const NumberList: React.FC<NumberListProps> = ({ numbers }) => {
  // Utilisation de useMemo pour mémoriser la somme des nombres pairs
  const evenSum = useMemo(() => {
    console.log("Calcul de la somme des nombres pairs...");
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
  }, [numbers]); 
  // La dépendance est 'numbers' - le calcul se refait uniquement si 'numbers' change

  return (
    <div>
      <h2>Liste des nombres</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>Somme des nombres pairs : {evenSum}</p>
    </div>
  );
};

export default NumberList;
