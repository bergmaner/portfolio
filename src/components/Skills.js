import React from "react";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
import translate from "../providers/i18n/translate";
import { skills } from "../helpers/config";
import { breakpoint } from "../helpers/mediaQueries";

const Header = styled.h1`
  font-size: 56px;
  font-weight: 400;
  margin-top: 0px;
  @media${breakpoint.sm}{
    font-size: 30px;
  }
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
  color: ${(props) => props.color};
`;

const Container = styled.div`
  padding: 40px 20px;
  border-bottom: #f3f3f3 3px solid;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Zoom>
        <Header>{translate("skills_header")}</Header>
        <Describe>{translate("skills_description")}</Describe>
        <div>
          <SkillsIcons>
            {skills.map((skill, id) => (
              <Skill key={id}>
                <SkillIcon color={skill.color} background={skill.background}>
                  {skill.icon}
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </Skill>
            ))}
          </SkillsIcons>
        </div>
      </Zoom>
    </Container>
  );
};
export default Skills;
