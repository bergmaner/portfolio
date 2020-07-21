import React, { useContext } from "react";
import { AppContext } from "../providers/context";
import {LOCALES} from "../providers/i18n";
import styled from "styled-components";

const Switcher = styled.div`
    padding: 10px;
`;

const Language = styled.span`
  padding: 5px;
  transition: transform 0.4s ease;
  text-transform: uppercase;
  background: ${props=>props.active ? props.theme.color : "transparent"};
  color: ${props=>props.active ? props.theme.contrastColor : props.theme.color};
  border-radius: ${props=>props.active ? "20px" : "0px"};
  cursor: ${props=>props.active ? "default" : "pointer"};
`;

const LanguageSwitcher = () => {
  const { state,dispatch } = useContext(AppContext);
  console.log("loacales",LOCALES);
  return (
    <Switcher>
      <Language active={state.lang === "pl"} onClick={() => dispatch({ type: "SET_LANG", payload: "pl" })}>
        pl
      </Language>
      /<Language active={state.lang === "en"} onClick={() => dispatch({ type: "SET_LANG", payload: "en" })}>en</Language>
    </Switcher>
  );
};
export default LanguageSwitcher;
