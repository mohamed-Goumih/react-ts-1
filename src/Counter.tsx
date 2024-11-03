import React, { useState, useEffect } from 'react';
import Button from './Button';

const Counter: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  useEffect(() => {

    const interval = setInterval(
      () => {
      setCount(prev=>prev+1);
     
    }, 1000);
    document.title = `Compteur : ${count}`;
    console.log(`Compteur : ${count}`);

    return () => clearInterval(interval);

  }, [count]);

  // useEffect(() => {

  //   document.title = `Compteur : ${count}`;
  //   console.log(`Compteur : ${count}`);
    
  // }, [count]);

  return (
    <div>
      <p>Compteur : {count}</p>
      <Button label='Incrémenter' onClick={() => setCount(count + 1)}/>
      <Button label="Reset" onClick={() => setCount(0)}/>
      <Button label="Decrémenter" onClick={() => setCount(count - 1)}/>
    </div>
  );
};

export default Counter;
