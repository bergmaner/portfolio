import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../helpers/theme";
import { breakpoint } from "../helpers/mediaQueries";

const MainButton = styled.a`
background-color: ${props => props.primary};
color: white;
font-weight: 700;
width: max-content;
padding: 6px 11px;
margin: 0px 20px;
text-transform: uppercase;
border-radius: 10px;
text-align: center;
text-decoration: none;
display: block;
font-size: 12px;
cursor: pointer;
transition: all .3s ease-in-out 0s;
: hover{
    filter: brightness(90%);
}
`;

const ProjectButton = ({ children, path, newTab }) => {
  return (
    <div>
      <MainButton primary = {ButtonColor} href={path} target={newTab && "_blank"}>
        {children}
      </MainButton>
    </div>
  );
}
export default ProjectButton;