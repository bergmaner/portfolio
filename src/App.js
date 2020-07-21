import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { I18nProvider } from "./providers/i18n";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./providers/themes/getTheme";
import THEMES from "./providers/themes/themeList";
import { AppContext } from "./providers/context";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopArrow from "./components/TopArrow";
import Ubuntu from "./fonts/Ubuntu-Italic.ttf";
import Megrim from "./fonts/Megrim-Regular.ttf";

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
  color: ${props=>props.theme.color};
  background: ${props=>props.theme.background};
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
  const { state, dispatch } = useContext(AppContext);
  const setTheme = (themeName) => {
    dispatch({ type: "SET_THEME", themeName });
  };
  return (
    <I18nProvider locale={state.lang}>
      <ThemeProvider theme={getTheme(state.theme)}>
        <GlobalStyle />
        <Content>
          <Navbar />
          <HeroHeader />
          <Skills />
          <Projects />
          <Contact />
          <TopArrow />
          <Footer />
        </Content>
      </ThemeProvider>
    </I18nProvider>
  );
};

export default App;
