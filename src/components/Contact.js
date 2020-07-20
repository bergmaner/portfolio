import React from "react";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
import ContactForms from "./ContactForms";
import { breakpoint } from "../helpers/mediaQueries";
import translate from "../providers/i18n/translate";

const Container = styled.div`
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100%;
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
        <Zoom>
      <Information>
        <h1>{translate("contact_header")}</h1>{" "}
  <Paragraph>{translate("contact_description")}</Paragraph>
        <ContactForms />
      </Information>
      <ImageContainer>
        <Image src={require("../assets/images/contact.svg")} />
      </ImageContainer>
      </Zoom>
    </Container>
  );
};
export default Contact;
