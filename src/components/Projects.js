import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import translate from "../providers/i18n/translate";
import { projects } from "../helpers/config";
import { breakpoint } from "../helpers/mediaQueries";

const Container = styled.div`
padding: 40px 20px;
border-bottom: #F3F3F3 3px solid;
`;

const Header = styled.h1`
  font-size: 56px;
  font-weight: 400;
  margin-top: 0px;
`;

const CardsContainer = styled.div`
  position: relative;
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
  @media${breakpoint.lg}{
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Header>{translate("projects_header")}</Header>
      <CardsContainer>
       {projects.map((project,id)=><ProjectCard key={id} title={project.title} description={project?.description} path={project.image}/>)}
      </CardsContainer>
    </Container>
  );
};

export default Projects;
