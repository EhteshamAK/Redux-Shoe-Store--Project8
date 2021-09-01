import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar />
      
      </div>
    </Provider>
    
  );
}

export default App;
