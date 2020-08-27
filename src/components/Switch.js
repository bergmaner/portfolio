import React, { useContext } from "react";
import styled from "styled-components";
import THEMES from "../providers/themes/themeList";
import { AppContext } from "../providers/context";

const SwitchWrapper = styled.div`
  position: relative;
  margin: 7.5px 0px;
  display:inline-block;
  width: 43px;
  @media${(props) => props.theme.breakpoint.md}{
    transform: translateX(80px);
  }

`;

const SwitchLabel = styled.label`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchBox = styled.input`
  opacity: 0;
  z-index: 15;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchLabel} {
    background: #444;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Image = styled.img`
height: 25px;
align-self: center;
transform: translateY(-4px);
`

const Switch = () => {
  const { state, dispatch } = useContext(AppContext);
  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };
  return (
    <>
    <SwitchWrapper>
      <SwitchBox
        onChange={
          state.theme === THEMES.LIGHT
            ? () => setTheme(THEMES.DARK)
            : () => setTheme(THEMES.LIGHT)
        }
        type="checkbox"
      />
      <SwitchLabel />
    </SwitchWrapper>
     <Image src={state.theme === THEMES.LIGHT ? require("../assets/images/light.svg") : require("../assets/images/dark.svg") }/>
    </>
  );
};

export default Switch;
