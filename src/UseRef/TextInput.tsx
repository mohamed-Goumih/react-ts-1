import React, { useRef } from 'react';

const TextInput: React.FC = () => {
  // Création de la référence pour l'input
  const inputRef = useRef<HTMLInputElement>(null);

  // Fonction pour donner le focus au champ de texte
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Tapez quelque chose..." />
      <button onClick={focusInput}>Focus sur le champ</button>
    </div>
  );
};

export default TextInput;
