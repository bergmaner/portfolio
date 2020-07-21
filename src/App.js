import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { I18nProvider } from "./providers/i18n";
import { AppContext } from "./providers/context";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopArrow from "./components/TopArrow";
import Ubuntu from './fonts/Ubuntu-Italic.ttf';
import Megrim from './fonts/Megrim-Regular.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'main';
  src: url(${Ubuntu}) format('truetype');
}

@font-face {
  font-family: 'footerFont';
  src: url(${Megrim}) format('truetype');
}

body {
  margin: 0;
    font-family: 'main', Arial;
}
html{
  scroll-behavior: smooth;
}
`;

const Content = styled.div`
text-align: center;
overflow: hidden;
`;

const App = () => {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.lang}>
       <GlobalStyle />
      <Content>
        <Navbar/>
        <HeroHeader/>
        <Skills/>
        <Projects/>
        <Contact/>
        <TopArrow/>
        <Footer/>
      </Content>
    </I18nProvider>
  );
};

export default App;
