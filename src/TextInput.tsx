import React from 'react';

const TextInput: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export default TextInput;
