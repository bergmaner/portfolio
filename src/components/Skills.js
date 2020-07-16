import React from "react";
import styled from "styled-components";
import { skills } from "../helpers/config";

const Header = styled.h1`
  font-size: 56px;
  font-weight: 400;
  margin-top: 0px;
`;

const SkillsIcons = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 3rem;
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;
`;

const Describe = styled.p`
font-size: 20px;
`;
const SkillName = styled.p`
font-size: 20px;
margin: 0px;
`;

const Skill = styled.li`
display: inline-block;
margin-right: 20px;
margin-bottom: 20px;

`;

const SkillIcon = styled.span`
color: ${props => props.color};
`;

const Container = styled.div`
padding: 40px 20px;
border-bottom: #F3F3F3 3px solid;
`;


const Skills = () => {
  return (
      <Container id= "skills">
        <Header>My Skills</Header>
        <Describe>Stack technologiczny, który obecnie poznałem</Describe>
        <div>
          <SkillsIcons>
            {skills.map((skill) => (
                <Skill>
                <SkillIcon color = {skill.color} background={skill.background}>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </Skill>
              )
            )}
          </SkillsIcons>
        </div>
      </Container>
  );
};
export default Skills;
