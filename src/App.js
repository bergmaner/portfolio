import React, { useContext } from "react";
import { I18nProvider } from "./providers/i18n";
import { AppContext } from "./providers/context";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.lang}>
      <div className="App">
        <Navbar />
        <HeroHeader />
        <Skills />
        <Projects />
      </div>
    </I18nProvider>
  );
};

export default App;
