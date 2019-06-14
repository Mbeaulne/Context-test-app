import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';

import Provider from './store/provider';

const App = () => {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button />
          <Counter />
        </header>
      </div>
    </Provider>
  );
};

export default App;
