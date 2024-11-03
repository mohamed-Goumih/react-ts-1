import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Champ avec Focus</h1>
      <input ref={inputRef} placeholder="Cliquez pour le focus" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
