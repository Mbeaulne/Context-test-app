import React, { useReducer, createContext } from 'react';

import { CounterContext } from './context';
import counterReducer from './reducers/counter';

export const CounterContext = createContext({});

const Provider = props => {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default Provider;
