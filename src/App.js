import React from 'react';
import './App.css';
import Navbar from "./components/Nav-bar/Navbar"
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Inicio/>
      </React.Fragment>
   
  );
}

export default App;
