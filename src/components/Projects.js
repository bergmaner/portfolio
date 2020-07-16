import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div``;

const Header = styled.h1`
  font-size: 56px;
  font-weight: 400;
  margin-top: 0px;
`;

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
`;

const Image = styled.img`
  width: 100%;
  position:absolute;
  top:0px;
`;

const CardsContainer = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  transition: all 0.5s ease-in-out;
`;

const Card = styled.div`
  position: relative;
  height: 205px;
  background: #F3F3F3;
  display: flex;
  width: 45%;
  margin: 30px 0px;
  :hover ${ImageContainer} {
    width: 150px;
    height: 150px;
    transform: translate(-75px, calc(50% - 37px));
    transition: 0.5s ease-in-out;
  }
`;

const Content = styled.div`
  position: absolute;
  right: 0px;
  width: calc(100% - 100px);
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 0px;
    margin-bottom: 5px;
    font-size: 24px;
  }
  p {
    text-align: left;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Header>My Projects</Header>
      <CardsContainer>
        <Card>
          <ImageContainer>
            <Image src={require("../assets/images/MovieFinder.png")} />
          </ImageContainer>
          <Content>
            <div>
              <h3>MovieFinder</h3>
              <p>
                Lorem ipsum jhhhhhhhhhhj h jh h jhbhjbhjbk, bj jhk hj hjjb hj hj
                ndfkjjdfsknj njn jsdfn ksn kjn jfndksfdn sdjfn ksdjnf j jsdfn jk
                njkdsfn jkn jn jksfnjk njk ndsjfn ndskjf kj jfds kj
              </p>
           Github
            </div>
          </Content>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Projects;
