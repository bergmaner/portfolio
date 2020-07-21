import React from "react";
import styled from "styled-components";
import { breakpoint } from "../helpers/mediaQueries";
const Burger = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  flex-direction: column;
  display: none;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
@media${breakpoint.md}{
display: flex;
}
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.theme.color};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.open ? "0" : "1")};
      transform: ${(props) =>
        props.open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hamburger = ({ open, setOpen }) => {
  return (
    <Burger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  );
};
export default Hamburger;
