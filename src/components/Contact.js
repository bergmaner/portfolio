import React from "react";
import styled from "styled-components";
import ContactForms from "./ContactForms";
import { breakpoint } from "../helpers/mediaQueries";

const Container = styled.div`
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: #f3f3f3 3px solid;
  display: flex;
  @media${breakpoint.sm}{
      flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Information = styled.div`
  width: 80%;
  padding: 20px;
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: 20px;
  padding: 0px 30px;
  @media${breakpoint.sm}{
      font-size: 18px;
      padding: 0px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Information>
        <h1>Skontaktuj się ze mną</h1>{" "}
        <Paragraph>
          Obecnie szukam pierwszej pracy lub praktyki w zawodzie, jeśli
          spodobały ci się moje projekty zapraszam do kontaktu.
        </Paragraph>
        <ContactForms />
      </Information>
      <ImageContainer>
        <Image src={require("../assets/images/contact.svg")} />
      </ImageContainer>
    </Container>
  );
};
export default Contact;
