import React, { useContext } from 'react';
import { CounterContext } from '../store/context';

const Counter = props => {
  const { counterState } = useContext(CounterContext);

  return <div> i'm inside the Consumer {counterState.count}</div>;
};

export default Counter;
