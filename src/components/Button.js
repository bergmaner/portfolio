import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../helpers/theme";
import { breakpoint } from "../helpers/mediaQueries";

const MainButton = styled.a`
background-color: #ffffff;
border: solid 1px ${props => props.primary};
color: black;
font-weight: 700;
width: max-content;
padding: 13px 22px;

text-transform: uppercase;
border-radius: 6px;
text-align: center;
text-decoration: none;
display: block;
margin-top: 20px;
margin-right: 50px;
font-size: 12px;
cursor: pointer;
transition: all .3s ease-in-out 0s;
@media${breakpoint.md}{
    font-size: 15px;
    padding: 12px 18px;
    margin-right: 0px;
}
@media${breakpoint.sm}{
    font-size: 13px;
    padding: 9px 12px;
}
:hover{
    background-color: ${props => props.primary};
    transition: all .3s ease 0s;
    color: white;
}
`;

const Button = ({ children, path, newTab }) => {
  return (
    <div>
      <MainButton primary = {ButtonColor} href={path} target={newTab && "_blank"}>
        {children}
      </MainButton>
    </div>
  );
}
export default Button;