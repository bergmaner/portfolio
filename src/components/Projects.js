import React from "react";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import translate from "../providers/i18n/translate";
import { projects } from "../helpers/config";

const Container = styled.div`
padding: 40px 20px;
border-bottom: #F3F3F3 3px solid;
@media${(props) => props.theme.breakpoint.xs}{
  padding: 40px 0px;
}
`;

const Header = styled.h1`
  font-size: 56px;
  font-weight: 400;
  margin-top: 0px;
  @media${(props) => props.theme.breakpoint.sm}{
    font-size: 30px;
  }
`;

const CardsContainer = styled.div`
  position: relative;
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
  @media${(props) => props.theme.breakpoint.lg}{
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Zoom>
        <Header>{translate("projects_header")}</Header>
        <CardsContainer>
          {projects.map((project, id) => (
            <ProjectCard
              key={id}
              title={project.title}
              description={project?.description}
              path={project.image}
              livePath={project.live}
              githubPath={project.github}
            />
          ))}
        </CardsContainer>
      </Zoom>
    </Container>
  );
};

export default Projects;
