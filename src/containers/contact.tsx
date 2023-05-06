import React from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";

const Contact = () => {
  return (
    <ContactWrapper>
      <TitleBar title="Let's get in touch" number={2} />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 6rem;
`;

export default Contact;
