import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Atendimento from './Pages/Atendimento';

function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Atendimento />
    </div>
  );
}

export default App;
