import React from 'react';
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <HeroHeader/>
    </div>
  );
}

export default App;
