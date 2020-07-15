import React from "react";
import styled from "styled-components";

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
margin-top: 20px;
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
              <button>Contact me</button>
              <button>See my github</button>
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
