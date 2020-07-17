import React,{ useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { breakpoint } from "../helpers/mediaQueries";

const Navbar = styled.header`
position: fixed;
z-index: 2;
box-sizing: border-box;
width: 100%;
background-color: #fff;
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
background: #fff;
@media${breakpoint.md}{
  flex-direction: column;
  width: 200px;
  position: fixed;
  justify-content: flex-start;
  transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
  top: 0px;
  padding-top: 52px;
  right: 0px;
  height: calc(100vh - 52px);
  transition: transform 0.4s ease;
}
li a{
    display: block;
    padding: 10px;
    color: black;
    text-decoration: none;
    border-radius: 20px;
  }
  li a:hover{
  background-color: #f3f3f3;
  }
`;

const Logo = styled.a`
display: inline-block;
color: #000;
font-size: 1.5em;
text-decoration: none;
`;

const Header = () => {
  const [ open, setOpen ] = useState(false);
  return (
      <Navbar>
        <Logo href="#">
         Portfolio
        </Logo>
        <Hamburger open={open} setOpen={setOpen}/>
        <Menu open={open}>
        <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Menu>
      </Navbar>
  );
}
export default Header;