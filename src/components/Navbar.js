import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import LanguageSwitcher from "./LanguageSwitcher";
import translate from "../providers/i18n/translate";
import { menuOptions } from "../helpers/config";
import { breakpoint } from "../helpers/mediaQueries";

const Navbar = styled.header`
  background: ${(props) => props.theme.contrastColor};
  position: fixed;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 10px 20px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
margin: 0;
padding: 0;
list-style: none;
overflow: hidden;
display: flex;
justify-content: flex-end;
@media${breakpoint.md}{
  flex-direction: column;
  width: 200px;
  position: fixed;
  background: ${props => props.theme.contrastColor};
  justify-content: flex-start;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  top: 0px;
  padding-top: 52px;
  right: 0px;
  height: calc(100vh - 52px);
  transition: transform 0.4s ease;
}
li a{
    display: block;
    padding: 10px;
    color: ${(props) => props.theme.color};
    text-decoration: none;
    border-radius: 20px;
    font-size: 18px;
  }
  li a:hover{
  background-color: ${props => props.theme.color};
  color: ${(props) => props.theme.contrastColor};
  }
`;

const Logo = styled.a`
  display: inline-block;
  font-size: 1.5em;
  color: ${(props) => props.theme.color};
  padding: 10px;
  text-decoration: none;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <Logo href="#">Portfolio</Logo>
      <Hamburger open={open} setOpen={setOpen} />
      <Menu open={open}>
        {menuOptions.map((item, id) => (
          <li key={id}>
            <a href={item.content}>{translate(item.content)}</a>
          </li>
        ))}
        <LanguageSwitcher />
      </Menu>
    </Navbar>
  );
};
export default Header;
