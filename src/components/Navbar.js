import React from "react";
import styled from "styled-components";

const Navbar = styled.header`
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
li a{
    display: block;
    padding: 10px;
    color: black;
    text-decoration: none;
    transition: all 0.4s;
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
  return (
      <Navbar>
        <Logo href="#">
         Kacper Berg
        </Logo>
        <Menu>
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