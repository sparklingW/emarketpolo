import React from 'react';
import { dubmbData } from './dumbdata/index';
import { Context } from './Context';
import './App.css';

// Costume Components
import Header from './components/Header/index';
import InitialPage from './components/IntialPage/index';

const App = () => {
  return (
    <Context.Provider value={dubmbData}>
      <div className='application_wrapper'>
        <Header />
        <InitialPage />
      </div>
    </Context.Provider>
  );
}

export default App;
