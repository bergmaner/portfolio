import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: #f3f3f3 3px solid;
  display: flex;
`;

const Image = styled.img`
  width: 80%;
`;

const Information = styled.div`
  width: 100%;
  padding: 20px;
`;

const Paragraph = styled.p`
text-align: left;
font-size: 20px;
padding: 0px 30px;
`;


const Contact = () => {
  return (
    <Container>
      <Information>
        <h1>Skontaktuj się ze mną</h1>{" "}
        <Paragraph>
          Obecnie szukam pierwszej pracy lub praktyki w zawodzie, jeśli
          spodobały ci się moje projekty zapraszam do kontaktu.
        </Paragraph>
      </Information>
      <div>
        <Image src={require("../assets/images/contact.svg")} />
      </div>
    </Container>
  );
};
export default Contact;
