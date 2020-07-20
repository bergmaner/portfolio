import React from "react";
import styled from "styled-components";
import translate from "../providers/i18n/translate";
import ProjectButton from "./ProjectButton";
import { breakpoint } from "../helpers/mediaQueries";

const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
 @media${breakpoint.md}{
   width: 100%;
   position: relative;
   transform: translateX(0);
  
 }
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 0px;
  @media${breakpoint.md}{
    position: static;
  }

`;

const Card = styled.div`
  position: relative;
  min-height: 205px;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin: 30px 0px;
  :hover ${ImageContainer} {
    width: 150px;
    height: 75px;
    transform: translate(-75px, calc(50% - 37px));
    transition: 0.5s ease-in-out;
  }
  @media${breakpoint.lg}{
    width: 400px;
  }
  @media${breakpoint.md}{
    max-width: 300px;
    flex-direction:column;
    :hover ${ImageContainer} {
      height: auto;
      width: 100%;
      transform:translate(0,0);
      }
  }
`;

const Content = styled.div`
  position: absolute;
  right: 0px;
  width: calc(100% - 100px);
  height: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 0px;
    margin-bottom: 5px;
    font-size: 16px;
  }
  p {
    text-align: left;
    font-size: 14px;
    margin: 5px 0px;
  }
  @media${breakpoint.md}{
    padding: 25px;
    position: static;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectCard = ({ title, description, path }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={path} />
      </ImageContainer>
      <Content>
        <div>
          <h3>{title}</h3>
          <p>{translate(description)}</p>
          <ButtonContainer>
            <ProjectButton>Live</ProjectButton>
            <ProjectButton>Github</ProjectButton>
          </ButtonContainer>
        </div>
      </Content>
    </Card>
  );
};
export default ProjectCard;
