import React from "react";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import Button from "./Button";
import translate from "../providers/i18n/translate";

const Header = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  border-bottom: #F3F3F3 3px solid;
  margin-top: 52px;
  display: flex;
  @media${(props) => props.theme.breakpoint.md}{
flex-direction: column;
  }
  > * {
    flex: 1;
    margin-bottom: 30px;
  }
  h1{
      margin-top: 0px;
  }
`;

const ImageContainer = styled.div`
  > img {
    max-width: 100%;
    height: auto;
  }
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: 24px;
  padding: 0px 30px;
  @media${(props) => props.theme.breakpoint.lg}{
    font-size: 20px;
  }
  @media${(props) => props.theme.breakpoint.xs}{
    padding: 0px;
  }
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
@media${(props) => props.theme.breakpoint.md}{
justify-content: space-around;
}
@media${(props) => props.theme.breakpoint.xs}{
  flex-direction: column;
  align-items: center;
  margin: 0px;
  }
`;

const HeroHeader = () => {
  return (
    <Header id="about">
        <div>
        <Slide left>
          <div>
            <h1>Kacper Berg</h1>
            <Paragraph>{translate("my_description")}</Paragraph>
            <ButtonContainer>
              <Button path="#contact">{translate("button_contact")}</Button>
              <Button path="https://github.com/bergmaner" newTab>
                {translate("button_github")}
              </Button>
            </ButtonContainer>
          </div>
          </Slide>
        </div>
        <Slide right>
        <ImageContainer>
          <img alt="" src={require("../assets/images/avatar.svg")}></img>
        </ImageContainer>
        </Slide>

    </Header>
  );
};
export default HeroHeader;
