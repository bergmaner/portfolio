import React from 'react';
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <HeroHeader/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
