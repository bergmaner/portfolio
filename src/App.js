import React, { useContext } from "react";
import styled from "styled-components";
import { I18nProvider } from "./providers/i18n";
import { AppContext } from "./providers/context";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const Content = styled.div`
text-align: center;
overflow: hidden;
`;

const App = () => {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.lang}>
      <Content>
        <Navbar/>
        <HeroHeader/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Content>
    </I18nProvider>
  );
};

export default App;
