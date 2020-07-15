import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { breakpoint } from "../helpers/mediaQueries";

const Header = styled.div`
  margin-top: 52px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
`;

const HeaderContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  margin: 0px auto;
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
    <Header>
      <HeaderContent>
        <div>
          <div>
            <h1>Kacper Berg</h1>
            <Paragraph>
              Student 3 roku informatyki o specjalizacji aplikacje mobilne i webowe aspirujący na stanowisko Frontend Developera.Samouk, ciągle rozwijający się.
            </Paragraph>
            <ButtonContainer>
              <Button>Contact me</Button>
              <Button>See my github</Button>
            </ButtonContainer>
          </div>
        </div>
        <ImageContainer>
          <img alt="" src={require("../assets/images/avatar.svg")}></img>
        </ImageContainer>
      </HeaderContent>
    </Header>
  );
};
export default HeroHeader;
