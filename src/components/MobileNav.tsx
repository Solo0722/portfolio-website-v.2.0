import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../utils/constants";

const MobileNav = () => {
  return (
    <MobileNavWrapper>
      <Button
        target="_blank"
        type="default"
        icon={<ion-icon name="menu-outline"></ion-icon>}
        className="social-media-btn"
      />
    </MobileNavWrapper>
  );
};

const MobileNavWrapper = styled.nav`
  display: none;
  align-items: center;
  justify-content: flex-end;

  .social-media-btn {
    box-shadow: none;
    color: rgba(230, 230, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${MEDIA_QUERIES.TABLET} {
    display: flex;
  }
  ${MEDIA_QUERIES.MOBILE} {
    display: flex;
  }
`;

export default MobileNav;
