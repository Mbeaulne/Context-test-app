import React, { useContext, useState, useEffect } from 'react';
import Styled from 'styled-components';

import { CounterContext } from '../store/context';
import { fetchData } from '../api/';

const StyledButton = Styled.button`
    width: 200px;
    height:100px;
    background-color: salmon;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 5px;
`;

const Button = () => {
  const { counterDispatch } = useContext(CounterContext);

  const handleClick = async type => {
    const resp = await fetchData();
    counterDispatch({ type, payload: resp });
  };

  return (
    <div>
      <StyledButton onClick={() => handleClick('increment')}>Add</StyledButton>
      <StyledButton onClick={() => handleClick('decrement')}>
        Remove
      </StyledButton>
    </div>
  );
};

export default Button;
