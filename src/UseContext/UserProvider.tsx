import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définir le type des données du contexte
interface UserContextType {
  name: string;
  age: number;
  updateName: (name: string) => void;
}

// Créer le contexte avec le type défini, en autorisant `null` pour le type initial
const UserContext = createContext<UserContextType | null>(null);

// Définir le composant `UserProvider` qui encapsulera les composants enfants
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age] = useState(25);

  const updateName = (newName: string) => {
    setName(newName);
  };

  return (
    <UserContext.Provider value={{ name, age, updateName }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser facilement le contexte UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
