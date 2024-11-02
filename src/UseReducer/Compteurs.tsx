import { useReducer, ChangeEvent } from 'react';

// Définition des types d'actions pour le reducer
type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set'; payload: number };

// Définition du type de l'état
interface StateType {
  count: number;
}

// Initialisation de l'état du compteur
const initialState: StateType = { count: 0 };

// Définition du reducer qui gère l'état en fonction des actions
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    case 'set':
      return { count: action.payload };
    default:
      return state;
  }
};

// Composant principal Counter
const Compteurs: React.FC = () => {
  // Utilisation de useReducer pour gérer l'état et les actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Gestion du changement de valeur dans l'input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    dispatch({ type: 'set', payload: newValue });
  };

  return (
    <div>
      <h1>Compteur : {state.count}</h1>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => dispatch({ type: 'increment' })}>Incrémenter</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Décrémenter</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Réinitialiser</button>
      </div>
      <input
        type="number"
        value={state.count}
        onChange={handleChange}
        style={{ width: '100px' }}
      />
    </div>
  );
};

export default Compteurs;
