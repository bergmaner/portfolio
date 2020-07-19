import React from "react";
import styled from "styled-components";
import Button from "./Button";
import translate from "../providers/i18n/translate";
import { breakpoint } from "../helpers/mediaQueries";

const Header = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  border-bottom: #F3F3F3 3px solid;
  margin-top: 52px;
  display: flex;
  @media${breakpoint.md}{
display: block;
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
font-size: 20px;
padding: 0px 30px;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
@media${breakpoint.md}{
justify-content: space-around;
}
`;

const HeroHeader = () => {
  return (
    <Header id="about">
        <div>
          <div>
            <h1>Kacper Berg</h1>
            <Paragraph>
              {translate("my_description")}
            </Paragraph>
            <ButtonContainer>
              <Button>{translate("button_contact")}</Button>
              <Button>{translate("button_github")}</Button>
            </ButtonContainer>
          </div>
        </div>
        <ImageContainer>
          <img alt="" src={require("../assets/images/avatar.svg")}></img>
        </ImageContainer>
    </Header>
  );
};
export default HeroHeader;
