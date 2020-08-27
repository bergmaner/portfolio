import React from "react";
import styled from "styled-components";
import { contacts } from "../helpers/config";

const ContactForm = styled.div`
  transition: all 0.4s ease;
  display: inline-block;
  padding: 10px 11px;
  border-radius: 100%;
  background: #ddd;
  color: #555;
  svg {
    font-size: 30px;
  }
  :hover {
    background: ${(props) => props.color};
    color: #fff;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.div`
  font-size: 20px;
  margin-left: 5px;
  @media${(props) => props.theme.breakpoint.xs}{
      font-size: 14px;
  }
`;

const ContactForms = () => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactContainer style={{ margin: "5px" }}>
          <a target={contact.target} href={contact.path}>
            <ContactForm color={contact.color}>{contact.icon}</ContactForm>
          </a>
          <Text>{contact.text}</Text>
        </ContactContainer>
      ))}
    </div>
  );
};
export default ContactForms;
