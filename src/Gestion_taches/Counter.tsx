import React, { useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Compteur : {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrémenter</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Décrémenter</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Réinitialiser</button>
    </div>
  );
};

export default Counter;
