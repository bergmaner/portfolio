import React from "react";
import styled from "styled-components";

const MainButton = styled.a`
border: solid 1px ${(props) => props.theme.button};
color: ${(props) => props.theme.color};
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
@media${(props) => props.theme.breakpoint.md}{
    font-size: 15px;
    padding: 12px 18px;
    margin-right: 0px;
}
@media${(props) => props.theme.breakpoint.sm}{
    font-size: 13px;
    padding: 9px 12px;
}
:hover{
    background-color: ${(props) => props.theme.button};
    color: white;
}
`;

const Button = ({ children, path, newTab }) => {
  return (
    <div>
      <MainButton href={path} target={newTab && "_blank"}>
        {children}
      </MainButton>
    </div>
  );
};
export default Button;
