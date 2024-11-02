import React from 'react';
import { useUserContext } from './UserProvider';

const UserProfile: React.FC = () => {
  const { name, age, updateName } = useUserContext();

  return (
    <div>
      <h1>Nom : {name}</h1>
      <p>Âge : {age}</p>
      <button onClick={() => updateName("Nom a changer")}>
        Changer de nom
      </button>
    </div>
  );
};

export default UserProfile;
