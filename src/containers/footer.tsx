import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <cite>
        &copy; 2023 - Developed and designed by me | All rights reserved
      </cite>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(230, 230, 255, 0.1);
  padding: 1rem;

  cite {
    color: rgba(230, 230, 255, 0.5);
    font-size: 12px;
    text-align: center;
  }
`;

export default Footer;
