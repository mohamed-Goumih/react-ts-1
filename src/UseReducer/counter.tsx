import  { useReducer } from 'react';

// Définir les types des actions
type ActionType = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

// Définir le type de l'état
interface StateType {
  count: number;
}

// Initialiser l'état
const initialState: StateType = { count: 0 };

// Créer le reducer pour gérer les actions
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  // Utiliser useReducer pour gérer l'état et les actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrémenter</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Décrémenter</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Réinitialiser</button>
    </div>
  );
};

export default Counter;
